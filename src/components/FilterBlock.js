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
    <select onClick={filterPerformerClick } className="filter__button button-author _btn-text filter_performer">
      <option>исполнителю</option>
      <option>исполнитель1</option>
      <option>исполнитель2</option>
      <option>исполнитель3</option>
      <option>исполнитель4</option>
    </select>
  
  </div>
  
<div className="filter_year">
    <select onClick={filterYearClick} className="filter__button button-year _btn-text filter_year">
    <option>году выпуска</option>
      <option>Год Выпуска1</option>
      <option>Год Выпуска2</option>
      <option>Год Выпуска3</option>
      <option>Год Выпуска4</option>
    </select>

    
</div>
<div className="filter_style">
    <select onClick={filterStyleClick} className="filter__button button-genre _btn-text filter_style">
    <option>жанру</option>
      <option>Жанр1</option>
      <option>Жанр2</option>
      <option>Жанр3</option>
      <option>Жанр4</option>
    </select>

    </div>
  </div>)
    
}