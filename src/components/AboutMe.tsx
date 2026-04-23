"use client";

import { motion } from "framer-motion";
import { UserCircle } from "lucide-react";
import styles from "./AboutMe.module.css";

export default function AboutMe() {
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
        Data Analyst with 4+ years of experience in market research and business
        analytics. Expertise in SQL, Python, Power BI, Tableau, and advanced
        market research techniques. I specialize in transforming raw data into
        meaningful insights and building interactive dashboards that empower
        data-driven decision making.
      </motion.p>
    </section>
  );
}
