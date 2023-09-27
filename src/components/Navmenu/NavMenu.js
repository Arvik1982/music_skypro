import React, { useState } from "react";
import logo from "./logo.png";
// import "./NavMenu.css"
import * as S from "./NavStyle.js";
import { Link } from "react-router-dom";

export function Nav() {
  const [menuVisible, setVisible] = useState(false);
  const menuClick = () => {
    setVisible(!menuVisible);
    console.log(menuVisible);
  };

  return (
    <S.MainNav>
      <S.NavLogo>
        <S.LogoImg src={logo} alt="logo" />
      </S.NavLogo>
      <S.NavBurger onClick={menuClick}>
        <S.BurgerLine></S.BurgerLine>
        <S.BurgerLine></S.BurgerLine>
        <S.BurgerLine></S.BurgerLine>
      </S.NavBurger>

      {menuVisible ? (
        <S.NavMenu>
          <S.MenuList>
            <S.MenuItem>
            {/* <Link to ="/login">Главное2</Link> */}
            <S.MenuLink to ="/">Главное</S.MenuLink>
              {/* <S.MenuLink href="#">Главное</S.MenuLink> */}
            </S.MenuItem>
            <S.MenuItem>
              <S.MenuLink to ="/favorites">Мой плейлист</S.MenuLink>
            </S.MenuItem>
            <S.MenuItem>
              <S.MenuLink to ="/login">Войти</S.MenuLink>
            </S.MenuItem>
          </S.MenuList>
        </S.NavMenu>
      ) : null}
    </S.MainNav>
  );
}
