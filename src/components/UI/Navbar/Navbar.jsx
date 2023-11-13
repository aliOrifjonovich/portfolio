import React from "react";
import styles from "./Navbar.module.scss";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import { menuItems } from "utils/navbarMenu";
import { useRouter } from "next/router";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useMediaQuery } from "@mui/material";


const Navbar = () => {
  const width1000px = useMediaQuery("(min-width:500px)");
  const { t } = useTranslation("common");
  const router = useRouter();

  return (
    <nav className={styles.navbar} data-aos="fade-down" data-aos-duration="1000">
      <ul>
        {menuItems.map((item, index) => (
          <Link href={item.link}>
            <li
              className={`${
                router.asPath === item.link
                  ? `${styles.active} ${styles[`gradient-${index}`]}`
                  : ""
              }`}
            >
              {width1000px ? 
              <a>{t(`${item.label}`)}</a> : <span>{item.icon}</span> 
              }
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
