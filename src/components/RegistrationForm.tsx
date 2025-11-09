import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const registrationSchema = z.object({
  full_name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Invalid email address").max(255),
  phone: z.string().min(10, "Phone must be at least 10 digits").max(20),
  institution: z.string().min(2, "Institution name required").max(200),
  team_name: z.string().max(100).optional(),
  team_size: z.number().min(1).max(4),
  experience_level: z.enum(["beginner", "intermediate", "advanced"]),
  interests: z.array(z.string()).min(1, "Select at least one interest"),
});

type RegistrationFormData = z.infer<typeof registrationSchema>;

interface RegistrationFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const interestOptions = [
  "AI & Machine Learning",
  "Web Development",
  "Mobile App Development",
  "Hardware & IoT",
  "Open Innovation",
];

const RegistrationForm = ({ open, onOpenChange }: RegistrationFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<RegistrationFormData>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      team_size: 1,
      interests: [],
    },
  });

  const handleInterestToggle = (interest: string) => {
    const updated = selectedInterests.includes(interest)
      ? selectedInterests.filter((i) => i !== interest)
      : [...selectedInterests, interest];
    setSelectedInterests(updated);
    setValue("interests", updated);
  };

  const onSubmit = async (data: RegistrationFormData) => {
    setIsSubmitting(true);
    try {
      const { error } = await supabase.from("registrations").insert([
        {
          full_name: data.full_name,
          email: data.email,
          phone: data.phone,
          institution: data.institution,
          team_name: data.team_name || null,
          team_size: data.team_size,
          experience_level: data.experience_level,
          interests: data.interests,
        },
      ]);

      if (error) throw error;

      toast({
        title: "Registration Successful! 🎉",
        description: "We've received your registration. See you at Hack Day!",
      });

      reset();
      setSelectedInterests([]);
      onOpenChange(false);
    } catch (error: any) {
      console.error("Registration error:", error);
      toast({
        title: "Registration Failed",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto border-4 border-foreground">
        <DialogHeader>
          <DialogTitle className="text-3xl font-black text-primary">
            Register for Hack Day Butwal 1.0
          </DialogTitle>
          <DialogDescription>
            Fill in your details to secure your spot at Nepal's premier 12-hour
            hackathon!
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 mt-4">
          {/* Full Name */}
          <div>
            <Label htmlFor="full_name" className="font-bold">
              Full Name *
            </Label>
            <Input
              id="full_name"
              {...register("full_name")}
              className="border-2 border-foreground"
              placeholder="John Doe"
            />
            {errors.full_name && (
              <p className="text-sm text-destructive mt-1">
                {errors.full_name.message}
              </p>
            )}
          </div>

          {/* Email & Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="email" className="font-bold">
                Email *
              </Label>
              <Input
                id="email"
                type="email"
                {...register("email")}
                className="border-2 border-foreground"
                placeholder="john@example.com"
              />
              {errors.email && (
                <p className="text-sm text-destructive mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="phone" className="font-bold">
                Phone *
              </Label>
              <Input
                id="phone"
                {...register("phone")}
                className="border-2 border-foreground"
                placeholder="+977 9800000000"
              />
              {errors.phone && (
                <p className="text-sm text-destructive mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>
          </div>

          {/* Institution */}
          <div>
            <Label htmlFor="institution" className="font-bold">
              School/College/University *
            </Label>
            <Input
              id="institution"
              {...register("institution")}
              className="border-2 border-foreground"
              placeholder="Your institution name"
            />
            {errors.institution && (
              <p className="text-sm text-destructive mt-1">
                {errors.institution.message}
              </p>
            )}
          </div>

          {/* Team Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="team_name" className="font-bold">
                Team Name (Optional)
              </Label>
              <Input
                id="team_name"
                {...register("team_name")}
                className="border-2 border-foreground"
                placeholder="Team Awesome"
              />
            </div>

            <div>
              <Label htmlFor="team_size" className="font-bold">
                Team Size *
              </Label>
              <Select
                onValueChange={(value) =>
                  setValue("team_size", parseInt(value))
                }
                defaultValue="1"
              >
                <SelectTrigger className="border-2 border-foreground">
                  <SelectValue placeholder="Select team size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Solo (1 person)</SelectItem>
                  <SelectItem value="2">2 people</SelectItem>
                  <SelectItem value="3">3 people</SelectItem>
                  <SelectItem value="4">4 people</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Experience Level */}
          <div>
            <Label htmlFor="experience_level" className="font-bold">
              Experience Level *
            </Label>
            <Select
              onValueChange={(value) =>
                setValue(
                  "experience_level",
                  value as "beginner" | "intermediate" | "advanced"
                )
              }
            >
              <SelectTrigger className="border-2 border-foreground">
                <SelectValue placeholder="Select your experience" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="beginner">
                  Beginner - New to hackathons
                </SelectItem>
                <SelectItem value="intermediate">
                  Intermediate - Some experience
                </SelectItem>
                <SelectItem value="advanced">
                  Advanced - Hackathon veteran
                </SelectItem>
              </SelectContent>
            </Select>
            {errors.experience_level && (
              <p className="text-sm text-destructive mt-1">
                {errors.experience_level.message}
              </p>
            )}
          </div>

          {/* Interests */}
          <div>
            <Label className="font-bold mb-3 block">
              Areas of Interest * (Select all that apply)
            </Label>
            <div className="space-y-3">
              {interestOptions.map((interest) => (
                <div key={interest} className="flex items-center space-x-2">
                  <Checkbox
                    id={interest}
                    checked={selectedInterests.includes(interest)}
                    onCheckedChange={() => handleInterestToggle(interest)}
                  />
                  <label
                    htmlFor={interest}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {interest}
                  </label>
                </div>
              ))}
            </div>
            {errors.interests && (
              <p className="text-sm text-destructive mt-1">
                {errors.interests.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            size="lg"
            className="w-full font-bold text-lg transform -rotate-1 hover:rotate-0"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Complete Registration 🚀"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default RegistrationForm;
