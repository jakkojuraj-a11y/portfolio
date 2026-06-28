import { motion } from "framer-motion";
import { useScrollReveal, revealVariants, staggerContainer } from "@/hooks/useScrollReveal";
import { ShoppingCart, BotMessageSquare, UtensilsCrossed, MessageSquareText, TrendingDown, Zap, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "E-Commerce Analytics — Olist Dataset",
    gradient: "from-[#6C63FF] to-[#8B83FF]",
    icon: ShoppingCart,
    desc: "Comprehensive analysis of 100K+ e-commerce records using SQL window functions and Python to uncover seller performance patterns, reduce delivery time outliers, and build interactive dashboards.",
    tech: ["SQL", "Python", "Power BI", "Pandas", "DAX"],
    impact: "Identified revenue trends, optimized seller KPIs, and visualized logistics metrics into an actionable Power BI dashboard.",
    link: "https://github.com/jakkojuraj-a11y/E-Commerce-Analytics-Olist-Dataset.git"
  },
  {
    title: "Customer Support Assistant — RAG",
    gradient: "from-[#FF6584] to-[#FF8FA3]",
    icon: BotMessageSquare,
    desc: "Built an AI-powered customer support system using Retrieval-Augmented Generation (RAG) with ChromaDB vector store, LangChain orchestration, and Gemini API for intelligent responses with human-in-the-loop escalation.",
    tech: ["Python", "LangChain", "ChromaDB", "Gemini API", "FastAPI", "Streamlit"],
    impact: "Automated support responses with context-aware AI, reducing manual workload with HITL escalation workflow.",
    link: "https://github.com/jakkojuraj-a11y/RAG-Based-Customer-Support-Assistant.git"
  },
  {
    title: "Restaurant Consumers SQL Analysis",
    gradient: "from-[#43E97B] to-[#38D968]",
    icon: UtensilsCrossed,
    desc: "Analyzed restaurant customer data using SQL to identify purchasing patterns, high-value customers, and dining preferences. Generated actionable insights to optimize marketing strategies and improve customer retention.",
    tech: ["SQL", "MySQL", "Data Analysis", "Business Insights"],
    impact: "Identified purchasing patterns, high-value customers, and dining preferences, enabling data-driven marketing optimization and improved customer retention.",
    link: "https://github.com/jakkojuraj-a11y/RESTAURANT-CONSUMERS_SQL_PROJECT.git"
  },
  {
    title: "Sentiment Analysis — Flipkart Reviews",
    gradient: "from-[#F6D365] to-[#FDA085]",
    icon: MessageSquareText,
    desc: "Built an NLP pipeline for product review sentiment classification using TF-IDF vectorization, text preprocessing, and machine learning models with confusion matrix evaluation.",
    tech: ["Python", "NLP", "Scikit-learn", "TF-IDF", "Pandas"],
    impact: "Achieved high accuracy classification with 92% positive and 89% negative sentiment detection, providing actionable insights for product improvement and customer satisfaction.",
    link: "https://github.com/jakkojuraj-a11y/Sentiment-Analysis-of-Flipkart-Product-Reviews.git"
  },
  {
    title: "Customer Churn Analysis — Power BI",
    gradient: "from-[#A18CD1] to-[#FBC2EB]",
    icon: TrendingDown,
    desc: "Performed in-depth analysis of customer churn using Power BI, developing interactive visualizations and dashboards to identify key churn drivers, customer segments, and retention opportunities.",
    tech: ["Power BI", "Data Visualization", "DAX", "Data Analysis"],
    impact: "Identified key churn drivers, customer segments, and retention opportunities, enabling data-driven strategies to reduce churn and improve customer lifetime value.",
    link: "https://github.com/jakkojuraj-a11y/CUSTOMER-CHURN-ANALYSIS.git"
  },
  {
    title: "EV Market Data Analysis",
    gradient: "from-[#00B894] to-[#00CEC9]",
    icon: Zap,
    desc: "End-to-end data analytics project analyzing European EV market data — cleaned and preprocessed raw pricing, acceleration, weight, and cargo data using Regex and Pandas, applied median imputation for missing values, and performed EDA to uncover pricing trends and value-for-money rankings across brands.",
    tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Regex"],
    impact: "Built a clean, structured EV database and identified mid-range EVs offering superior value-for-money over premium models, with country-wise price comparisons across Germany, UK, and Netherlands.",
    link: "https://github.com/jakkojuraj-a11y/EV-Market-Data-Analysis.git"
  }
];

export function Projects() {
  const { ref, isInView } = useScrollReveal();

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="text-center mb-16">
            <span className="text-primary font-mono font-semibold tracking-wider uppercase text-sm">
              Portfolio
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mt-2 font-sans tracking-tight">
              Selected Projects
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((proj, i) => (
              <motion.div
                key={proj.title}
                custom={i}
                variants={revealVariants}
                className="group flex flex-col glass-card rounded-2xl overflow-hidden"
              >
                <div className={`h-2 bg-gradient-to-r ${proj.gradient}`} />
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex justify-between items-start mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${proj.gradient} text-white shadow-lg`}>
                      <proj.icon className="w-6 h-6" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-3 leading-tight">{proj.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 flex-1">
                    {proj.desc}
                  </p>
                  
                  <div className="mb-6">
                    <span className="text-xs font-semibold text-foreground uppercase tracking-wider block mb-2">Impact</span>
                    <p className="text-sm text-foreground/80 border-l-2 border-primary/50 pl-3 italic">
                      {proj.impact}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {proj.tech.map(t => (
                      <span key={t} className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md">
                        {t}
                      </span>
                    ))}
                  </div>

                  <Button asChild variant="outline" className="w-full mt-auto group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    <a href={proj.link} target="_blank" rel="noreferrer">
                      <Github className="mr-2 w-4 h-4" />
                      View Source
                    </a>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
