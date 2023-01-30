import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faUser, faMessage } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';

function Contact() {
  const navigate = useNavigate();
  const [text, setText] = useState()
  // const ref = useRef(null);
  const handleChange = (e) => {
    // ref.current.focus();
    let storage = e.target.value
    setText(storage)
  }
  const onSubmit = () => {
    navigate("/contact");
  }
  return (
    <div className='contact'>
      <h2>
        <span className='anime'>C</span><span>o</span><span>n</span><span>t</span><span>a</span><span>c</span><span>t</span><span>M</span><span>e</span>
      </h2>
      <form action="https://formspree.io/f/xwkynywk" method="post">
        <div className="name-wrapper">
          <div className='ad-text'>
            <input
              onChange={handleChange}
              className={ text ? "has-value" : ""}
              id="name"
              type="text"
              name='name'
            />
            <span
              className='icon'
            >
              <FontAwesomeIcon icon={faUser} />
            </span>
            <label htmlFor='name'>Name</label>
            <div className='underline' />
          </div>
          <div className='ad-text'>
            <input
              onChange={handleChange}
              className={ text ? "has-value" : ""}
              id="email"
              type="text"
              name='email'
              required
            />
            <span
              className='icon'
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
            <label htmlFor='email'>Email</label>
            <div className='underline' />
          </div>
        </div>
        <div className='ad-text'>
          <textarea
            name='text'
            onChange={handleChange}
            className={ text ? "has-value" : ""}
            id="message"
            rows="5"
            required
          />
          <span
            className='icon'
          >
            <FontAwesomeIcon icon={faMessage} />
          </span>
          <label htmlFor='message'>Message</label>
          <div className='underline' />
        </div>
        <input type="submit" value="Submit" className='submit btn btn-border-4' onClick={onSubmit} />
      </form>
    </div>
  )
}

export default Contact
