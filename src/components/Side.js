import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


function Side() {
  return (
    <div className='side-menu'>
      <ul>
        <li><a href="https://linkedin.com/in/rojin-taghadosi"> <span
              className='icon-contact'
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </span></a></li>
        <li><a href="https://github.com/rojintag"> <span
              className='icon-contact'
            >
              <FontAwesomeIcon icon={faGithub} />
            </span></a></li>
        <li><a href="mailto: rojintg@gmail.com"> <span
              className='icon-contact'
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </span></a></li>
      </ul>
    </div>
  )
}

export default Side
