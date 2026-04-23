"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <header className={styles.hero} id="overview">
      <div className={styles.heroContent}>
        <motion.p
          className={styles.eyebrow}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
        >
          DATA ANALYST | ANALYTICS CONSULTANT
        </motion.p>

        <motion.h1
          className={styles.headline}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 1, 0.5, 1] }}
        >
          Turning complex data into <br />
          <span className={styles.highlight}>actionable insights.</span>
        </motion.h1>

        <motion.p
          className={styles.subhead}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 1, 0.5, 1] }}
        >
          Specializing in Market Research Analytics, Power BI Dashboards, and
          Statistical Modeling to drive strategic business decisions.
        </motion.p>
      </div>

      <motion.div
        className={styles.heroImageContainer}
        initial={{ opacity: 0, scale: 0.9, x: 20 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
      >
        <Image
          src="/profile.jfif"
          alt="Abhishek Ranjan Profile"
          fill
          priority
          className={styles.heroImage}
        />
      </motion.div>
    </header>
  );
}
