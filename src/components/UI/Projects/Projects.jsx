import React from "react";
import styles from "./Projects.module.scss";
import { Container, useMediaQuery } from "@mui/material";
import MainButton from "../MainButton/MainButton";
import img from "../../../../public/images/airplain.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import config from "utils/data";
import { useRouter } from "next/router";
import Link from "next/link";

const Projects = () => {
  const width1000px = useMediaQuery("(max-width:1000px)");
  const { push } = useRouter();
  const sliceData = config.projects.slice(0, 3);

  return (
    <Container>
      <div className={styles.projects__wrapper}>
        <div className={styles.content}>
          <h1
            className={`title ${styles.titleBg}`}
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            My Works
          </h1>
          <p data-aos="fade-left" data-aos-duration="2000">
            Here are some of my recent and fun projects. Each one reflects my
            focus on user-centered design and functionality.
          </p>
        </div>
        {sliceData.map((item, ind) => (
          <Link href={`/work/${item.id}`}>
            <div className={styles.boxes}>
              <div
                className={styles.box}
                data-aos={ind % 2 ? "fade-left" : "fade-right"}
                data-aos-duration="2000"
                style={{
                  display: width1000px ? "block" : "flex",
                  flexDirection: !(ind % 2) && "row-reverse",
                }}
              >
                <div className={styles.image_wrapper}>
                  <img src={item.img} alt="image" />
                </div>

                <div className={styles.box__content}>
                  <div className={styles.box__content__wrapper}>
                    <h1 className={styles.title}>{item.name}</h1>
                    <span className={styles.date}>{item.data}</span>
                    <p>{item.description}</p>
                  </div>
                  <MainButton
                    text={"Read More"}
                    variant={"contained"}
                    className={styles.btn}
                    onClick={() => push(`/work/${item.id}`)}
                  />
                </div>
              </div>
            </div>
          </Link>
        ))}
        <MainButton
          text={"See all projects"}
          variant={"contained"}
          sx={{ fontSize: "20px !important" }}
          data-aos="fade-down"
          onClick={() => push(`/work`)}
        />
      </div>
    </Container>
  );
};

export default Projects;
