"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { experience } from "@/data/experience";
import styles from "./Experience.module.css";

export default function Experience() {
  return (
    <section className={`section ${styles.experience}`}>
      <h2 className="section-title">
        <Briefcase size={20} />
        Experience
      </h2>

      <div className={styles.timeline}>
        {experience.map((entry, i) => (
          <motion.div
            key={entry.id}
            className={styles.entry}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: i * 0.15,
              ease: [0.25, 1, 0.5, 1],
            }}
          >
            <div className={styles.timelineLine}>
              <div
                className={`${styles.dot} ${entry.current ? styles.dotCurrent : ""}`}
              />
              {i < experience.length - 1 && <div className={styles.line} />}
            </div>

            <div className={styles.content}>
              <div className={styles.header}>
                <div>
                  <h3 className={styles.role}>{entry.role}</h3>
                  <p className={styles.company}>
                    {entry.company}
                  </p>
                </div>
                <span className={styles.period}>
                  {entry.period}
                </span>
              </div>

              <ul className={styles.bullets}>
                {entry.bullets.map((bullet, j) => (
                  <li key={j} className={styles.bullet}>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
