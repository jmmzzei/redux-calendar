import React from 'react'
import {TodoItemStyled} from './TodoItemStyled'
import {connect} from 'react-redux'
import {removeActivityAC} from '../actions/removeActivityAC'

const TodoItem = ({dispatch, children, index, month}) => {

  const removeTodo = () => {
    dispatch(removeActivityAC(index, month))
  }

  return (
    <TodoItemStyled>
      <button onClick={removeTodo}>x</button>
      {children}
    </TodoItemStyled>
  )

}


export default connect()(TodoItem)
