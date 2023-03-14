import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from "react";
import logo from '../assets/images/logo.png'
import image from '../assets/images/miImage1.png'

function Name() {
  const [onCard, setOnCard] = useState(false)
  const onClick = () => {
    setOnCard(!onCard)
  }
  return (
    <div className='name'>
      <div className="title">
        <div className={!onCard ? "about-show" : "about-hide"}>
          <h2>My Name is</h2>
          <h2 className="type-writer">Rojin Taghadosi</h2>
          <div className={onCard? "card-hide" : "about"}>
            <p className="link" onClick={onClick}>About Me</p>
          </div>
        </div>
        <div className={onCard ? "card-show" : "card-hide"}>
          <div className="x-icon">
            <FontAwesomeIcon icon={faCircleXmark} onClick={onClick} />
          </div>
          <p className="content">A student of web and mobile application development. Having in-depth knowledge of common web technologies and languages such as JavaScript(ES6) and its related libraries including React and Node.js. Committed to producing high-quality, user-friendly web applications. Recognized for successfully handling several application projects using scrum framework.</p>
        </div>
      </div>
      <div className="image-container">
        <img src={image} alt="my image" className="image"/>
      </div>
    </div>
  )
}

export default Name
