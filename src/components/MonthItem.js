import React from 'react'
import {MonthItemStyled} from '../components/MonthItemStyled'
import {Link} from 'react-router-dom'

export const MonthItem = (props) => {
  return (
    <MonthItemStyled>
      <div>
        {props.children}
        <Link to="/day">
          <button>+</button>
        </Link>
      </div>
      {props.todo}
    </MonthItemStyled>
  )
}

