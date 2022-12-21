import { useQuery } from "@tanstack/react-query";
import { requestProjects } from '../api/projects';
import BtnSlider from './BtnSlider';
import ProjectCard from './ProjectCard';
import Slider from "react-slick";

function Works() {
  const getProjects = useQuery(["projects"], () => requestProjects(),
    {
      onError: (error) => {
        alert(error.message);
      }
    });
  if (getProjects.isLoading) {
    return <img className={"loading"} src={require('../components/assets/images/rings.svg')} />
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  return (
    <div className='projects'>
      <h2>My Projects</h2>
      <Slider {...settings}>
        {getProjects.data.map((project, index) => {
          return <ProjectCard title={project.title} date={project.date} image={project.image} key={index} />
        })
      }
      </Slider>
    </div>
  )
}

export default Works
