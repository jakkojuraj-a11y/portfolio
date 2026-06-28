import { useInView } from "framer-motion";
import { useRef } from "react";

export function useScrollReveal(once = true, margin = "-100px") {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: margin as any });
  
  return { ref, isInView };
}

export const revealVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
      delay: custom * 0.1
    }
  })
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};
