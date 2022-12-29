import React from 'react'

function Input({ type, id, name, onChange, label }) {
  return (
    <>
    <label htmlFor={id}>{label}
      <input type={type} id={id} name={name} onChange={onChange} />
      </label>
    </>
  )
}

export default Input
