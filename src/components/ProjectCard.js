import React from 'react'

function ProjectCard({ title, date, image, seeDetails }) {
  return (
    <div className='project-card'>
        <div className="text-wrapper">
          <h2>{title}</h2>
          <p>{date}</p>
          <button onClick={seeDetails}>See Details</button>
        </div>
        <div className="image-wrapper">
          <img src={image} alt="project's preview" />
        </div>
    </div>
  )

}


export default ProjectCard
