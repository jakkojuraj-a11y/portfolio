import { motion } from "framer-motion";
import { useScrollReveal, revealVariants, staggerContainer } from "@/hooks/useScrollReveal";

const experiences = [
  {
    date: "February 2026 — Present",
    role: "Generative AI Intern",
    company: "Innomatics Research Labs, Hyderabad",
    bullets: [
      "Architected RAG-based AI systems using LangChain, ChromaDB, and Gemini API for intelligent document retrieval",
      "Developed production-grade GenAI pipelines with exponential backoff, rate throttling, and response caching",
      "Built interactive Streamlit applications for real-time model deployment and demonstration",
      "Implemented Human-in-the-Loop (HITL) escalation workflows for AI-assisted customer support"
    ]
  },
  {
    date: "November 2025 — January 2026",
    role: "Data Analyst Intern",
    company: "Innomatics Research Labs, Hyderabad",
    bullets: [
      "Performed deep-dive EDA on 100K+ record datasets using SQL window functions and Python (Pandas)",
      "Designed interactive Power BI dashboards with DAX measures tracking revenue, ratings, and logistics KPIs",
      "Identified seller performance patterns and delivery time outliers, enabling data-driven operational improvements",
      "Built end-to-end ETL pipelines for automated data extraction, cleaning, and transformation"
    ]
  }
];

export function Experience() {
  const { ref, isInView } = useScrollReveal();

  return (
    <section id="experience" className="py-24 bg-secondary/30 relative">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="text-center mb-16">
            <span className="text-primary font-mono font-semibold tracking-wider uppercase text-sm">
              Career Path
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mt-2 font-sans tracking-tight">
              Experience
            </h2>
          </div>

          <div className="relative border-l-2 border-primary/30 ml-4 md:ml-0 md:pl-0">
            {experiences.map((exp, i) => (
              <motion.div 
                key={i}
                variants={revealVariants}
                className="mb-12 relative pl-8 md:pl-0"
              >
                {/* Desktop timeline dot */}
                <div className="hidden md:block absolute left-[50%] -translate-x-1/2 -top-1 w-4 h-4 rounded-full bg-primary ring-4 ring-background z-10" />
                {/* Mobile timeline dot */}
                <div className="md:hidden absolute -left-[9px] -top-1 w-4 h-4 rounded-full bg-primary ring-4 ring-background z-10" />

                <div className={`md:flex items-center justify-between w-full ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="md:w-5/12" />
                  <div className="md:w-5/12 glass-card p-6 rounded-2xl hover:shadow-primary/5 transition-shadow relative">
                    {/* Desktop arrow */}
                    <div className={`hidden md:block absolute top-6 w-0 h-0 border-y-8 border-y-transparent ${
                      i % 2 === 0 
                        ? '-left-4 border-r-8 border-r-card' 
                        : '-right-4 border-l-8 border-l-card'
                    }`} />
                    
                    <span className="text-primary font-mono text-sm block mb-2">{exp.date}</span>
                    <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                    <h4 className="text-muted-foreground mb-4">{exp.company}</h4>
                    
                    <ul className="space-y-2">
                      {exp.bullets.map((bullet, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start">
                          <span className="mr-2 text-primary mt-1">•</span>
                          <span className="leading-relaxed">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
