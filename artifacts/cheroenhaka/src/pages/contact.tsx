import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Printer } from "lucide-react";

export default function Contact() {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thank you for contacting the Cheroenhaka (Nottoway) Indian Tribe. We will respond shortly.",
    });
    e.currentTarget.reset();
  };

  return (
    <div className="w-full flex flex-col p-6 md:p-12">
      <h1 className="text-4xl text-primary font-serif font-bold border-b-4 border-secondary pb-4 mb-8">
        Contact Us
      </h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="bg-muted p-8 rounded-lg border border-border">
          <h2 className="text-2xl font-serif text-secondary mb-6">Tribal Office & Mailing Address</h2>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="text-accent mt-1 shrink-0" />
              <div>
                <p className="font-bold text-lg text-primary">Cheroenhaka (Nottoway) Indian Tribe</p>
                <p>Cattashowrock Town</p>
                <p>27345 Aquia Path</p>
                <p>P.O. Box 397</p>
                <p>Courtland, VA 23837</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Phone className="text-accent shrink-0" />
              <p><strong>Phone:</strong> 757-562-7760</p>
            </div>

            <div className="flex items-center gap-4">
              <Printer className="text-accent shrink-0" />
              <p><strong>Fax:</strong> 757-516-8125</p>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="text-accent mt-1 shrink-0" />
              <div>
                <p className="font-bold text-primary">Chief Walt "Red Hawk" Brown</p>
                <p><a href="mailto:wdbrowniii@aol.com" className="hover:text-secondary underline">wdbrowniii@aol.com</a></p>
                <p><a href="mailto:redhawkcheeta@gmail.com" className="hover:text-secondary underline">redhawkcheeta@gmail.com</a></p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-card p-8 rounded-lg border shadow-sm">
          <h2 className="text-2xl font-serif text-primary mb-6">Send a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="firstName" className="text-sm font-bold text-foreground">First Name</label>
                <Input id="firstName" required className="bg-background" />
              </div>
              <div className="space-y-2">
                <label htmlFor="lastName" className="text-sm font-bold text-foreground">Last Name</label>
                <Input id="lastName" required className="bg-background" />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-bold text-foreground">Email Address</label>
              <Input id="email" type="email" required className="bg-background" />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-bold text-foreground">Message</label>
              <Textarea id="message" required className="min-h-[150px] bg-background" />
            </div>

            <Button type="submit" className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold py-6 text-lg">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}