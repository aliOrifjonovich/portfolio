import Internship from 'components/UI/Internship/Internship'
import React from 'react'
import styles from "./Intern.module.scss"
import AOS from 'aos';
import 'aos/dist/aos.css';

const Intern = () => {
    const data = [
            {
              companyName: 'ITransition,',
              role: 'Front-end Developer',
              introText: '',
              duration: ' Nov 2022 – Jan 2023',
              keyPointOne:
                '    • Collaborated with the front-end development team to design and maintain responsive user interfaces for various web applications.',
              keyPointTwo: ' • Conducted comprehensive bug testing and troubleshooting, effectively identifying and resolving front-end issues to enhance overall user experience.',
              keyPointThree: '• Expanded proficiency in HTML, CSS, and JavaScript through hands-on experience and continuous learning efforts. ',
              keyPointFour: ' • Acquired invaluable insights into the web development landscape, cultivating enhanced teamwork and communication skills by actively engaging with cross-functional teams under the mentorship of seasoned developers.',
              offsetValue: '-1000',
            },
    ]
  return (
    <>
    <div className={styles.internships}>
        <div className={styles.internships__container}>
            <div className={styles.internships__header}>
                <h2 className={styles.internships__number}>0<span>3</span></h2>
                <h1 data-aos='fade-down' data-aos-offset="0">I<span>nternships</span>.</h1>
            </div>
            <div className={styles.internships__description}>
                <div className={styles.internships__main_box}>
                    {data.map((content) => (
                        <Internship key={content.companyName} item={content} />
                    ))}
                </div>
            </div>
        </div>
    </div>
</>
  )
}

export default Intern