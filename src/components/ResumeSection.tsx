import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { FileText, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ResumeSection() {
  const { ref, isInView } = useScrollReveal();

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl p-1 bg-gradient-to-r from-primary via-[#8B83FF] to-[#FF6584]"
        >
          <div className="glass-card bg-background/95 rounded-[1.4rem] p-8 md:p-12 text-center relative overflow-hidden">
            {/* Background blur effects */}
            <div className="absolute -top-24 -left-24 w-48 h-48 bg-primary/20 blur-3xl rounded-full" />
            <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-[#FF6584]/20 blur-3xl rounded-full" />

            <div className="relative z-10">
              <div className="w-16 h-16 mx-auto bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6">
                <FileText className="w-8 h-8" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Want the full picture?</h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Download my resume to see my complete experience, education, and technical skill set in a single document.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="rounded-full px-8 text-base shadow-lg shadow-primary/20 hover:shadow-primary/40">
                  <a href={`${import.meta.env.BASE_URL}Vikasraj__Resume.pdf`} download>
                    <Download className="mr-2 w-5 h-5" />
                    Download PDF
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full px-8 text-base bg-background/50 hover:bg-background">
                  <a href={`${import.meta.env.BASE_URL}Vikasraj__Resume.pdf`} target="_blank" rel="noreferrer">
                    <ExternalLink className="mr-2 w-5 h-5" />
                    View Online
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
