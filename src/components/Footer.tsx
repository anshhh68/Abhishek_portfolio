import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <p className={styles.copy}>
        © {year} Abhishek Ranjan. All rights reserved.
      </p>
      <p className={styles.updated}>Last Updated: April 2026</p>
    </footer>
  );
}
