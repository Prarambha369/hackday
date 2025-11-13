import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const CodeOfConduct = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Back Button */}
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8 font-semibold"
        >
          <ArrowLeft size={20} />
          Back to Home
        </button>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
            Code of Conduct
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-4">
            Butwal Hack
          </h2>
          <p className="text-lg text-muted-foreground font-medium">
            Effective Date: November 13, 2025
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-10">
          {/* Summary */}
          <section className="bg-white dark:bg-slate-900 rounded-lg p-8 shadow-lg border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-4">Summary</h3>
            <p className="text-foreground/90 leading-relaxed">
              Be respectful towards other people and try to be good. Not even once in a lifetime, harassment and
              abusive behavior are allowed. If you witness or feel that someone is making you or others
              uncomfortable, or that you are in danger, whether it is physically or online, then report it. Everyone
              has the right to a supportive, inclusive, and respectful environment.
            </p>
          </section>

          {/* Our Commitment */}
          <section className="bg-white dark:bg-slate-900 rounded-lg p-8 shadow-lg border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-4">Our Commitment</h3>
            <p className="text-foreground/90 leading-relaxed">
              Butwal Hack aims to provide a safe and supportive environment for all teenage participants (under
              18) at Butwal Hack. We promise that every young person, regardless of gender, age, sexual
              orientation, disability, physical appearance, race, religion, nationality, socio-economic background,
              or any other personal characteristic, should be able to discover, invent, and collaborate without
              discrimination or harassment. This Code of Conduct outlines the organization's values and the
              expected behaviors at the event as well as all the associated activities.
            </p>
          </section>

          {/* Expected Behavior */}
          <section className="bg-white dark:bg-slate-900 rounded-lg p-8 shadow-lg border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-6">Expected Behavior</h3>
            <ul className="space-y-3">
              <li className="flex gap-4">
                <span className="text-primary font-bold">•</span>
                <span className="text-foreground/90">In your conversations with others, be respectful, empathetic, and open-minded.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-primary font-bold">•</span>
                <span className="text-foreground/90">Try to really understand what the other people are saying and also consider their perspective.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-primary font-bold">•</span>
                <span className="text-foreground/90">Interact with others in a way that is courteous and respectful.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-primary font-bold">•</span>
                <span className="text-foreground/90">Do not interfere with others' personal or private lives or try to control them.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-primary font-bold">•</span>
                <span className="text-foreground/90">If you want to take someone's photo or share their work, then get their permission first.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-primary font-bold">•</span>
                <span className="text-foreground/90">Encourage and support your co-learners in their efforts to acquire knowledge and create things.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-primary font-bold">•</span>
                <span className="text-foreground/90">Choose to be a positive contributor in workshops, discussions, and collaborative spaces.</span>
              </li>
            </ul>
          </section>

          {/* Unacceptable Behavior */}
          <section className="bg-white dark:bg-slate-900 rounded-lg p-8 shadow-lg border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-6">Unacceptable Behavior</h3>
            <p className="text-foreground/90 leading-relaxed mb-6">
              Some examples of possible behavior that may not be accepted at Hack Day Butwal are:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex gap-4">
                <span className="text-red-500 font-bold">•</span>
                <span className="text-foreground/90">Harassment, e.g., insulting or discriminating comments related to gender, age, sexual orientation, disability, race, religion, appearance, or background.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-red-500 font-bold">•</span>
                <span className="text-foreground/90">Making use of sexually charged words, pictures, or acts, e.g., the name of the projects, presentations, or team identifiers.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-red-500 font-bold">•</span>
                <span className="text-foreground/90">Intimidation, unwanted touching, spying, or threatening behavior.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-red-500 font-bold">•</span>
                <span className="text-foreground/90">Publishing or distributing sexually explicit, violent, or hateful material.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-red-500 font-bold">•</span>
                <span className="text-foreground/90">Disrupting the events, presentations, or collaborative sessions that have been organized previously.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-red-500 font-bold">•</span>
                <span className="text-foreground/90">Giving out or threatening to give out someone's private information (doxxing).</span>
              </li>
              <li className="flex gap-4">
                <span className="text-red-500 font-bold">•</span>
                <span className="text-foreground/90">Bullying, exclusionary behavior, or any action that makes another participant feel that they are not safe or that they are not welcome.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-red-500 font-bold">•</span>
                <span className="text-foreground/90">Besides, staff, volunteers, mentors, and organizers ought not to wear sexually suggestive clothes or do anything that could be considered displeasing or immodest.</span>
              </li>
            </ul>
            <p className="text-foreground/90 leading-relaxed font-semibold">
              If someone tells you that your words or actions make them uncomfortable (even if you didn't mean
              to), please stop right away. Respect is not optional; it is a requirement.
            </p>
          </section>

          {/* Scope */}
          <section className="bg-white dark:bg-slate-900 rounded-lg p-8 shadow-lg border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-4">Scope</h3>
            <p className="text-foreground/90 leading-relaxed">
              The present Code of Conduct is mandatory for everyone who is in any way related to Hack Day
              Butwal. Participants, mentors, judges, volunteers, organizers, sponsors, and guests are all covered
              by these rules. These rules control the behavior of people at the event location, during the trip
              provided by the organizers, at the social events related to the event, and in all the online spaces
              connected with the event (e.g., communication platforms, shared workspaces, or social media
              groups).
            </p>
          </section>

          {/* Reporting Concerns */}
          <section className="bg-white dark:bg-slate-900 rounded-lg p-8 shadow-lg border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-6">Reporting Concerns</h3>
            <p className="text-foreground/90 leading-relaxed mb-6">
              In case you witness or get to know about a behavior that is against this Code of Conduct or if you
              feel uncomfortable or unsafe, you should definitely get in touch with someone immediately. You can
              inform about your situation by:
            </p>
            <ol className="space-y-3 mb-6">
              <li className="flex gap-4">
                <span className="text-primary font-bold">1.</span>
                <span className="text-foreground/90">Directly addressing a Butwal Hack organizer or volunteer (check for staff badges or team members who are designated).</span>
              </li>
              <li className="flex gap-4">
                <span className="text-primary font-bold">2.</span>
                <span className="text-foreground/90">Locating the Safety & Support Desk at the event venue.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-primary font-bold">3.</span>
                <span className="text-foreground/90">Dispatching a note to <a href="mailto:support@butwalhacks.com" className="text-primary font-semibold hover:underline">support@butwalhacks.com</a>.</span>
              </li>
            </ol>
            <p className="text-foreground/90 leading-relaxed mb-6">
              Every single report is treated very seriously, handled confidentially, and with great care. We realize
              that it might be a hard thing to talk about, especially if you are a young participant, but we are here
              to listen without making any judgments.
            </p>
            <p className="text-foreground/90 leading-relaxed font-semibold mb-4">Our team members are ready to help you by:</p>
            <ul className="space-y-3">
              <li className="flex gap-4">
                <span className="text-primary font-bold">•</span>
                <span className="text-foreground/90">Giving you the support you need right away or if you want, taking you along.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-primary font-bold">•</span>
                <span className="text-foreground/90">Getting in touch with the proper guardians, school authorities, or local law enforcement, when necessary.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-primary font-bold">•</span>
                <span className="text-foreground/90">Making sure to take the steps necessary for your safety and comfort for the rest of the event.</span>
              </li>
            </ul>
          </section>

          {/* Enforcement */}
          <section className="bg-white dark:bg-slate-900 rounded-lg p-8 shadow-lg border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-6">Enforcement</h3>
            <p className="text-foreground/90 leading-relaxed mb-6">
              In a case where an individual violates the regulations outlined in this Code of Conduct, the
              subsequent handling of such a case will be conducted in a timely and fair manner very much in
              accordance with the facts of the case. Based on the severity and nature of the issue, Butwal Hack
              may only choose to carry out some of the actions from the list below which is not exhaustive:
            </p>
            <ul className="space-y-3">
              <li className="flex gap-4">
                <span className="text-primary font-bold">•</span>
                <span className="text-foreground/90">Officially warning.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-primary font-bold">•</span>
                <span className="text-foreground/90">Temporarily limiting someone's access to certain parts of the event or some activities.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-primary font-bold">•</span>
                <span className="text-foreground/90">Forcibly removing a person without their consent to a refund or participation in any other event.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-primary font-bold">•</span>
                <span className="text-foreground/90">Informing the parents or legal guardians if the participant is a minor.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-primary font-bold">•</span>
                <span className="text-foreground/90">Getting the police or other external authorities involved in case of serious situations.</span>
              </li>
            </ul>
            <p className="text-foreground/90 leading-relaxed font-semibold mt-6">
              We are putting the safety of our participants first, especially those who are minors, above
              everything else.
            </p>
          </section>

          {/* Final Note */}
          <section className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-8 shadow-lg border border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">Final Note</h3>
            <p className="text-foreground/90 leading-relaxed mb-4">
              Butwal Hack is a place where young technologists are given the necessary environment to be
              curious, collaborate, and come up with creative ideas. By following this Code of Conduct, we create
              a community where every teenage participant can thrive and innovate safely.
            </p>
            <p className="text-foreground font-semibold">— The Butwal Hack Team</p>
          </section>

          {/* Contact */}
          <section className="bg-white dark:bg-slate-900 rounded-lg p-8 shadow-lg border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-4">Contact</h3>
            <p className="text-foreground/90 leading-relaxed">
              If you want to know more or need help, please get in touch with us at{" "}
              <a href="mailto:support@butwalhacks.com" className="text-primary font-semibold hover:underline">
                support@butwalhacks.com
              </a>
            </p>
          </section>
        </div>

        {/* Back to Home Button */}
        <div className="mt-12 flex justify-center">
          <Button
            onClick={() => navigate("/")}
            size="lg"
            className="transform -rotate-1 hover:rotate-0"
          >
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CodeOfConduct;
