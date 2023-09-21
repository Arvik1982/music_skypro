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

<div className="filter_block_performer filter_performer">
<div className="filter_performer">
   <button onClick={filterPerformerClick} className="filter__button button-author _btn-text filter_performer">Исполнителю</button>
</div>
<div>
<ul className={filterPerformerVisible? 'display_yes':'display_no'} > 
      <li><a href="#">исполнитель1</a></li>
      <li><a href="#">исполнитель2</a></li>
      <li><a href="#">исполнитель3</a></li>
      <li><a href="#">исполнитель4</a></li>
      <li><a href="#">исполнитель5</a></li>
      <li><a href="#">исполнитель6</a></li>
      <li><a href="#">исполнитель7</a></li>
      <li><a href="#">исполнитель5</a></li>
      <li><a href="#">исполнитель6</a></li>
      <li><a href="#">исполнитель7</a></li>
    </ul>
    </div>
</div>


<div className="filter_block_year">
<div className="filter_performer">
    <button onClick={filterYearClick} className="filter__button button-year _btn-text filter_year">году выпуска</button>
 </div> 
 <div> 
    <ul className={filterYearVisible? 'display_yes':'display_no'} >
    <li><a href="#">Год Выпуска1</a></li>
    <li><a href="#">Год Выпуска2</a></li>
    <li><a href="#">Год Выпуска3</a></li>
    <li><a href="#">Год Выпуска4</a></li>
    <li><a href="#">Год Выпуска5</a></li>
    </ul>
    </div> 
    
</div>
<div className="filter_block_style">
  <div className="filter_style">
    <button onClick={filterStyleClick} className="filter__button button-genre _btn-text filter_style">жанру</button>
  </div> 
  <div>
    <ul className={filterStyleVisible? 'display_yes':'display_no'} >
    <li><a href="#">Жанр муз1</a></li>
    <li><a href="#">Жанр муз2</a></li>
    <li><a href="#">Жанр муз3</a></li>
    <li><a href="#">Жанр муз4</a></li>
    </ul>
    </div> 
    </div>
  </div>)
    
}