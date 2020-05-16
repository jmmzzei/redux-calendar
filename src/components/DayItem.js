import React from "react"
import { DayItemStyled } from "./DayItemStyled"
import { addActivityAC } from "../actions/addActivityAC"
import { connect } from "react-redux"
import { Form } from "./Form"
import { useInputChange } from "../hooks/useInputChange"
import TodoItem from "./TodoItem"

const DayItem = ({ dispatch, activities, day, month }) => {
  let [input, handleInputChange, cleanInput] = useInputChange("")

  const isEmpty = input => input.trim()

  const addTodo = e => {
    e.preventDefault()
    isEmpty(input) && dispatch(addActivityAC(month, day, input))
    cleanInput()
  }

  return (
    <DayItemStyled id={"id" + day}>
      <p>{day}</p>
      <Form
        day={day}
        input={input}
        onChange={handleInputChange}
        onClick={addTodo}
      />
      <ul>
        {activities.map(
          e =>
            day === e.day && (
              <TodoItem key={e.index} month={month} index={e.index}>
                {e.todo}
              </TodoItem>
            ),
        )}
      </ul>
    </DayItemStyled>
  )
}

export default connect()(DayItem)
