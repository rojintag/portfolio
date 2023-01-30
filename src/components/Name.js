import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from "react";

function Name() {
  const [onCard, setOnCard] = useState(false)
  const onClick = () => {
    setOnCard(!onCard)
  }
  return (
    <div className='name'>
      <div className={!onCard ? "about-show" : "about-hide"}>
        <h2>My Name is</h2>
        <h2 className="type-writer">Rojin Taghadosi</h2>
        <p className="link" onClick={onClick}>About Me</p>
      </div>
      <div className={onCard ? "card-show" : "card-hide"}>
        <div className="x-icon">
          <FontAwesomeIcon icon={faCircleXmark} onClick={onClick} />
        </div>
        <p className="content">A self-taught Web Developer with two-year background in front-end Development. Having
          in-depth knowledge of common web technologies and languages such as JavaScript and
          its related libraries including but not limited to React and node.js. Committed to producing
          high-quality, user-friendly web applications. Recognized for successfully handling
          several application enhancements, upgrades, bug fixes and meeting the deadlines of
          assigned tasks. Having acceptable proficiency in both object-oriented and functional
          programming paradigms. Analytical, intellectually curious and always seeking out ways
          to improve code and designs. Interested in finding a junior web developer position.</p>
      </div>
      <div class='light x1'></div>
      <div class='light x2'></div>
      <div class='light x3'></div>
      <div class='light x4'></div>
      <div class='light x5'></div>
      <div class='light x6'></div>
      <div class='light x7'></div>
      <div class='light x8'></div>
      <div class='light x9'></div>
    </div>
  )
}

export default Name
