import { Container } from "@mui/material";
import React from "react";
import styles from "./Blog.module.scss";

const Blog = () => {
  return (
    <Container>
      <div className={styles.blog} data-aos="fade-down" data-aos-offset="200">
        <h1 className={styles.blog__content}>Soon...</h1>
      </div>
    </Container>
  );
};

export default Blog;
