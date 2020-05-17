import React from "react"
import { Link } from "react-router-dom"

export const NPBtn = ({ match, next }) => {
  let month = match && match.params.month
  let months = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre",
  ]

  const goto = next => {
    let number = months.indexOf(month)
    return next
      ? "/" + months[++number === 12 ? 0 : number]
      : "/" + months[--number === -1 ? 11 : number]
  }

  return (
    <Link to={goto(next)}>
      <button>{next ? ">" : "<"}</button>
    </Link>
  )
}
