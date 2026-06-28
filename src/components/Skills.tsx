import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useScrollReveal, revealVariants, staggerContainer } from "@/hooks/useScrollReveal";
import { 
  SiPython, SiNumpy, SiPandas, SiScikitlearn, SiTensorflow, SiKeras,
  SiMysql, SiJupyter, SiGooglecolab, SiGit
} from "react-icons/si";
import { Database, LineChart, BrainCircuit, Network, Bot, Wrench, Cloud, BarChart2 } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: SiPython,
    color: "from-[#3776AB] to-[#FFD343]",
    skills: ["Python"]
  },
  {
    title: "Libraries & Frameworks",
    icon: Network,
    color: "from-blue-500 to-indigo-500",
    skills: ["NumPy", "Pandas", "Scikit-learn", "TensorFlow", "Keras", "Regex", "BeautifulSoup", "Web Scraping"]
  },
  {
    title: "Data Visualization",
    icon: BarChart2,
    color: "from-[#F2C811] to-[#E5A900]",
    skills: ["Power BI", "Matplotlib", "Seaborn"]
  },
  {
    title: "Machine Learning",
    icon: BrainCircuit,
    color: "from-emerald-400 to-teal-500",
    skills: ["Supervised Learning", "Unsupervised Learning", "Feature Engineering", "Model Evaluation"]
  },
  {
    title: "Deep Learning",
    icon: Network,
    color: "from-rose-400 to-red-500",
    skills: ["ANN", "CNNs", "Image Segmentation", "Object Detection (YOLO)", "Transfer Learning"]
  },
  {
    title: "Generative AI & NLP",
    icon: Bot,
    color: "from-purple-500 to-pink-500",
    skills: ["LLMs", "Fine-tuning", "Prompt Engineering", "RAG", "LangChain", "LangGraph Frameworks"]
  },
  {
    title: "Databases",
    icon: SiMysql,
    color: "from-[#4479A1] to-[#005C84]",
    skills: ["MySQL"]
  },
  {
    title: "Cloud",
    icon: Cloud,
    color: "from-[#0089D6] to-[#005A9E]",
    skills: ["Azure"]
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    color: "from-slate-600 to-slate-800",
    skills: ["Jupyter Notebook", "Google Colab", "Git"]
  }
];

function TiltCard({ category, index }: { category: any, index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;
    setRotateX(rotateX);
    setRotateY(rotateY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={cardRef}
      custom={index}
      variants={revealVariants}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        rotateX,
        rotateY,
      }}
      className="relative glass-card rounded-2xl p-6 group overflow-hidden transition-all duration-200 ease-out"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
      
      <div className="flex items-center space-x-4 mb-4" style={{ transform: "translateZ(30px)" }}>
        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg`}>
          <category.icon className="w-6 h-6 text-white" />
        </div>
        <h3 className="font-semibold text-lg">{category.title}</h3>
      </div>

      <div className="flex flex-wrap gap-2" style={{ transform: "translateZ(20px)" }}>
        {category.skills.map((skill: string) => (
          <span 
            key={skill}
            className="px-3 py-1 bg-secondary/80 text-secondary-foreground text-sm rounded-full border border-border"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export function Skills() {
  const { ref, isInView } = useScrollReveal();

  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="text-center mb-16">
            <span className="text-primary font-mono font-semibold tracking-wider uppercase text-sm">
              My Skills
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mt-2 font-sans tracking-tight">
              Technical Expertise
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((cat, i) => (
              <TiltCard key={cat.title} category={cat} index={i} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
