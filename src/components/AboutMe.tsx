"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { UserCircle, ChevronDown } from "lucide-react";
import { keyStrengths } from "@/data/skills";
import styles from "./AboutMe.module.css";

export default function AboutMe() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className={`section ${styles.about}`}>
      <h2 className="section-title">
        <UserCircle size={20} />
        About Me
      </h2>

      <motion.p
        className={styles.intro}
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
      >
        Data Analyst with 3+ years of experience in market research and business
        analytics. Expertise in SQL, Python, Power BI, Tableau, and advanced
        market research techniques. I specialize in transforming raw data into
        meaningful insights and building interactive dashboards that empower
        data-driven decision making.
      </motion.p>

      <motion.div
        className={styles.strengthsHeader}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.15, ease: [0.25, 1, 0.5, 1] }}
      >
        <h3 className={styles.strengthsTitle}>Key Strengths</h3>
      </motion.div>

      <div className={styles.strengthsList}>
        {keyStrengths.map((strength, i) => {
          const isOpen = openIndex === i;
          return (
            <motion.div
              key={strength.title}
              className={`${styles.strengthItem} ${isOpen ? styles.open : ""}`}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: 0.05 * i,
                ease: [0.25, 1, 0.5, 1],
              }}
            >
              <button
                className={styles.strengthToggle}
                onClick={() => setOpenIndex(isOpen ? null : i)}
                aria-expanded={isOpen}
              >
                <span className={styles.strengthName}>{strength.title}</span>
                <ChevronDown
                  size={16}
                  className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ""}`}
                />
              </button>
              <div
                className={styles.strengthBody}
                style={{
                  gridTemplateRows: isOpen ? "1fr" : "0fr",
                }}
              >
                <div className={styles.strengthBodyInner}>
                  <p>{strength.description}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
