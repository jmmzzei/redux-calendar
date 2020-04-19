import React from "react";
import { NavbarStyled } from "./NavbarStyled";

export const Navbar = ({ month }) => {
    return <NavbarStyled>{month || '2020 Calendar'}</NavbarStyled>;
};