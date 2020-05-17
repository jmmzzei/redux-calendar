import React from "react"
import { NavbarStyled } from "./NavbarStyled"
import { HomeBtn } from "./HomeBtn"

export const Navbar = ({ month }) => (
  <NavbarStyled>
    <HomeBtn />
    <div>
      <span>{month || "2020 Calendar"}</span>
    </div>
  </NavbarStyled>
)
