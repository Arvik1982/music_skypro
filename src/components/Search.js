import sprite from "../img/icon/sprite.svg"
import "../components/Search.css"
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton from "react-loading-skeleton";
import React, { useState } from "react";
export function Search(){

  // const [contentVisible, setContentVisible] = useState(false);
  // setTimeout(() => {
  //   setContentVisible(true);
  // }, 4000);

    return(
      
    <div className="centerblock__search search">
      <svg className="search__svg">
    <use href= {`${sprite}#icon-search`}/>
    </svg> 
  
    
  <input
    className="search__text"
    type="search"
    placeholder="Поиск"
    name="search"
  />
  
  </div>
    )
}