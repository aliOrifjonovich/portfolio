import React, { useState } from "react";
import styles from "./ProjectCard.module.scss";
import MainButton from "components/UI/MainButton/MainButton";
import { ArrowIcon, EaysIcon, LikeIcon } from "components/Icons";
import { Container } from "@mui/material";
import { useRouter } from "next/router";
import config from "utils/data";

const ProjectCard = () => {
  
  const router = useRouter();
  const [likeCount, setLikeCount] = useState(0);
  const [active, setActive] = useState("");
  const data = config.projects.filter((item) => item.id === router.query.id);


  const increamentDecreament = () => {
    if (!active) {
      setLikeCount(likeCount + 1);
      setActive(true);
    } else {
      setLikeCount(likeCount - 1);
      setActive(false);
    }
  };

  const newWindowTabLink=(link)=>{
    console.log("cliked");
    typeof window != "undefined" && window.open(link, '_blank');
  }
  

  return (
    <Container>
      {data.map((item) => (
        <div className={styles.card}>
          <div className={styles.card__logo_wrapper}>
            <span className={styles.card__product_logo}>
              {/*<img src="/" alt="logo" />*/} {item.logo}
            </span>
            <div className={styles.card__technologies}>
              {item.technologies.map((item) => (
                <p className={styles.technology}>{item}</p>
              ))}
              <p className={styles.productType}>{item.project_type}</p>
            </div>
          </div>
          <div className={styles.name_of_product}>
            <div className={styles.name_content}>
              <h1>{item.name}</h1>
              <p>{item.subtitle}</p>
            </div>
            <MainButton
              text={"Go to the site"}
              variant={"contained"}
              icon={<ArrowIcon />}
              className={styles.btn}
              onClick={()=>newWindowTabLink(item.link)}
            />
          </div>
          <div className={styles.infos}>
            <img src={item.img} alt="image" className={styles.img_wrapper} />
            <p>{item.description}</p>
          </div>
          <div className={styles.watchesIcon}>
            <div className={styles.iconContent}>
              <span onClick={increamentDecreament}>
                <LikeIcon size={"50px"} fill={likeCount ? "#00A795" : "#fff"} />
              </span>
              <h3>{item.logo}</h3>
            </div>
            <div className={styles.statistic}>
              <div className={styles.box}>
                <EaysIcon fill={"#fff"} />
                <p>12000</p>
              </div>

              <div className={styles.box}>
                <LikeIcon size={"30px"} />
                <p>{likeCount}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Container>
  );
};

export default ProjectCard;
