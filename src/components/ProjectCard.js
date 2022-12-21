import React from 'react'

function ProjectCard({ title, date, image }) {
  return (
    <div className='project-card'>
      <h2>{title}</h2>
      <p>{date}</p>
      <img src={image} alt="project's preview" />
    </div>
  )

}


export default ProjectCard
