import React from 'react'
import {FormStyled} from './FormStyled'

export const Form = ({day, input, onChange, onClick}) => {

  return (
    <FormStyled>
      <h4>{day}</h4>
      <input value={input} onChange={onChange} />
      <button onClick={onClick}>+</button>
    </FormStyled>
  )
}
