import React from 'react'
import styles from './Engineering.module.scss'
import { CalendarIcon } from 'components/Icons'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Engineering = () => {
  return (
    <>
    <div className={styles.graduation}>
        <div className={styles.graduation__container}>
            <div className={styles.graduation__header}>
                <h2 className={styles.graduation__number}>0<span>4</span></h2>
                <h1 data-aos='fade-down' data-aos-offset="0">E<span>ngineering</span>.</h1>
            </div>

            <div className={styles.graduation__description}>
                <h1 data-aos="fade-right" data-aos-delay="200">Westminster International University in Tashkent ( WIUT ).</h1>
                <h2 data-aos="fade-right" data-aos-delay="400" className={styles.graduation__calendar}><CalendarIcon fill={"#00ffff"} />&nbsp;&nbsp;12/09/2021 - 31/05/2025</h2>
                <p data-aos="fade-right" data-aos-delay="600">
                   <h1> Bussiness Information System (BIS) faculty student. <br /></h1>
                    <h2>Modules</h2>
                   <span> Web Technology (includes: HTML/CSS/PUG, JavaScript, Node.js, Express.js, React.js, Next.js ),</span>
                   <span> Object Oriented Programming (OOP),</span>
                   <span> Mobile Application (Kotlin, Java),</span>
                </p>
            </div>
        </div>
    </div>
</>
  )
}

export default Engineering