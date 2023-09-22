import React, { useState } from 'react';
import logo from "./logo.png";
import "./NavMenu.css"
import styled from 'styled-components';



const StyledMainNav=styled.nav`

width: 244px;
background-color: #181818;
padding: 20px 0 20px 36px;
`
const StyledNavLogo=styled.div`
width: 113.33px;
height: 43px;
padding: 13px 0 13px 0;
background-color: transparent;
margin-bottom: 20px;
`
const StyledLogoImg=styled.img`
width: 113.33px;
height: 17px;
color: #181818;
`
const StyledNavBurger=styled.div`
width: 20px;
height: 36px;
padding: 13px 0;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: vertical;
-webkit-box-direction: normal;
-ms-flex-direction: column;
flex-direction: column;
-webkit-box-pack: justify;
-ms-flex-pack: justify;
justify-content: space-between;
`
const StyledBurgerLine=styled.span`
display: inline-block;
width: 100%;
height: 1px;
background-color: #d3d3d3;
`
const StyledNavMenu=styled.div`

display: block;
visibility: visible;
`
const StyledMenuList=styled.ul`

padding: 18px 0 10px 0;
`
const StyledMenuItem=styled.li`
padding: 5px 0;
margin-bottom: 16px;
`
const StyledMenuLink=styled.a`
color: #ffffff;
font-weight: 400;
font-size: 16px;
line-height: 24px;
`

export function Nav() {
  
  const [menuVisible, setVisible] = useState(false);
  const menuClick =()=>{
  setVisible(!menuVisible);
  console.log(menuVisible) 
  }
  
   return(
    <StyledMainNav>
              <StyledNavLogo>
                <StyledLogoImg src={logo} alt="logo" />                
              </StyledNavLogo>
              <StyledNavBurger onClick={menuClick}>
                <StyledBurgerLine></StyledBurgerLine>
                <StyledBurgerLine></StyledBurgerLine>
                <StyledBurgerLine></StyledBurgerLine>
              </StyledNavBurger>
              
              {menuVisible ?( 
              <StyledNavMenu>
              <StyledMenuList >
                  <StyledMenuItem >
                    <StyledMenuLink href="#" >
                      Главное
                    </StyledMenuLink>
                  </StyledMenuItem>
                  <StyledMenuItem >
                    <StyledMenuLink href="#" >
                      Мой плейлист
                    </StyledMenuLink>
                  </StyledMenuItem>
                  <StyledMenuItem >
                    <StyledMenuLink href="./signin.html" >
                      Войти
                    </StyledMenuLink>
                  </StyledMenuItem>
                </StyledMenuList>
                </StyledNavMenu>
                ) : null}
                
              
            </StyledMainNav>
   ) 
}