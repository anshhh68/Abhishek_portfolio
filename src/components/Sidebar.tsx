"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  LayoutDashboard,
  User,
  BrainCircuit,
  Layers,
  History,
  Mail,
  Menu,
  X,
  Download,
  Code2,
  Share2
} from "lucide-react";
import { LinkedinIcon, GithubIcon } from "@/components/icons/SocialIcons";
import styles from "./Sidebar.module.css";

const navItems = [
  { id: "overview", label: "Overview", icon: LayoutDashboard },
  { id: "about", label: "About", icon: User },
  { id: "skills", label: "Intelligence", icon: BrainCircuit },
  { id: "projects", label: "Portfolio", icon: Layers },
  { id: "experience", label: "Timeline", icon: History },
  { id: "contact", label: "Contact", icon: Mail },
];

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState("overview");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    );

    // Also observe the top of the page for "overview"
    const overviewEl = document.getElementById("overview") || document.body;
    observer.observe(overviewEl);

    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    if (id === "overview") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActiveSection("overview");
      setMobileOpen(false);
      return;
    }

    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setMobileOpen(false);
    }
  };

  return (
    <>
      {/* Mobile toggle */}
      <button
        className={styles.mobileToggle}
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle navigation"
      >
        {mobileOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      <aside
        className={`sidebar-container ${styles.sidebar} ${mobileOpen ? styles.open : ""}`}
      >
        {/* Profile Section */}
        <div className={styles.profileSection}>
          <div className={styles.avatar}>
            <div className={styles.avatarInner}>
               <Image src="/dp.jpeg" alt="Abhishek Ranjan" fill style={{ objectFit: 'cover' }} priority />
            </div>
          </div>
          <h1 className={styles.name}>Abhishek<br/>Ranjan</h1>
          <p className={styles.title}>Data Analytics End to End</p>
        </div>

        {/* Navigation */}
        <nav className={styles.navSection}>
          <ul className={styles.navList}>
            {navItems.map(({ id, label, icon: Icon }) => {
              const isActive = activeSection === id;
              return (
                <li key={id}>
                  <button
                    className={`${styles.navItem} ${isActive ? styles.active : ""}`}
                    onClick={() => scrollTo(id)}
                  >
                    <Icon size={16} />
                    <span>{label}</span>
                    {isActive && <span className={styles.activeDot} />}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Footer Actions */}
        <div className={styles.footerSection}>
          <a href="#" className={styles.exportBtn}>
            Export CV
          </a>
          <div className={styles.socialLinks}>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className={styles.socialIcon}
            >
              <Code2 size={16} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share"
              className={styles.socialIcon}
            >
              <Share2 size={16} />
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}
