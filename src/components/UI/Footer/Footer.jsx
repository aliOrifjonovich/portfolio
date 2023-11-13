import styles from "./Footer.module.scss";
import Link from "next/link";
import { Container } from "@mui/material";
import MainButton from "../MainButton/MainButton";
import {
  EmailIcon,
  InstagramIcon,
  LinkedinIcon,
  TelegramIcon,
} from "components/Icons";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useRouter } from "next/router";


export function Footer() {
  const {push}=useRouter()
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.box} data-aos="zoom-in" data-aos-duration="2000">
          <span className={styles.border__1}></span>
          <div className={styles.content}>
            <h1 className={styles.title}>
              Ready to get started on your <br /> next big project?
            </h1>
            <div className={styles.medias__wrapper}>
              <Link href="/">
                <div className={styles.medias__wrapper__box}>
                  <EmailIcon />
                  orifjonovichalisher@gmail.com
                </div>
              </Link>
              <Link href="/https://t.me/Alisher_Gulomov_Blog">
                <div className={styles.medias__wrapper__box}>
                  <TelegramIcon />
                </div>
              </Link>
              <Link href="https://www.instagram.com/alisher_gulomov_orifjonovich/">
                <div className={styles.medias__wrapper__box}>
                  <InstagramIcon />
                </div>
              </Link>
              <Link href="https://www.linkedin.com/in/alisher-gulomov/">
                <div className={styles.medias__wrapper__box}>
                  <LinkedinIcon />
                </div>
              </Link>
            </div>
            <MainButton
              variant="outlined"
              text="Get in touch"
              sx={{ fontSize: "20px !important" }}
              onClick={()=>push(`https://t.me/Alisher_Gulomov`)}
            />
          </div>
          <span className={styles.border__2}></span>
        </div>
      </Container>
        <div className={styles.bottom_footer}>
          <p>© 2023 Alisher Gulomov</p>
        </div>
    </footer>
  );
}
