import React, { useState } from 'react'
import Input from './Input'

function Contact() {
  const [value, setValue] = useState("")
const handleChange = (e) => {
  setValue(e.target.value)
}
  return (
    <div>
      <p>
        <span>C</span><span>o</span><span>n</span><span>t</span><span>a</span><span>c</span><span>t</span><span>M</span><span>e</span>
      </p>
      <form>
<Input type="text" id="name" name="name" className={value? "active-input" : "input"} onChange={handleChange} label="Name" />
<Input type="text" id="email" name="email" className={value? "active-input" : "input"} onChange={handleChange} label="Email" />
<Input type="textarea" id="message" name="message" className={value? "active-input" : "input"} onChange={handleChange} label="Message" />
<input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default Contact
