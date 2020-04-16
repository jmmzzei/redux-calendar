import React from 'react'
import {MonthItemStyled} from '../components/MonthItemStyled'
import {Link} from 'react-router-dom'

export const MonthItem = ({month}) => {
  return (
    <MonthItemStyled>
      <div>
        {month}
        <Link
          to={`/${month}`}>
          <button>+</button>
        </Link>
      </div>
    </MonthItemStyled >
  )
}

