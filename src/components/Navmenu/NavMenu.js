import React, { useState } from "react";
import logo from "./logo.png";
// import "./NavMenu.css"
import * as S from "./NavStyle.js";

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
              <S.MenuLink href="#">Главное</S.MenuLink>
            </S.MenuItem>
            <S.MenuItem>
              <S.MenuLink href="#">Мой плейлист</S.MenuLink>
            </S.MenuItem>
            <S.MenuItem>
              <S.MenuLink href="./signin.html">Войти</S.MenuLink>
            </S.MenuItem>
          </S.MenuList>
        </S.NavMenu>
      ) : null}
    </S.MainNav>
  );
}
