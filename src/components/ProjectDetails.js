import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { requestProjectByID } from '../api/projects';

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
  return (
    <div className='project-details'>
      <div>
        <h2>{getProjects.data?.title}</h2>
        <p>{getProjects.data?.date}</p>
        <p>{getProjects.data?.description}</p>
      </div>
      <img src={getProjects.data?.image} alt="project's image" /> 
    </div>
  )
}

export default ProjectDetails
