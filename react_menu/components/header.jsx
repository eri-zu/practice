import Link from "next/link";
import styles from "../styles/components/header.module.scss";

export function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">TOP</Link>
      <Link href="/about/">ABOUT</Link>
      <Link href="/works/">WORKS</Link>
    </header>
  );
}
