import React from 'react'

export const Form = ({input, onChange, onClick}) => {

  return (
    <form>
      <input value={input} onChange={onChange} />
      <button onClick={onClick}>+</button>
    </form>
  )
}
