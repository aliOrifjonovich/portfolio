import Internship from 'components/UI/Internship/Internship'
import React from 'react'
import styles from "./Intern.module.scss"
import AOS from 'aos';
import 'aos/dist/aos.css';

const Intern = () => {
    const data = [
            {
              companyName: 'Company Name',
              role: 'Front-end Developer',
              introText: '',
              duration: '29/03/2022 - 29/05/2022',
              keyPointOne: 'Built front-end of multiple website using ReactJS',
              keyPointTwo:
                'Add few lines here....',
              keyPointThree: 'Add few lines here... if requried Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis voluptas dolo Perspiciatis voluptas do.',
              keyPointFour:
                'Add few lines here... if requried Lorem, ipsum dolor sit amet consectetur adipisicing architecto molestiae.',
              offsetValue: '0',
            },
            {
              companyName: 'Company Name',
              role: 'Front-end Developer',
              introText: '',
              duration: '14/06/2021 - 14/07/2021',
              keyPointOne: 'Built front-end of multiple website using ReactJS.',
              keyPointTwo: 'Add few lines here... if requried',
              keyPointThree:
                'Add few lines here... if requried',
              keyPointFour:
                'Add few lines here... if requried Lorem, ipsum dolor sit amet consectetur adipisicing cto molestiae.',
              offsetValue: '-1000',
            },
            {
              companyName: 'Company Name',
              role: 'Front-end Developer',
              introText: '',
              duration: '10/09/2020 - 10/11/2020',
              keyPointOne:
                'Add few lines here... if requried',
              keyPointTwo: 'Add few lines here... if requried',
              keyPointThree: 'Add few lines here... if requried',
              keyPointFour: '',
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