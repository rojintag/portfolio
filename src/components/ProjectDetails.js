import React from 'react'
import { useLocation, useNavigate, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { projectData } from './Data';

function ProjectDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const projectId = location.state.id;

  const requestProjectByID = () => {
    const project = projectData.find((project) => project.id == projectId);
    console.log('project:', project);
    return project;
  };

  const onBack = () => {
    navigate(-1);
  }
  const project = requestProjectByID(projectId);

  if (!project) {
    // handle case where project with specified id is not found
    return <div>Project not found</div>;
  }

  return (
    <div className='project-details'>
      <span className='icon-back' onClick={onBack}>
        <FontAwesomeIcon icon={faArrowAltCircleLeft} />
      </span>
      <div className='project-wrapper'>
        <div className='details'>
          <h2>{project.title}</h2>
          <p>{project.date}</p>
          <p>{project.description}</p>
          <p>{project.features}</p>
        </div>
        <div className="images">
          <img src={project.images[0]} alt="project's image" />
          <img src={project.images[1]} alt="project's image" />
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails
