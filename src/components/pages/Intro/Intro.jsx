import React from 'react'
import styles from "./Intro.module.scss"
import AOS from 'aos';
import 'aos/dist/aos.css';


const Intro = () => {
  return (
    <>
    <div className={styles.about_intro}>
        <div className={styles.about_intro__container}>
            <div className={styles.about_intro__header}>
                <h2 className={styles.about_intro__number}>0<span>1</span></h2>
                <h1 data-aos='fade-down' data-aos-offset="0">H<span>ello</span>.</h1>
            </div>
            <div className={styles.about_intro__description}>
                <p data-aos='fade-right' >I am <span>Alisher Gulomov</span></p>
                <p data-aos='fade-right' data-aos-delay='200'>I enjoy building websites and always enthusiastic about creating new front-end features.</p>
                <p data-aos='fade-right' data-aos-delay='400'>Passionate front-end Developer with more than 1+ years of experience in developing highly adaptive and responsive websites using React.js and TypeScript.</p>
                <p data-aos='fade-right' data-aos-delay='600'>I also have understanding of styling frameworks like (SASS, Bootstrap, Tailwind.css) and react most used tools (Material.ui, Chakra.ui) </p>
                <p data-aos='fade-right' data-aos-delay='800'>I also know how to use frameworks that are necessary for react and can easily provide solutions during website creation,  like... <br />
                --State management - Redux and Redux-Toolkit, <br /> 
                --Forms element - React-Hook-Form and Formik  <br />
                --API integration - React-query <br />
                --Server Side Rendering (SSR) - Next.js
                </p>
                <p>
                    Follow my social medias.....
                </p>

                <div className={styles.about_intro__emoji}>:&nbsp;)</div>
            </div>
        </div>
    </div>
</>
  )
}

export default Intro