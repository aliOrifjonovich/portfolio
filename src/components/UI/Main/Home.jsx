import React from "react";
import { useEffect, useState } from "react";
import MainButton from "components/UI/MainButton/MainButton";
import styles from "./Home.module.scss";
import { TypeAnimation } from "react-type-animation";
import { useRouter } from "next/router";
const Home = () => {
  const [value, setValue] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const storedName = localStorage.getItem("userName");

    if (storedName) {
      setValue(storedName);
    } else {
      const name = prompt("What is your name?");
      if (name) {
        setValue(name);
        localStorage.setItem("userName", name);
      }
    }
  }, []);

  return (
    <main className={styles.main} data-aos="fade-down" data-aos-duration="3000">
      <div className={styles.main__contents}>
        <div className={styles.main__contents__content}>
          <div className={styles.header}>
            <h3 className={styles.title}>Hi, {value}</h3>
            <TypeAnimation
              sequence={[
                "I'm Alisher Gulomov",
                2000,
                "I'm Front-End Developer",
                2000,
                "I'm Project Manager",
                2000,
              ]}
              wrapper="span"
              speed={250}
              style={{
                fontSize: "90px",
                display: "inline-block",
                width: "100%",
              }}
              repeat={Infinity}
            />
          </div>
          <p>
            I'm a dedicated Frontend Developer with a passion for building
            exceptional digital interfaces. My goal is to seamlessly merge
            functionality and design, creating impactful and user-centric
            solutions
          </p>
        </div>
        <div className={styles.buttons}>
          <MainButton
            variant="contained"
            text={"About me"}
            sx={{ fontSize: "20px !important" }}
            className={`${styles.bn632_hover} ${styles.bn25}`}
            onClick={() => router.push("/about")}
          />
          <a
            href="/images/CV.docx"
            download="CV.docx"
            className={styles.glow_on_hover}
            type="button"
          >
            Download CV
          </a>
        </div>
        <span className={styles.scroll_btn}>
          <a href="#">
            <span className={styles.mouse}>
              <span></span>
            </span>
          </a>
          <p>Scroll</p>
        </span>
      </div>
    </main>
  );
};

export default Home;
