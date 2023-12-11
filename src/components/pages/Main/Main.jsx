import styles from "./Main.module.scss";
import { Container } from "@mui/material";
import Home from "components/UI/Main/Home";
import Projects from "components/UI/Projects/Projects";
import About from "../AboutMe/AboutMe";

export function Main() {
  return (
    <Container>
      <div className={styles.wrapper}>
        <Home />
        <Projects />
        <About />
      </div>
    </Container>
  );
}
