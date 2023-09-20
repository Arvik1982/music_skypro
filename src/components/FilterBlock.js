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
      <li>исполнитель1</li>
      <li>исполнитель2</li>
      <li>исполнитель3</li>
      <li>исполнитель4</li>
      <li>исполнитель1</li>
      <li>исполнитель2</li>
      <li>исполнитель3</li>
      <li>исполнитель4</li>
      <li>исполнитель1</li>
      <li>исполнитель2</li>
      <li>исполнитель3</li>
      <li>исполнитель4</li>
    </ul>
    </div>
</div>


<div className="filter_block_year">
<div className="filter_performer">
    <button onClick={filterYearClick} className="filter__button button-year _btn-text filter_year">году выпуска</button>
 </div> 
 <div> 
    <ul className={filterYearVisible? 'display_yes':'display_no'} >
      <li>Год Выпуска1</li>
      <li>Год Выпуска2</li>
      <li>Год Выпуска3</li>
      <li>Год Выпуска4</li>
    </ul>
    </div> 
    
</div>
<div className="filter_block_style">
  <div className="filter_style">
    <button onClick={filterStyleClick} className="filter__button button-genre _btn-text filter_style">жанру</button>
  </div> 
  <div>
    <ul className={filterStyleVisible? 'display_yes':'display_no'} >
      <li>Жанр1</li>
      <li>Жанр2</li>
      <li>Жанр3</li>
      <li>Жанр4</li>
    </ul>
    </div> 
    </div>
  </div>)
    
}