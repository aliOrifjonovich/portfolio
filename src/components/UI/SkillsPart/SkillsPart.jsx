import React, { useEffect } from "react";
import TagCloud from "TagCloud";
import styles from "./SkillsPart.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import Marquee from "react-fast-marquee";
import { useMediaQuery } from "@mui/material";

const SkillsPart = () => {
  const data = {
    root1: [
      {
        image: "/images/1_2tmzU7bve-VlTkOMWsk_Hw.jpg",
      },
      {
        image: "/images/2.jpg",
      },
      {
        image: "/images/3.webp",
      },
      {
        image: "/images/4.png",
      },
      {
        image: "/images/5.png",
      },
      {
        image: "/images/6.jpg",
      },
      {
        image: "/images/7.png",
      },
    ],
    root2: [
      {
        image: "/images/8.png",
      },
      {
        image: "/images/9.png",
      },
      {
        image: "/images/10.png",
      },
      {
        image: "/images/11.png",
      },
      {
        image: "/images/12.png",
      },
      {
        image: "/images/13.png",
      },
      {
        image: "/images/14.png",
      },
    ],
  };
  const width1000px = useMediaQuery("(min-width:1000px)");

  //   let radii;

  //   return () => {
  //     const texts = [
  //       'HTML',
  //       'CSS',
  //       'SASS',
  //       'JavaScript',
  //       'React',
  //       'Vue',
  //       'Nuxt',
  //       'NodeJS',
  //       'Shopify',
  //       'Jquery',
  //       'ES6',
  //       'GIT',
  //       'GITHUB',
  //     ];

  //     function radiusValue() {
  //       if (window.screen.width <= 778) {
  //         radii = 150;
  //       } else {
  //         radii = 290;
  //       }
  //       return radii;
  //     }

  //     const options = {
  //       radius: radiusValue(),
  //       maxSpeed: 'normal',
  //       initSpeed: 'normal',
  //       keep: true,
  //     };

  //     TagCloud(container, texts, options);
  //   }
  // }, []);
  return (
    <>
      <div className={styles.skill}>
        <div className={styles.skill__main_container}>
          <div
            className={styles.skill__header}
            id="skill__heading"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <h1>Skills.</h1>
          </div>

          <div
            className={styles.marqueeRoot}
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            <Marquee
              className={styles.marquee}
              pauseOnHover={true}
              speed={40}
              direction="left"
              gradientWidth={100}
              gradient={width1000px}
              gradientColor={[255, 255, 255]}
            >
              {data?.root1?.map((el, index) => (
                <div className={styles.marquee__item}>
                  <img src={el.image} alt="university" />
                </div>
              ))}
            </Marquee>

            <Marquee
              className={styles.marquee}
              pauseOnHover={true}
              speed={40}
              direction="right"
              gradientWidth={100}
              gradient={width1000px}
              gradientColor={[255, 255, 255]}
            >
              {data?.root2?.map((el, index) => (
                <div className={styles.marquee__item}>
                  <img src={el.image} alt="university" />
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillsPart;
