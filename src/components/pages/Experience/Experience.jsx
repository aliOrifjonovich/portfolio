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
                <h2>Freelancer, Remote</h2>
                <h3>
                  <CalendarIcon
                    fill={"#00ffff"}
                    className={styles.experience__calendar}
                  />
                  &nbsp; &nbsp; August 2023 - present
                </h3>
                <ul>
                  <p>Responsible for -</p>
                  <li data-aos="fade-right" data-aos-delay="200">
                    <span>
                    • Developed responsive and visually appealing web applications using React.js, Next.js, and TypeScript.
                    </span>
                  </li>
                  <li data-aos="fade-right" data-aos-delay="400">
                    <span> • Collaborated closely with clients to understand project requirements, ensuring timely delivery of high-quality solutions aligned with their needs. </span>
                  </li>
                  <li data-aos="fade-right" data-aos-delay="600">
                    <span>
                    • Implemented user interface components and functionalities to enhance user experience and optimize performance. 
                    </span>
                  </li>
                  <li data-aos="fade-right" data-aos-delay="800">
                    <span>
                    • Utilized version control systems such as Git for efficient project management and code collaboration.
                    </span>
                  </li>
                  <li data-aos="fade-right" data-aos-delay="900">
                  <span>
                    • Actively stayed updated with industry trends and emerging technologies, integrating new tools and techniques to improve project efficiency and quality.
                    </span>
                  </li>
                </ul>
              </div>

              <div className={styles.experience__box}>
                <h2>Front-End Developer Assistant at Udevs</h2>
                <h3>
                <CalendarIcon
                    fill={"#00ffff"}
                    className={styles.experience__calendar}
                  />
                  &nbsp; &nbsp; May 2023 – August 2023
                </h3>
                <ul>
                  <p>Responsible for -</p>
                  <li
                    data-aos="fade-right"
                    data-aos-delay="200"
                    data-aos-offset="-5000"
                  >
                   <span>
                    • Contributed as a Front-end Developer Assistant at Udevs, gaining hands-on experience with contemporary front-end technologies. 
                    </span>
                  </li>
                  <li
                    data-aos="fade-right"
                    data-aos-delay="400"
                    data-aos-offset="-5000"
                  >
                    <span>
                    • Acquired proficiency in developing dynamic, responsive web applications utilizing Next.js, an advanced React framework with React Hook Forms renowned for its efficiency and SEO-friendly web pages.
                    </span>
                  </li>
                  <li
                    data-aos="fade-right"
                    data-aos-delay="600"
                    data-aos-offset="-5000"
                  >
                    <span>• Acquired practical expertise in version control systems such as Git and GitHub for proficient code management and tracking. Additionally, proficiently engaged with Gitlab within the Udevs company environment. </span>
                  </li>
                  <li
                    data-aos="fade-right"
                    data-aos-delay="800"
                    data-aos-offset="-5000"
                  >
                   <span>•  Strengthened problem-solving abilities and communication skills through this experience.</span>
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
