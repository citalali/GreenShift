import React, { ReactNode } from "react";
import styles from "../../styles/Page.module.css";
import Link from "next/link";

interface PageProps {
  children: ReactNode;
}

const Page: React.FC<PageProps> = ({ children }) => {
  const navClick = (arg: string) => {
    // Replace this with the actual navigation logic based on the argument
    console.log(`Navigating to: ${arg}`);
  };
  return (
    <div className={styles.page}>
      <nav className={styles.nav}>
        <button>
          <Link href="/" className={styles.link}>
            LOGO HERE
          </Link>
        </button>
        <button>
          <Link href="/map" className={styles.link}>
            Map
          </Link>
        </button>
        <button>
          <Link href="/about" className={styles.link}>
            About Us
          </Link>
        </button>
        <button>
          <Link href="/signup" className={styles.link}>
            Sign Up
          </Link>
        </button>
        <button>
          <Link href="/later" className={styles.link}>
            Later
          </Link>
        </button>
      </nav>
      <div className={styles.searchBar}>
        {/* Add your search bar implementation here */}
        <input type="text" placeholder="Search..." />
        <button>Search</button>
      </div>
      <header className={styles.header}>
        <h1>Green Shift</h1>
      </header>
      <hr className={styles.hr}></hr>
      <div>{children}</div>
      <hr className={styles.hr}></hr>
      <footer className={styles.footer}>
        <ul>
          <li>
            <a href="#">Impressum</a>
          </li>
          <li>
            <a href="#">Blabla</a>
          </li>
          <li>
            <a href="#">Another Thing</a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Page;
