"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Star,
  ExternalLink,
  ChevronDown,
  ArrowRight,
} from "lucide-react";
import { GithubIcon } from "@/components/icons/SocialIcons";
import { featuredProjects } from "@/data/projects";
import styles from "./FeaturedProjects.module.css";

export default function FeaturedProjects() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section className={`section ${styles.projects}`}>
      <div className={styles.header}>
        <h2 className="section-title">
          <Star size={20} />
          Featured Projects
        </h2>
        <a href="#" className={styles.viewAll}>
          View all projects on GitHub <ExternalLink size={13} />
        </a>
      </div>

      <div className={styles.grid}>
        {featuredProjects.map((project, i) => {
          const isExpanded = expandedId === project.id;
          return (
            <motion.article
              key={project.id}
              className={styles.card}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: i * 0.12,
                ease: [0.25, 1, 0.5, 1],
              }}
            >
              {/* Project Thumbnail */}
              <div className={styles.preview}>
                <Image
                  src={project.thumbnail}
                  alt={`${project.title} thumbnail`}
                  fill
                  className={styles.previewImage}
                  sizes="(max-width: 900px) 100vw, 33vw"
                />
              </div>

              {/* Card body */}
              <div className={styles.cardBody}>
                <div className={styles.titleRow}>
                  <span className={styles.projectNum}>{i + 1}.</span>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <span className={styles.featuredTag}>{project.tag}</span>
                </div>

                <p className={styles.description}>{project.description}</p>

                {/* Tech tags */}
                <div className={styles.techTags}>
                  {project.techStack.map((tech) => (
                    <span key={tech} className={styles.tag}>
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Impact */}
                <div className={styles.impact}>
                  <span className={styles.impactIcon}>⚡</span>
                  <span>
                    Impact: <strong>{project.impact}</strong>
                  </span>
                </div>

                {/* Buttons */}
                <div className={styles.actions}>
                  <a href="#" className={styles.btnSecondary}>
                    <GithubIcon size={14} />
                    GitHub
                  </a>
                  <a href="#" className={styles.btnSecondary}>
                    <ExternalLink size={14} />
                    Live Dashboard
                  </a>
                  <button
                    className={styles.btnDeepDive}
                    onClick={() =>
                      setExpandedId(isExpanded ? null : project.id)
                    }
                    aria-expanded={isExpanded}
                  >
                    Project Deep Dive
                    <ChevronDown
                      size={14}
                      className={`${styles.ddChevron} ${isExpanded ? styles.ddChevronOpen : ""}`}
                    />
                  </button>
                </div>
              </div>

              {/* Deep Dive Expandable */}
              <div
                className={styles.deepDive}
                style={{
                  gridTemplateRows: isExpanded ? "1fr" : "0fr",
                }}
              >
                <div className={styles.deepDiveInner}>
                  <div className={styles.deepDiveContent}>
                    <div className={styles.ddSection}>
                      <h4>The Problem</h4>
                      <p>{project.deepDive.problem}</p>
                    </div>
                    <div className={styles.ddSection}>
                      <h4>Methodology</h4>
                      <p>{project.deepDive.methodology}</p>
                    </div>
                    <div className={styles.ddSection}>
                      <h4>Technical Challenges</h4>
                      <p>{project.deepDive.challenges}</p>
                    </div>
                    <div className={styles.ddSection}>
                      <h4>Results</h4>
                      <p>{project.deepDive.results}</p>
                    </div>
                    <div className={styles.ddSection}>
                      <h4>Future Improvements</h4>
                      <p>{project.deepDive.future}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>

      <motion.div
        className={styles.viewMore}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <a href="#" className={styles.viewMoreBtn}>
          View More Projects
          <ArrowRight size={16} />
        </a>
      </motion.div>
    </section>
  );
}
