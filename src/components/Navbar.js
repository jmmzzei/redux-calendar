import React from "react"
import { NavbarStyled } from "./NavbarStyled"
import { HomeBtn } from "./HomeBtn"

export const Navbar = ({ month }) => (
  <NavbarStyled>
    <HomeBtn />
    <p>{month || "2020 Calendar"}</p>
  </NavbarStyled>
)
