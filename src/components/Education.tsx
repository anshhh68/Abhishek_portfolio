"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import { education, certifications } from "@/data/education";
import styles from "./Education.module.css";

export default function Education() {
  return (
    <section className={`section ${styles.education}`}>
      <div className={styles.columns}>
        {/* Education */}
        <motion.div
          className={styles.column}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
        >
          <h2 className="section-title">
            <GraduationCap size={20} />
            Education
          </h2>
          <div className={styles.eduList}>
            {education.map((edu) => (
              <div key={edu.degree} className={styles.eduItem}>
                <h3 className={styles.degree}>
                  {edu.degree} – {edu.field}
                </h3>
                <p className={styles.institution}>
                  {edu.institution} | CGPA: {edu.cgpa}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          className={styles.column}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.12,
            ease: [0.25, 1, 0.5, 1],
          }}
        >
          <h2 className="section-title">
            <Award size={20} />
            Certifications
          </h2>
          <ul className={styles.certList}>
            {certifications.map((cert) => (
              <li key={cert.name} className={styles.certItem}>
                <span className={styles.certName}>{cert.name}</span>
                <span className={styles.certPlatform}>– {cert.platform}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
