import { useState } from "react";
import "../components/FilterBlock.css"
export function Filter() {
  
  const [filterPerformerVisible, setVisible] = useState(false);

  const filterPerformerClick =()=>{
  setVisible(!filterPerformerVisible);
  console.log(filterPerformerVisible)
  setYearVisible(false)
  setStyleVisible(false)
}
  

  const [filterYearVisible, setYearVisible] = useState(false);

  const filterYearClick =()=>{
  setYearVisible(!filterYearVisible);
  console.log(filterYearVisible)
setStyleVisible(false)
setVisible(false)
}
  
  const [filterStyleVisible, setStyleVisible] = useState(false);
  const filterStyleClick =()=>{
  setStyleVisible(!filterStyleVisible);
  console.log(filterStyleVisible)
  setVisible(false)
  setYearVisible(false)
}
  
    return(
    <div className="centerblock__filter filter">
    <div className="filter__title">Искать по:</div>

<div className="filter_performer">
    <div onClick={filterPerformerClick } className="filter__button button-author _btn-text">
      исполнителю
    </div>
    <ul className={`${filterPerformerVisible ? "display_yes" : "display_no"}`}>
        <li>Исполнитель1</li>
        <li>Исполнитель2</li>
        <li>Исполнитель3</li>
    </ul>
  </div>
  
<div className="filter_year">
    <div onClick={filterYearClick} className="filter__button button-year _btn-text">
      году выпуска
    </div>
<ul className={`${filterYearVisible ? "display_yes" : "display_no"}`}>
<li>Год Выпуска1</li>
<li>Год Выпуска2</li>
<li>Год Выпуска3</li>
</ul>
    
</div>
<div className="filter_style">
    <div onClick={filterStyleClick} className="filter__button button-genre _btn-text">
      жанру
    </div>
<ul className={`${filterStyleVisible ? "display_yes" : "display_no"}`}>
    <li >style1</li>
    <li >style2</li>
    <li >style3</li>
      </ul>
    </div>
  </div>)
    
}