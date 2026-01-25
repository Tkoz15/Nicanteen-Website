"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MessageSquare, Send } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const supabase = createClient();
      
      // Insert contact form submission to Supabase
      const { error } = await supabase
        .from('contact_submissions')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            message: formData.message,
            created_at: new Date().toISOString(),
          }
        ]);

      if (error) throw error;

      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof typeof formData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [field]: e.target.value });
    if (submitStatus !== "idle") setSubmitStatus("idle");
  };

  return (
    <section id="contact" className="py-20">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-muted-foreground">
            Have questions about Nicanteen? We&apos;d love to hear from you.
          </p>
        </div>

        <Card className="mx-auto max-w-xl">
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleInputChange("name")}
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleInputChange("email")}
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us what's on your mind..."
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange("message")}
                  required
                  disabled={isSubmitting}
                />
              </div>

              <Button 
                type="submit" 
                className="w-full brand-gradient hover:opacity-90"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>

              {submitStatus === "success" && (
                <p className="text-sm text-green-600 text-center">
                  Thanks for reaching out! We&apos;ll get back to you soon.
                </p>
              )}

              {submitStatus === "error" && (
                <p className="text-sm text-red-600 text-center">
                  Something went wrong. Please try again later.
                </p>
              )}
            </form>
          </CardContent>
        </Card>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <div className="flex items-center gap-4 justify-center">
            <Mail className="h-5 w-5 text-green-600" />
            <span className="text-muted-foreground">support@nicanteen.com</span>
          </div>
          <div className="flex items-center gap-4 justify-center">
            <MessageSquare className="h-5 w-5 text-green-600" />
            <span className="text-muted-foreground">We typically respond within 24 hours</span>
          </div>
        </div>
      </div>
    </section>
  );
}