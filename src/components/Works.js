import { useQuery } from "@tanstack/react-query";
import { requestProjects } from '../api/projects';
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

  const seeDetails = () => {
    alert("button clicked")
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    lazyLoad: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
        }
      }
        ]
  };

  return (
    <div className='projects'>
      <h2 className="title">My Projects</h2>
      <Slider {...settings}>
        {getProjects.data.map((project, index) => {
          return <ProjectCard title={project.title} date={project.date} image={project.image} seeDetails={seeDetails} key={index} />
        })
      }
      </Slider>
    </div>
  )
}

export default Works
