import { useQuery } from "@tanstack/react-query";
import { requestProjects } from '../api/projects';
import ProjectCard from './ProjectCard';
import { useNavigate } from "react-router-dom";

function Works() {
  const navigate = useNavigate();
  const getProjects = useQuery(["projects"], () => requestProjects(),
    {
      onError: (error) => {
        alert(error.message);
      }
    });
  if (getProjects.isLoading) {
    return <img className={"loading"} src={require('../components/assets/images/rings.svg')} />
  }

  const seeDetails = (id) => {
      navigate('/projectDetails', {
        state: {
          id: `${id}`
      }
      });
  };

  return (
    <div className='projects'>
      <h2 className="title">My Projects</h2>
        <div className="gallery">
          {getProjects.data.map((project, index) => {
            return <ProjectCard title={project.title} date={project.date} image={project.image} seeDetails={() => seeDetails(project.id)} key={index} />
          })
                }
        </div>
    </div>
  )
}

export default Works
