import { Container } from '@mui/material'
import React from 'react'
import styles from "./Work.module.scss"
import ProjectsContent from 'components/UI/ProjectsContent/ProjectsContent'

const Work = () => {
  return (
    <Container>
      <div className={styles.work}>
        <h1 className="title">Projects</h1>
        <ProjectsContent/>
      </div>
    </Container>
  )
}

export default Work