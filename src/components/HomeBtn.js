import React from "react"
import { HomeBtnStyled } from "./HomeBtnStyled"
import { Link } from "react-router-dom"

export const HomeBtn = () => {
  return (
    <Link to={"/"}>
      <HomeBtnStyled>H</HomeBtnStyled>
    </Link>
  )
}
