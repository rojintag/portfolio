import ProjectCard from './ProjectCard';
import { useNavigate } from "react-router-dom";
import { projectData } from './Data';

function Works() {
  const navigate = useNavigate();

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
        {projectData.map((project, index) => {
          return <ProjectCard title={project.title} date={project.date} image={project.images[0]} seeDetails={() => seeDetails(project.id)} key={index} />
        })
        }
      </div>
    </div>
  )
}

export default Works
