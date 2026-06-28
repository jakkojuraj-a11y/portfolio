import { motion } from "framer-motion";
import { useScrollReveal, revealVariants, staggerContainer } from "@/hooks/useScrollReveal";
import { Database, LineChart, Workflow, Sparkles } from "lucide-react";

const cards = [
  {
    title: "Data Analytics",
    desc: "EDA, Statistical Modeling & Predictive Analytics",
    icon: Database,
    color: "from-blue-500 to-cyan-400"
  },
  {
    title: "Dashboards",
    desc: "Power BI, DAX & Interactive KPIs",
    icon: LineChart,
    color: "from-emerald-400 to-green-500"
  },
  {
    title: "ETL Pipelines",
    desc: "Data extraction, cleaning & automation",
    icon: Workflow,
    color: "from-orange-400 to-amber-500"
  },
  {
    title: "Generative AI",
    desc: "GenAI-powered solutions & RAG systems",
    icon: Sparkles,
    color: "from-primary to-purple-500"
  }
];

export function About() {
  const { ref, isInView } = useScrollReveal();

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-secondary/30">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={revealVariants} className="mb-4">
            <span className="text-primary font-mono font-semibold tracking-wider uppercase text-sm">
              About Me
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mt-2 font-sans tracking-tight">
              Turning Raw Data into <br className="hidden md:block"/>
              <span className="text-gradient">Business Impact</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-12 gap-12 mt-12">
            <motion.div variants={revealVariants} className="md:col-span-7 space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I'm a Data Analyst with hands-on expertise in SQL, Python (Pandas, NumPy, Matplotlib), Power BI, and Advanced Excel. Currently at Innomatics Research Labs as a Generative AI Intern, I sit at the intersection of traditional data analytics and modern AI — building analytical workflows, automation pipelines, and GenAI-powered solutions that deliver real business value.
              </p>
              <p>
                My analytical toolkit spans the full data lifecycle: from data extraction & cleaning through exploratory analysis and statistical modeling to interactive KPI dashboards and generative AI applications.
              </p>
            </motion.div>

            <motion.div 
              variants={revealVariants} 
              className="md:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {cards.map((card, i) => (
                <motion.div
                  key={card.title}
                  custom={i}
                  variants={revealVariants}
                  className="glass-card p-5 rounded-2xl group hover:-translate-y-1 transition-transform"
                >
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${card.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                    <card.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{card.title}</h3>
                  <p className="text-sm text-muted-foreground">{card.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
