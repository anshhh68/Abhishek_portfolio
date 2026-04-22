"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, TrendingDown, Zap, Globe } from "lucide-react";
import styles from "./KeyHighlights.module.css";

interface HighlightCard {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  value: string;
  numericValue: number;
  suffix: string;
  prefix: string;
  label: string;
  sublabel: string;
  color: "accent" | "teal" | "coral" | "purple";
}

const highlights: HighlightCard[] = [
  {
    icon: Briefcase,
    value: "3+",
    numericValue: 3,
    suffix: "+",
    prefix: "",
    label: "Years Experience",
    sublabel: "",
    color: "accent",
  },
  {
    icon: TrendingDown,
    value: "20%",
    numericValue: 20,
    suffix: "%",
    prefix: "",
    label: "Churn Reduction",
    sublabel: "",
    color: "teal",
  },
  {
    icon: Zap,
    value: "50%",
    numericValue: 50,
    suffix: "%",
    prefix: "",
    label: "Reporting Auto",
    sublabel: "",
    color: "coral",
  },
  {
    icon: Globe,
    value: "Global",
    numericValue: 0,
    suffix: "",
    prefix: "",
    label: "Client Base",
    sublabel: "",
    color: "purple",
  },
];

function AnimatedNumber({
  value,
  suffix,
  isGlobal,
  inView,
}: {
  value: number;
  suffix: string;
  isGlobal: boolean;
  inView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView || isGlobal) return;
    let start = 0;
    const duration = 1200;
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      start = Math.round(eased * value);
      setCount(start);
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [inView, value, isGlobal]);

  if (isGlobal) return <span>Global</span>;
  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function KeyHighlights() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={`section ${styles.highlights}`} ref={ref}>
      <div className={styles.grid}>
        {highlights.map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.label}
              className={`${styles.card} ${styles[item.color]}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                ease: [0.25, 1, 0.5, 1],
              }}
            >
              <div className={styles.iconWrap}>
                {/* Abstract Blob SVG Background */}
                <svg className={styles.blob} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <path d="M45.7,-76.4C58.9,-69.3,68.9,-54.6,76.6,-40.1C84.3,-25.6,89.7,-11.3,87.4,1.9C85.1,15.1,75.1,27.2,65.3,38.2C55.5,49.2,45.9,59.1,33.9,67.6C21.9,76.1,7.5,83.2,-6.3,82.4C-20.1,81.6,-33.3,72.9,-45.5,63.4C-57.7,53.9,-68.9,43.6,-77.2,30.6C-85.5,17.6,-90.9,1.9,-88.7,-12.3C-86.5,-26.5,-76.7,-39.2,-64.7,-48.5C-52.7,-57.8,-38.5,-63.7,-25.2,-69.5C-11.9,-75.3,0.5,-81,14.6,-79.8C28.7,-78.6,45.7,-76.4,45.7,-76.4Z" transform="translate(100 100)" />
                </svg>
                <Icon size={24} className={styles.icon} />
              </div>
              <div className={styles.cardContent}>
                <span className={styles.value}>
                  <AnimatedNumber
                    value={item.numericValue}
                    suffix={item.suffix}
                    isGlobal={item.numericValue === 0}
                    inView={inView}
                  />
                </span>
                <span className={styles.label}>{item.label}</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
