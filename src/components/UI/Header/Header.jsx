import { Container } from "@mui/material";
import useTranslation from "next-translate/useTranslation";
import styles from "./Header.module.scss";
import Navbar from "../Navbar/Navbar";
import { useEffect, useState } from "react";

export function Header() {
  const { t } = useTranslation("common");
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.box}>
          <div className={`${styles.navbar_wrapper} ${scrolling ? styles.scrolling : ''}`}>
            <Navbar />
          </div>
        </div>
      </Container>
    </header>
  );
}
