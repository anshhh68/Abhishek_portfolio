"use client";

import { motion } from "framer-motion";
import { additionalProjects } from "@/data/projects";
import styles from "./AdditionalProjects.module.css";

const ChartGraphic = ({ type }: { type: string }) => {
  switch (type) {
    case "exec-bi":
      return (
        <div className={styles.chartContainer}>
          <svg viewBox="0 0 100 40" preserveAspectRatio="none" className={styles.svgChart}>
            <path d="M0,30 Q10,10 20,25 T40,20 T60,35 T80,10 T100,20" fill="none" stroke="var(--color-accent)" strokeWidth="1.5" />
            <path d="M0,40 Q15,20 30,35 T60,20 T80,30 T100,10" fill="none" stroke="var(--color-teal)" strokeWidth="1" />
          </svg>
        </div>
      );
    case "etl-reporting":
      return (
        <div className={styles.chartContainer}>
          <div className={styles.barChart}>
            <div className={styles.bar} style={{ height: "60%" }} />
            <div className={styles.bar} style={{ height: "80%" }} />
            <div className={styles.bar} style={{ height: "40%", background: "var(--color-coral)" }} />
            <div className={styles.bar} style={{ height: "90%" }} />
            <div className={styles.bar} style={{ height: "70%" }} />
          </div>
        </div>
      );
    case "enterprise-analytics":
      return (
        <div className={styles.chartContainer}>
          <div className={styles.treeMap}>
            <div className={styles.tm1} />
            <div className={styles.tm2} />
            <div className={styles.tm3} />
            <div className={styles.tm4} />
          </div>
        </div>
      );
    case "sentiment-model":
      return (
        <div className={styles.chartContainer}>
          <div className={styles.donutChart} />
        </div>
      );
    case "product-dashboards":
      return (
        <div className={styles.chartContainer}>
          <svg viewBox="0 0 100 100" className={styles.radarChart}>
            <polygon points="50,10 90,30 90,70 50,90 10,70 10,30" fill="none" stroke="var(--color-white-text-secondary)" strokeWidth="0.5" />
            <polygon points="50,25 75,40 75,60 50,75 25,60 25,40" fill="none" stroke="var(--color-white-text-secondary)" strokeWidth="0.5" />
            <line x1="50" y1="50" x2="50" y2="10" stroke="var(--color-white-text-secondary)" strokeWidth="0.5" />
            <line x1="50" y1="50" x2="90" y2="30" stroke="var(--color-white-text-secondary)" strokeWidth="0.5" />
            <line x1="50" y1="50" x2="90" y2="70" stroke="var(--color-white-text-secondary)" strokeWidth="0.5" />
            <line x1="50" y1="50" x2="50" y2="90" stroke="var(--color-white-text-secondary)" strokeWidth="0.5" />
            <line x1="50" y1="50" x2="10" y2="70" stroke="var(--color-white-text-secondary)" strokeWidth="0.5" />
            <line x1="50" y1="50" x2="10" y2="30" stroke="var(--color-white-text-secondary)" strokeWidth="0.5" />
            <polygon points="50,20 80,45 60,70 40,80 20,60 30,30" fill="var(--color-accent)" fillOpacity="0.2" stroke="var(--color-accent)" strokeWidth="1" />
          </svg>
        </div>
      );
    case "user-sentiment":
    default:
      return (
        <div className={styles.chartContainer}>
          <svg viewBox="0 0 100 40" preserveAspectRatio="none" className={styles.svgChart}>
            <path d="M0,35 L20,20 L40,25 L60,10 L80,15 L100,5" fill="none" stroke="var(--color-accent)" strokeWidth="1.5" />
          </svg>
        </div>
      );
  }
};

export default function AdditionalProjects() {
  return (
    <section className={`section ${styles.additional}`}>
      <h2 className="section-title">Additional Projects</h2>
      <div className={styles.grid}>
        {additionalProjects.map((project, i) => (
          <motion.div
            key={project.id}
            className={styles.card}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.4,
              delay: i * 0.08,
              ease: [0.25, 1, 0.5, 1],
            }}
          >
            <ChartGraphic type={project.id} />
            <div className={styles.cardContent}>
              <h3 className={styles.title}>{project.title}</h3>
              <p className={styles.desc}>{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
