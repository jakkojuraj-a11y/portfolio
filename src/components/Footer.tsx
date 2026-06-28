import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="text-sm font-medium font-mono text-muted-foreground">
            © {new Date().getFullYear()} Jakkoju Vikas Raj. All rights reserved.
          </p>
        </div>
        
        <div className="flex items-center space-x-6">
          <a 
            href="https://www.linkedin.com/in/jakkoju-vikasraj816" 
            target="_blank" 
            rel="noreferrer"
            className="text-muted-foreground hover:text-[#0A66C2] transition-colors"
          >
            <Linkedin className="w-5 h-5" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a 
            href="https://github.com/jakkojuraj-a11y" 
            target="_blank" 
            rel="noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="w-5 h-5" />
            <span className="sr-only">GitHub</span>
          </a>
          <a 
            href="mailto:jakkojuraj@gmail.com"
            className="text-muted-foreground hover:text-[#EA4335] transition-colors"
          >
            <Mail className="w-5 h-5" />
            <span className="sr-only">Email</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
