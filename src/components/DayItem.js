import React, {useState} from 'react'
import {DayItemStyled} from './DayItemStyled'
import {addActivityAC} from '../actions/addActivityAC'
import {connect} from 'react-redux'

const DayItem = ({dispatch, activities, day, month, state}) => {
  let [input, setInput] = useState('')

  const addTodo = (e) => {
    e.preventDefault()
    setInput('')
    dispatch(addActivityAC(month, day, input))
  }

  const handleInput = (e) => {
    setInput(e.currentTarget.value)
  }

  return (
    <DayItemStyled>
      <form>
        <input value={input} onChange={handleInput} />
        <button onClick={addTodo}>+</button>
      </form>
      <h3>{day}</h3>
      {activities.map(e => e[day])}
    </DayItemStyled>
  )
}

export default connect()(DayItem)
