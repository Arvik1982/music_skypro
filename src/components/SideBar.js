import pList01 from "../img/playlist01.png"
import pList02 from "../img/playlist02.png"
import pList03 from "../img/playlist03.png"
import sprite from "../img/icon/sprite.svg"
import "../components/SideBar.css"
import React, { useState } from 'react';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


export function Sidebar() {

  const [contentVisible, setContentVisible] = useState(false);
  setTimeout(()=>{
       setContentVisible(true)
    },4000)

    return(
        <div className="main__sidebar sidebar">
              <div className="sidebar__personal">
                <p className="sidebar__personal-name">{contentVisible ? <span> Sergey.Ivanov </span>:<Skeleton className="skeleton_sidebar" />}</p>
                <div className="sidebar__icon">
                <svg alt="logout">
                  <use href={`${sprite}#icon-logout`} />
                  </svg>
                  
                </div>
              </div>
              <div className="sidebar__block">
                <div className="sidebar__list">
                  <div className="sidebar__item">
                    <a className="sidebar__link" href="#">
                    {contentVisible ? <img
                        className="sidebar__img"
                        src={pList01}
                        alt="day's playlist"
                      /> :<Skeleton className="skeleton_sidebar-img" />}
                      
                    </a>
                  </div>
                  <div className="sidebar__item">
                    <a className="sidebar__link" href="#">
                    {contentVisible ? <img
                        className="sidebar__img"
                        src={pList02}
                        alt="day's playlist"
                      /> :<Skeleton className="skeleton_sidebar-img" />}
                    </a>
                  </div>
                  <div className="sidebar__item">
                    <a className="sidebar__link" href="#">
                    {contentVisible ? <img
                        className="sidebar__img"
                        src={pList03}
                        alt="day's playlist"
                      /> :<Skeleton className="skeleton_sidebar-img" />}
                    </a>
                  </div>
                </div>
              </div>
              
            </div>
    )
    
}