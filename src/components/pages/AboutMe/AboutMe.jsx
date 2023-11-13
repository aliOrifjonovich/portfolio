import AboutPart from "components/UI/AboutPart/AboutPart";
import SkillsPart from "components/UI/SkillsPart/SkillsPart";
import React from "react";
import styles from "./Aboutme.module.scss"

const About = () => {
  return (
    <div className={styles.wrapper}>
      <AboutPart />
      <SkillsPart />
    </div>
  );
};

export default About;
