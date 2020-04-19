import React from 'react'
import { DayItemStyled } from './DayItemStyled'
import { addActivityAC } from '../actions/addActivityAC'
import { connect } from 'react-redux'
import { Form } from './Form'
import { useInputChange } from '../hooks/useInputChange'

const DayItem = ({ dispatch, activities, day, month, state }) => {
    let [input, handleInputChange, cleanInput] = useInputChange('')

    const isEmpty = (input) => input.trim()

    const addTodo = (e) => {
        e.preventDefault()
        console.log(input)
        isEmpty && dispatch(addActivityAC(month, day, input))
        cleanInput()
    }

    return (
        <DayItemStyled>
            <Form input={input} onChange={handleInputChange} onClick={addTodo} />
            <h3>{day}</h3>
            {activities.map(e => e[day])}
        </DayItemStyled>
    )
}

export default connect()(DayItem)
