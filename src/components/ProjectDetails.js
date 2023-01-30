import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { useLocation, useNavigate, useHistory } from 'react-router-dom';
import { requestProjectByID } from '../api/projects';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons'

function ProjectDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const projectId = location.state.id;

  const getProjects = useQuery(["projects"], () => requestProjectByID(projectId),
    {
      onError: (error) => {
        alert(error.message);
      }
    });
  if (getProjects.isLoading) {
    return <img className={"loading"} src={require('../components/assets/images/rings.svg')} />
  }

  const onBack = () => {
    navigate(-1);
  }
  return (
    <div className='project-details'>
      <span
        className='icon-back' onClick = {onBack}
      >
          <FontAwesomeIcon icon={faArrowAltCircleLeft} />
      </span>
      <div className="project-wrapper">
        <div>
          <h2>{getProjects.data?.title}</h2>
          <p>{getProjects.data?.date}</p>
          <p>{getProjects.data?.description}</p>
        </div>
        <img src={getProjects.data?.image} alt="project's image" />
      </div>
    </div>
  )
}

export default ProjectDetails
