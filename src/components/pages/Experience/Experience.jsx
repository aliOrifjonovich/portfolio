import { CalendarIcon } from "components/Icons";
import React from "react";
import styles from "./Experience.module.scss"

const Experience = () => {
  return (
    <>
      <div className={styles.experience}>
        <div className={styles.experience__container}>
          <div className={styles.experience__header}>
            <h2 className={styles.experience__number}>
              0<span>2</span>
            </h2>
            <h1 data-aos="fade-down" data-aos-offset="0">
              E<span>xperience</span>.
            </h1>
          </div>
          <div className={styles.experience__description}>
            <div className={styles.experience__main_box}>
              <div className={styles.experience__box}>
                <h2>XYZ Pvt Ltd</h2>
                <h3>
                  <CalendarIcon
                    fill={"#00ffff"}
                    className={styles.experience__calendar}
                  />
                  &nbsp; &nbsp;01/06/2022 - PRESENT
                </h3>
                <ul>
                  <p>Responsible for -</p>
                  <li data-aos="fade-right" data-aos-delay="200">
                    <span>
                      Developing multiple highly responsive and adaptive website
                      using React and Vue
                    </span>
                  </li>
                  <li data-aos="fade-right" data-aos-delay="400">
                    <span>Developing new user-facing features</span>
                  </li>
                  <li data-aos="fade-right" data-aos-delay="600">
                    <span>Building reusable code</span>
                  </li>
                  <li data-aos="fade-right" data-aos-delay="800">
                    <span>Add few more lines...</span>
                  </li>
                </ul>
              </div>

              <div className={styles.experience__box}>
                <h2>XYZ Pvt Ltd</h2>
                <h3>
                <CalendarIcon
                    fill={"#00ffff"}
                    className={styles.experience__calendar}
                  />
                  &nbsp; &nbsp;01/06/2022 - PRESENT
                </h3>
                <ul>
                  <p>Responsible for -</p>
                  <li
                    data-aos="fade-right"
                    data-aos-delay="200"
                    data-aos-offset="-5000"
                  >
                    <span>
                      Developing multiple highly responsive and adaptive website
                      using React and Vue
                    </span>
                  </li>
                  <li
                    data-aos="fade-right"
                    data-aos-delay="400"
                    data-aos-offset="-5000"
                  >
                    <span>Developing new user-facing features</span>
                  </li>
                  <li
                    data-aos="fade-right"
                    data-aos-delay="600"
                    data-aos-offset="-5000"
                  >
                    <span>Building reusable code</span>
                  </li>
                  <li
                    data-aos="fade-right"
                    data-aos-delay="800"
                    data-aos-offset="-5000"
                  >
                    <span>Add few more lines...</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
