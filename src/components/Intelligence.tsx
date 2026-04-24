"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  FileSearch2,
  DatabaseZap,
  ShieldCheck,
  Gauge,
  Sigma,
  BarChart3,
  Globe2,
  Handshake,
  Presentation,
} from "lucide-react";
import styles from "./Intelligence.module.css";

const intelligenceItems = [
  {
    title: "Survey Designing",
    description: "Designing comprehensive surveys and questionnaires to capture accurate, actionable data aligned with business objectives.",
    icon: FileSearch2,
  },
  {
    title: "Data Collection",
    description: "Orchestrating end-to-end data collection processes across multiple platforms, ensuring high response rates and data integrity.",
    icon: DatabaseZap,
  },
  {
    title: "Data Validation",
    description: "Implementing robust data governance and validation frameworks to detect anomalies and ensure 99%+ reporting accuracy.",
    icon: ShieldCheck,
  },
  {
    title: "Live Data Quality Check",
    description: "Monitoring live data streams and survey responses in real-time to identify and rectify quality issues immediately.",
    icon: Gauge,
  },
  {
    title: "DAX Calculation & Modeling",
    description: "Building complex DAX measures, star-schema data models, and calculated tables for enterprise-grade reporting.",
    icon: Sigma,
  },
  {
    title: "Data Visualization & BI",
    description: "Designing interactive dashboards and BI solutions using Power BI and Tableau that transform raw data into actionable insights.",
    icon: BarChart3,
  },
  {
    title: "Market Research Intelligence",
    description: "Leading end-to-end market research programs across quantitative and qualitative studies, competitive benchmarking, and sentiment analysis. Translating consumer intelligence into investment-grade insights for global stakeholders.",
    icon: Globe2,
    tags: ["Quantitative Research", "Qualitative Research", "Competitive Benchmarking", "Investment Insights"],
  },
  {
    title: "Client Interaction",
    description: "Leading multi-region analytics programs, coordinating with global vendor panels (CInt, Prime Panels), and managing client requirements end-to-end.",
    icon: Handshake,
    highlight: true,
  },
  {
    title: "Insight Presentation",
    description: "Translating complex analytical findings into clear narratives and delivering executive dashboard presentations to leadership teams.",
    icon: Presentation,
    highlight: true,
  },
];

export default function Intelligence() {
  return (
    <section className={`section ${styles.intelligence}`}>
      <h2 className="section-title">
        <BrainCircuit size={20} />
        Intelligence
      </h2>

      <div className={styles.grid}>
        {intelligenceItems.map((item, i) => {
          const Icon = item.icon;
          const cardClass = [
            styles.card,
            item.highlight ? styles.clientInteractionCard : "",
          ].filter(Boolean).join(" ");

          return (
            <motion.div
              key={item.title}
              className={cardClass}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: i * 0.07,
                ease: [0.25, 1, 0.5, 1],
              }}
            >
              <div className={styles.iconWrap}>
                <Icon size={20} />
              </div>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.description}>{item.description}</p>
              {item.tags && (
                <div className={styles.featuredTags}>
                  {item.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
