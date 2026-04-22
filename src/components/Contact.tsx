"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MessageSquare } from "lucide-react";
import styles from "./Contact.module.css";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(
      `Hi Abhishek,\n\n${message}\n\nFrom: ${name}\nEmail: ${email}`
    );
    window.open(
      `mailto:abhishek17878@gmail.com?subject=${subject}&body=${body}`,
      "_self"
    );

    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section className={`section ${styles.contact}`}>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
      >
        <h2 className="section-title">
          <MessageSquare size={20} />
          Get in Touch
        </h2>

        <p className={styles.intro}>
          I&apos;m open to exciting opportunities in Data Analytics, Business
          Intelligence and Market Research. Let&apos;s connect and discuss how I
          can contribute to your team.
        </p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.row}>
            <div className={styles.field}>
              <label htmlFor="contact-name" className={styles.label}>
                Name
              </label>
              <input
                id="contact-name"
                type="text"
                className={styles.input}
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Your name"
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="contact-email" className={styles.label}>
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                className={styles.input}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div className={styles.field}>
            <label htmlFor="contact-message" className={styles.label}>
              Message
            </label>
            <textarea
              id="contact-message"
              className={styles.textarea}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={5}
              placeholder="Tell me about the opportunity..."
            />
          </div>

          <button
            type="submit"
            className={`${styles.submitBtn} ${sent ? styles.sent : ""}`}
          >
            <Send size={16} />
            {sent ? "Opening Mail Client..." : "Let's Connect"}
          </button>
        </form>
      </motion.div>
    </section>
  );
}
