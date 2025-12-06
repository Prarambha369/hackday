import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, X, Send } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hello! 👋 Welcome to HackDay Butwal. Ask me anything about the event, rules, venue, or registration!",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke("chat", {
        body: { messages: [...messages, userMessage] },
      });

      if (error) throw error;

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.response },
      ]);
    } catch (error) {
      console.error("Error invoking chat function, using local fallback:", error);
      const fallback = getFallbackReply([...messages, userMessage]);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: fallback },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  // Local fallback replies for development when the server function or AI key isn't available.
  const getFallbackReply = (allMessages: Message[]) => {
    const lastUser = [...allMessages].reverse().find((m) => m.role === "user");
    const text = (lastUser?.content || "").toLowerCase();

    // Greetings
    if (/\b(hello|hi|namaste)\b/.test(text)) {
      return "Hello! 👋 Welcome to HackDay Butwal. Ask me anything about the event, rules, venue, or registration!";
    }

    if (text.includes("when") && text.includes("event")) {
      return "HackDay Butwal is on 17 Jan, 2026.";
    }

    if (text.includes("how long") || text.includes("duration") || text.includes("hours")) {
      return "The hackathon lasts 10 hours. You have 10 hours to plan, build, and submit your project.";
    }

    if (text.includes("where") || text.includes("venue") || text.includes("lumbini") || text.includes("butwal")) {
      return "The hackathon will take place at Lumbini World School, Butwal.";
    }

    if (text.includes("register") || text.includes("sign up") || text.includes("registration")) {
      return "You can register online here: https://events.mlh.io/events/13395-hackday-butwal 📝";
    }

    if (text.includes("team") || text.includes("members") || text.includes("how many")) {
      return "Teams can have 1–3 members. Maximum 3 participants per team.";
    }

    if (text.includes("rule") || text.includes("code of conduct") || text.includes("rules")) {
      return "Special rules are mentioned in the Code of Conduct on the event page: https://events.mlh.io/events/13395-hackday-butwal";
    }

    if (text.includes("prize") || text.includes("prizes") || text.includes("certificate") || text.includes("swag")) {
      return "Participants can win swags and many more exciting prizes at HackDay Butwal!";
    }

    if (text.includes("mentor") || text.includes("workshop")) {
      return "Mentors and workshops will be announced soon to guide participants during the event.";
    }

    if (text.includes("food") || text.includes("facility") || text.includes("facilities")) {
      return "Yes! Food and other facilities will be free for all participants.";
    }

    // Default redirect for unrelated questions
    return "I'm here to assist you with HackDay Butwal details only. Please ask about the event, venue, rules, or teams!";
  };

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 h-16 w-16 rounded-full shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-96 h-[32rem] bg-card border-4 border-foreground shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] flex flex-col transform -rotate-1">
          {/* Header */}
          <div className="bg-primary p-4 border-b-4 border-foreground flex justify-between items-center">
            <h3 className="font-black text-lg text-primary-foreground">
              Hack Day Assistant
            </h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="hover:bg-primary/80"
            >
              <X className="h-5 w-5 text-primary-foreground" />
            </Button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-background">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] p-3 border-2 border-foreground ${
                    msg.role === "user"
                      ? "bg-primary text-primary-foreground transform rotate-1"
                      : "bg-card transform -rotate-1"
                  }`}
                >
                  <p className="text-sm font-medium">{msg.content}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-card p-3 border-2 border-foreground transform -rotate-1">
                  <p className="text-sm font-medium">Thinking...</p>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t-4 border-foreground bg-card">
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                placeholder="Ask me about HackDay Butwal..."
                className="flex-1 border-2 border-foreground"
                disabled={isLoading}
              />
              <Button
                onClick={sendMessage}
                disabled={isLoading || !input.trim()}
                className="transform rotate-1 hover:rotate-0"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
