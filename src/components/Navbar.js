import React from "react"
import { NavbarStyled } from "./NavbarStyled"
import { HomeBtn } from "./HomeBtn"
import { NPBtn } from "./NPBtn"

export const Navbar = ({ month, match }) => (
  <NavbarStyled>
    <HomeBtn />
    {match && <NPBtn match={match} />}
    <div>
      <span>{month || "2020 Calendar"}</span>
    </div>
    {match && <NPBtn match={match} next />}
  </NavbarStyled>
)
