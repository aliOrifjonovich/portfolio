import React from 'react'
import styles from '../../pages/Internships/Intern.module.scss'
import { CalendarIcon } from 'components/Icons';

const Internship = ({item}) => {
    console.log("item", item);
  return (
    <>
    <div className={styles.internships__box}>
        <h2><p>{item.companyName}</p><p>{item.role}</p></h2>
        <h3> <span className={styles.internships__calendar}><CalendarIcon fill ={"#00ffff"}/></span> &nbsp; &nbsp;{item.duration}</h3>
        <ul>
            <p>{item.introText}</p>
            <li data-aos='fade-right' data-aos-delay='200' data-aos-offset={item.offsetValue}>
                <span>{item.keyPointOne}</span>
            </li>
            <li data-aos='fade-right' data-aos-delay='400' data-aos-offset={item.offsetValue}>
                <span>{item.keyPointTwo}</span>
            </li>
            <li data-aos='fade-right' data-aos-delay='600' data-aos-offset={item.offsetValue}>
                <span>{item.keyPointThree}</span>
            </li>
            <li data-aos='fade-right' data-aos-delay='800' data-aos-offset={item.offsetValue}>
                <span>{item.keyPointFour}</span>
            </li>
        </ul>
    </div>
</>
  )
}

export default Internship