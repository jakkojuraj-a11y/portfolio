import { motion } from "framer-motion";
import { useScrollReveal, revealVariants, staggerContainer } from "@/hooks/useScrollReveal";
import { GraduationCap, Award, ExternalLink } from "lucide-react";

const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    school: "SR University",
    date: "September 2023 — April 2025",
    field: "Computer Applications"
  },
  {
    degree: "Bachelor of Science (BSc)",
    school: "Vaagdevi Degree & PG College, Hanamkonda",
    date: "September 2020 — May 2023",
    field: "Computer Science"
  }
];

const certifications = [
  {
    title: "Google Analytics Certification",
    issuer: "Google Skillshop",
    link: "https://skillshop.credential.net/72be7532-f732-453c-97e9-0d7cbdb505a3#acc.etlS7vxn"
  },
  {
    title: "AWS APAC — Solutions Architecture — Job Simulation",
    issuer: "Forage",
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/pmnMSL4QiQ9JCgE3W/kkE9HyeNcw6rwCRGw_pmnMSL4QiQ9JCgE3W_E8dYg6knWuCnE4X4f_1748506953026_completion_certificate.pdf"
  },
  {
    title: "Advanced GenAI Internship",
    issuer: "Innomatics Research Labs",
    link: "https://online.innomatics.in/verify/G_01261142"
  },
  {
    title: "Adv GenAI Internship — Data Analytics",
    issuer: "Innomatics Research Labs",
    link: "https://online.innomatics.in/verify/G_11251143"
  },
  {
    title: "Python for Data Science — Professional Certification",
    issuer: "Innomatics Research Labs",
    link: "https://online.innomatics.in/verify/M_103158"
  },
  {
    title: "Data Analytics Internship",
    issuer: "Innomatics Research Labs",
    link: "https://online.innomatics.in/verify/G_11251143"
  }
];

export function Education() {
  const { ref, isInView } = useScrollReveal();

  return (
    <section className="py-24 bg-secondary/30 relative">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="text-center mb-16">
            <span className="text-primary font-mono font-semibold tracking-wider uppercase text-sm">
              Background
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mt-2 font-sans tracking-tight">
              Education & Certifications
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Education Column */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <GraduationCap className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-bold">Education</h3>
              </div>
              
              <div className="space-y-6">
                {education.map((edu, i) => (
                  <motion.div 
                    key={i}
                    variants={revealVariants}
                    className="glass-card p-6 rounded-2xl border-l-4 border-l-primary"
                  >
                    <h4 className="text-lg font-bold text-foreground mb-1">{edu.degree}</h4>
                    <div className="text-primary font-medium mb-2">{edu.school}</div>
                    <div className="flex justify-between items-center text-sm text-muted-foreground">
                      <span>{edu.field}</span>
                      <span className="font-mono">{edu.date}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Certifications Column */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <Award className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-bold">Certifications</h3>
              </div>
              
              <div className="grid grid-cols-1 gap-4">
                {certifications.map((cert, i) => (
                  <motion.a 
                    href={cert.link}
                    target="_blank"
                    rel="noreferrer"
                    key={i}
                    variants={revealVariants}
                    className="glass-card p-4 rounded-xl flex items-center justify-between group hover:bg-secondary/50 transition-colors"
                  >
                    <div>
                      <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">{cert.title}</h4>
                      <p className="text-sm text-muted-foreground mt-1">{cert.issuer}</p>
                    </div>
                    <ExternalLink className="w-5 h-5 text-muted-foreground opacity-50 group-hover:opacity-100 group-hover:text-primary transition-all group-hover:translate-x-1 -group-hover:translate-y-1" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
