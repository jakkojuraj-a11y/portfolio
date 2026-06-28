import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useScrollReveal, revealVariants, staggerContainer } from "@/hooks/useScrollReveal";
import { Mail, Phone, Linkedin, Github, Send, Loader2 } from "lucide-react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export function Contact() {
  const { ref, isInView } = useScrollReveal();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    
    toast({
      title: "Message sent successfully!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    form.reset();
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="text-center mb-16">
            <span className="text-primary font-mono font-semibold tracking-wider uppercase text-sm">
              Get In Touch
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mt-2 font-sans tracking-tight">
              Let's Work Together
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Info */}
            <motion.div variants={revealVariants} className="space-y-6">
              <div className="glass-card p-6 rounded-2xl flex items-center gap-4 hover:-translate-y-1 transition-transform">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-1">Email</h3>
                  <a href="mailto:jakkojuraj@gmail.com" className="text-lg font-semibold hover:text-primary transition-colors">jakkojuraj@gmail.com</a>
                </div>
              </div>

              <div className="glass-card p-6 rounded-2xl flex items-center gap-4 hover:-translate-y-1 transition-transform">
                <div className="w-12 h-12 bg-[#34A853]/10 rounded-full flex items-center justify-center text-[#34A853] shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-1">Phone</h3>
                  <a href="tel:+919347522816" className="text-lg font-semibold hover:text-[#34A853] transition-colors">+91 9347522816</a>
                </div>
              </div>

              <div className="glass-card p-6 rounded-2xl flex items-center gap-4 hover:-translate-y-1 transition-transform">
                <div className="w-12 h-12 bg-[#0A66C2]/10 rounded-full flex items-center justify-center text-[#0A66C2] shrink-0">
                  <Linkedin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-1">LinkedIn</h3>
                  <a href="https://www.linkedin.com/in/jakkoju-vikasraj816" target="_blank" rel="noreferrer" className="text-lg font-semibold hover:text-[#0A66C2] transition-colors">jakkoju-vikasraj816</a>
                </div>
              </div>

              <div className="glass-card p-6 rounded-2xl flex items-center gap-4 hover:-translate-y-1 transition-transform">
                <div className="w-12 h-12 bg-foreground/10 rounded-full flex items-center justify-center text-foreground shrink-0">
                  <Github className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-1">GitHub</h3>
                  <a href="https://github.com/jakkojuraj-a11y" target="_blank" rel="noreferrer" className="text-lg font-semibold hover:text-foreground transition-colors">jakkojuraj-a11y</a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={revealVariants} className="glass-card p-8 rounded-3xl relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-3xl pointer-events-none" />
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 relative z-10">
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} className="bg-background/50 backdrop-blur-sm" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="john@example.com" {...field} className="bg-background/50 backdrop-blur-sm" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <FormControl>
                          <Input placeholder="Job Opportunity" {...field} className="bg-background/50 backdrop-blur-sm" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Hi Vikas, I'd like to talk about..." 
                            className="min-h-[120px] bg-background/50 backdrop-blur-sm resize-none" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
