import React from 'react'
import styles from "./ProjectsContent.module.scss"
import ProjectCards from '../ProjectCards/ProjectCards'

const ProjectsContent = () => {
  return (
    <div className={styles.projects__wrapper}>
        <ProjectCards/>
    </div>
  )
}

export default ProjectsContent