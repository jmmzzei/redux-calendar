import React from "react"
import { MonthItemStyled } from "../components/MonthItemStyled"
import { Link } from "react-router-dom"

export const MonthItem = ({ month, id }) => {
  return (
    <Link to={`/${month}`}>
      <MonthItemStyled id={id}>
        <p>{month}</p>
      </MonthItemStyled>
    </Link>
  )
}
