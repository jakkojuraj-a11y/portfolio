import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Download, ChevronRight, Github, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const roles = ["Data Analyst", "AI/ML Engineer", "Power BI Developer", "GenAI Specialist"];

function AnimatedCounter({ from, to, duration = 2 }: { from: number; to: number; duration?: number }) {
  const [count, setCount] = useState(from);

  useEffect(() => {
    let start = performance.now();
    let animationFrame: number;

    const updateCounter = (time: number) => {
      let progress = (time - start) / (duration * 1000);
      if (progress > 1) progress = 1;
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(from + (to - from) * easeOutQuart));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCounter);
      }
    };

    animationFrame = requestAnimationFrame(updateCounter);
    return () => cancelAnimationFrame(animationFrame);
  }, [from, to, duration]);

  return <span>{count}</span>;
}

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typeSpeed = isDeleting ? 50 : 100;
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (typedText !== currentRole) {
          setTypedText(currentRole.substring(0, typedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (typedText !== "") {
          setTypedText(currentRole.substring(0, typedText.length - 1));
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, roleIndex]);

  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <motion.div
          className="absolute top-1/4 left-1/4 w-[40rem] h-[40rem] bg-primary/20 rounded-full blur-[100px] mix-blend-screen"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-[#FF6584]/20 rounded-full blur-[80px] mix-blend-screen"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-secondary/50 backdrop-blur-sm border border-border px-4 py-2 rounded-full text-sm font-medium"
          >
            <span className="text-xl">👋</span>
            <span>Hello, I'm</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold font-sans tracking-tight"
          >
            Jakkoju <br className="hidden md:block" />
            <span className="text-gradient">Vikas Raj</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl md:text-2xl font-mono text-muted-foreground h-8"
          >
            &gt; {typedText}
            <span className="animate-pulse">_</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-base md:text-lg text-muted-foreground max-w-lg leading-relaxed"
          >
            "Data tells a story — I help businesses read it. Transforming raw data into actionable business insights with SQL, Python, Power BI & Generative AI."
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap gap-4 justify-center md:justify-start"
          >
            <Button
              asChild
              size="lg"
              className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground group"
            >
              <a href={`${import.meta.env.BASE_URL}Vikasraj__Resume.pdf`} download>
                View Resume
                <Download className="ml-2 w-4 h-4 group-hover:-translate-y-1 transition-transform" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full group"
            >
              <a href="#contact">
                Contact Me
                <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex space-x-6 pt-4"
          >
            <a href="https://www.linkedin.com/in/jakkoju-vikasraj816" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-[#0A66C2] transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://github.com/jakkojuraj-a11y" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="mailto:jakkojuraj@gmail.com" className="text-muted-foreground hover:text-[#EA4335] transition-colors">
              <Mail className="w-6 h-6" />
            </a>
            <a href="tel:+919347522816" className="text-muted-foreground hover:text-[#34A853] transition-colors">
              <Phone className="w-6 h-6" />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative order-first md:order-last flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-2 bg-gradient-to-br from-primary via-[#8B83FF] to-[#FF6584]">
            <div className="absolute inset-0 rounded-full animate-[spin_4s_linear_infinite] bg-gradient-to-br from-primary via-transparent to-transparent opacity-50 blur-md"></div>
            <img
              src={`${import.meta.env.BASE_URL}Photo.jpg`}
              alt="Jakkoju Vikas Raj"
              className="relative w-full h-full object-cover rounded-full border-4 border-background z-10"
            />
          </div>

          {/* Floating Stats */}
          <motion.div
            className="absolute -right-4 top-10 glass-card px-4 py-2 rounded-xl"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <div className="text-2xl font-bold text-primary">
              <AnimatedCounter from={0} to={5} />+
            </div>
            <div className="text-xs text-muted-foreground font-mono">Projects</div>
          </motion.div>

          <motion.div
            className="absolute -left-8 bottom-20 glass-card px-4 py-2 rounded-xl"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <div className="text-2xl font-bold text-[#FF6584]">
              <AnimatedCounter from={0} to={7} />+
            </div>
            <div className="text-xs text-muted-foreground font-mono">Months Exp</div>
          </motion.div>

          <motion.div
            className="absolute right-4 bottom-4 glass-card px-4 py-2 rounded-xl"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <div className="text-2xl font-bold text-[#38D968]">
              <AnimatedCounter from={0} to={6} />+
            </div>
            <div className="text-xs text-muted-foreground font-mono">Certifications</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
