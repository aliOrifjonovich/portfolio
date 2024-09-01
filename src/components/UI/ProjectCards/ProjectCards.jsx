import React from "react";
import styles from "./PrpjectCards.module.scss";
import { createCategoryArr } from "utils/createdCategoryArr";
import { useRouter } from "next/router";
import { useMediaQuery } from "@mui/material";
import config from "utils/data";

const ProjectCards = () => {
  const width1000px = useMediaQuery("(max-width:1000px)");
  const checkWidth = width1000px ? 2 : 6;
  const { push } = useRouter();

  return (
    <>
      <div className={styles.category}>
        <div className={styles.category__product}>
          {createCategoryArr(config.projects ?? [], checkWidth).map((item) => (
            <div className={styles.category__list}>
              {item?.map((elem, index) => (
                <div
                  key={elem.id}
                  className={styles[`category__list__${index + 1}`]}
                  onClick={() => push(`/work/${elem.id}`)}
                  data-aos="fade-right"
                  data-aos-duration={elem.duration}
                >
                  <span
                    className={`${
                      elem.action === "Done"
                        ? styles.actionDone
                        : styles.actionProccess
                    }`}
                  >
                    {elem.action}
                    {console.log("action", elem.action)}
                  </span>
                  <div className={styles.img_wrapper}>
                    <img src={elem.img} alt="_" />
                  </div>
                  <p>{elem.name}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectCards;
