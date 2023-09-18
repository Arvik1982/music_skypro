import React, { useState } from 'react';
import logo from "../img/logo.png";
import "../components/NavMenu.css"

export function Nav() {
  
  const [menuVisible, setVisible] = useState(false);

  const menuClick =()=>{
  setVisible(!menuVisible);
  console.log(menuVisible) 
  }
  
   return(
    <nav className="main__nav nav">
              <div className="nav__logo logo">
                <img className="logo__image" src={logo} alt="logo" />                
              </div>
              <div onClick={menuClick} className="nav__burger burger">
                <span className="burger__line"></span>
                <span className="burger__line"></span>
                <span className="burger__line"></span>
              </div>
              <div className={`${menuVisible ? "display_yes" : "display_no"}`}>
                <ul className="menu__list">
                  <li className="menu__item">
                    <a href="#" className="menu__link">
                      Главное
                    </a>
                  </li>
                  <li className="menu__item">
                    <a href="#" className="menu__link">
                      Мой плейлист
                    </a>
                  </li>
                  <li className="menu__item">
                    <a href="./signin.html" className="menu__link">
                      Войти
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
   ) 
}