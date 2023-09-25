import pList01 from "../img/playlist01.png"
import pList02 from "../img/playlist02.png"
import pList03 from "../img/playlist03.png"
import sprite from "../img/icon/sprite.svg"
import "../components/SideBar.css"
import React, { useState } from 'react';
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styled from "styled-components"

const Styled_sidebarMain=styled.div`
max-width: 418px;
    padding: 20px 90px 20px 78px;
`

const Styled_sidebarPersonal=styled.div`
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: horizontal;
-webkit-box-direction: normal;
-ms-flex-direction: row;
flex-direction: row;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
-webkit-box-pack: end;
-ms-flex-pack: end;
justify-content: flex-end;
padding: 12px 0 15px 0;
`
const Styled_sidebarPersonalName=styled.p`
font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #ffffff;
    margin-right: 16px;
`
const Styled_sidebarIcon=styled.div`
width: 43px;
    height: 43px;
    background-color: #313131;
    border-radius: 50%;
    cursor: pointer;
`
const Styled_sidebarBlock=styled.div`
    height: 100%;
    padding: 240px 0 0 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
`
const Styled_sidebarList=styled.div`
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: vertical;
-webkit-box-direction: normal;
-ms-flex-direction: column;
flex-direction: column;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
`
const Styled_sidebarItem=styled.div`
width: 250px;
height: 150px;
&:not(:last-child) {
  margin-bottom: 30px;
}

`
const Styled_sidebarLink=styled.a`
width: 100%;
height: 100%;`

const Styled_sidebarImg=styled.img`
width: 100%;
height: auto;
`
//skeleton style 


const Styled_skeletonSideBar=styled(Skeleton)`
margin-left: 15px;
    width: 300px;
    height: 30px;
    background-color: rgb(50, 48, 48)
`
const Styled_skeletonSideBarImg=styled(Skeleton)`
margin-bottom: 10px;
width: 250px;
height: 150px;
background-color: rgb(50, 48, 48)
`



export function Sidebar() {

  const [contentVisible, setContentVisible] = useState(false);
  setTimeout(()=>{
       setContentVisible(true)
    },4000)

    return(
        <Styled_sidebarMain className="sidebar">
              <Styled_sidebarPersonal>
                <Styled_sidebarPersonalName>{contentVisible ? <span> Sergey.Ivanov </span>:<SkeletonTheme baseColor ="#202020" highlightColor="#444"><Styled_skeletonSideBar /></SkeletonTheme>}</Styled_sidebarPersonalName>
                <Styled_sidebarIcon>
                <svg alt="logout">
                  <use href={`${sprite}#icon-logout`} />
                  </svg>
                  
                </Styled_sidebarIcon>
              </Styled_sidebarPersonal>
              <Styled_sidebarBlock>
                <Styled_sidebarList>
                  <Styled_sidebarItem>
                    <Styled_sidebarLink href="#">
                    {contentVisible ? <Styled_sidebarImg
                        src={pList01}
                        alt="day's playlist"
                      /> :<SkeletonTheme baseColor ="#202020" highlightColor="#444"><Styled_skeletonSideBarImg /></SkeletonTheme>}
                      
                    </Styled_sidebarLink>
                  </Styled_sidebarItem>
                  <Styled_sidebarItem>
                    <Styled_sidebarLink href="#">
                    {contentVisible ? <Styled_sidebarImg
                        src={pList02}
                        alt="day's playlist"
                      /> :<SkeletonTheme baseColor ="#202020" highlightColor="#444"><Styled_skeletonSideBarImg /></SkeletonTheme>}
                    </Styled_sidebarLink>
                  </Styled_sidebarItem>
                  <Styled_sidebarItem>
                    <Styled_sidebarLink href="#">
                    {contentVisible ? <Styled_sidebarImg
                        src={pList03}
                        alt="day's playlist"
                      /> :<SkeletonTheme baseColor ="#202020" highlightColor="#444"><Styled_skeletonSideBarImg/></SkeletonTheme>}
                    </Styled_sidebarLink>
                  </Styled_sidebarItem>
                </Styled_sidebarList>
              </Styled_sidebarBlock>
              
            </Styled_sidebarMain>
    )
    
}