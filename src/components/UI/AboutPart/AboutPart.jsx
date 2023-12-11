import React from "react";
import styles from "./AboutPart.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

const AboutPart = () => {
  return (
    <div className={styles.about} id="about">
      <div className={styles.about__container}>
        <div
          className={styles.about__header}
          id="about__heading"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <h1>About Me.</h1>
          <p></p>
        </div>

        <div className={styles.about__details_container}>
          <div
            className={styles.about__details}
            data-aos="fade-down"
            data-aos-offset="-180"
            data-aos-delay="200"
            data-aos-once="true"
          >
            <Link href="/about/intro">
              <a>
                <h1>
                  0<span>1</span>
                </h1>
                <h2>
                  A<span>bout me,</span>
                </h2>
                <p>
                  I am <span>Alisher.</span> <br /> Highly passoinate front-end
                  Developer with 1 years of experience.
                </p>
              </a>
            </Link>
          </div>
          <div
            className={styles.about__details}
            data-aos="fade-down"
            data-aos-offset="-180"
            data-aos-delay="200"
            data-aos-once="true"
          >
            <Link href="/about/experience">
              <a>
                <h1>
                  0<span>2</span>
                </h1>
                <h2>
                  E<span>xperience</span>
                </h2>
                <p>
                  <span>1 year of experience.</span>
                  <br />I have approximately 1 years of experience in developing
                  highly responsive frontend of websites using React.js and
                  Next.js
                </p>
              </a>
            </Link>
          </div>
          <div
            className={styles.about__details}
            data-aos="fade-down"
            data-aos-offset="50"
            data-aos-delay="500"
            data-aos-once="true"
          >
            <Link href="/about/intern">
              <a>
                <h1>
                  0<span>3</span>
                </h1>
                <h2>
                  I<span>nternships</span>
                </h2>
                <p>
                  <span>Interned at -</span> <br />
                </p>
                <ul>
                  <li>
                    <span>Itransition</span> - Front-end Developer{" "}
                  </li>
                </ul>
              </a>
            </Link>
          </div>
          <div
            className={styles.about__details}
            data-aos="fade-down"
            data-aos-offset="-180"
            data-aos-delay="700"
            data-aos-once="true"
          >
            <Link href="/about/engineering">
              <a>
                <h1>
                  0<span>4</span>
                </h1>
                <h2>
                  G<span>raduation</span>
                </h2>
                <p>
                  <span>Wesminster International University in Tashkent (WIUT) </span>
                  <br />
                  Information about my experience and knowledge
                  in the field of IT and where I have studied at
                </p>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPart;
