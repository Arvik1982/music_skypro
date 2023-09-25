import { useState } from "react";
import "../Filter/FilterBlock.css"
import React from "react";



export function Filter() {
  const [activeFilter, setActiveFilter] = useState('');
    return(
    <div className="centerblock__filter filter">
    <div className="filter__title">Искать по:</div>

<div className="filter_block_performer filter_performer">
<div className="filter_performer">
<button onClick={()=>{activeFilter==='author'?setActiveFilter('') :setActiveFilter('author')
console.log(`click`)}}   className="filter__button button-year _btn-text filter_year">Исполнителю</button>
</div>
<div>
<ul className={activeFilter === "author" ? 'display_yes': 'display_no'} > 
       <li><a className="link" href="#">исполнитель1</a></li>
       <li><a className="link" href="#">исполнитель2исполнитель2</a></li>
       <li><a className="link"href="#">исполнитель3</a></li>
       <li><a className="link"href="#">исполнитель4</a></li>
       <li><a className="link"href="#">исполнитель5</a></li>
       <li><a className="link"href="#">исполнитель6</a></li>
       <li><a className="link"href="#">исполнитель7</a></li>
       <li><a className="link"href="#">исполнитель5</a></li>
       <li><a className="link"href="#">исполнитель6</a></li>
       <li><a className="link"href="#">исполнитель7</a></li> 
     </ul>
    </div>
</div>


<div className="filter_block_year">
<div className="filter_performer">
    <button onClick={()=>{activeFilter==='year'?setActiveFilter('') :setActiveFilter('year')
console.log(`click-y`)}} className="filter__button button-year _btn-text filter_year">году выпуска</button>
 </div> 
 <div> 
    <ul className={activeFilter==='year'? 'display_yes':'display_no'} >
    <li><a className="link"href="#">Год Выпуска1</a></li>
    <li><a className="link"href="#">Год Выпуска2</a></li>
    <li><a className="link"href="#">Год Выпуска3</a></li>
    <li><a className="link"href="#">Год Выпуска4</a></li>
    <li><a className="link"href="#">Год Выпуска5</a></li>
    </ul>
    </div> 
    
</div>
<div className="filter_block_style">
  <div className="filter_style">
    <button onClick={()=>{activeFilter==='style'?setActiveFilter('') :setActiveFilter('style')
console.log(`click`)}} className="filter__button button-genre _btn-text filter_style">жанру</button>
  </div> 
  <div>
    <ul className={activeFilter==='style' ? 'display_yes':'display_no'} >
    <li><a className="link"href="#">Жанр муз1</a></li>
    <li><a className="link"href="#">Жанр муз2</a></li>
    <li><a className="link"href="#">Жанр муз3</a></li>
    <li><a className="link"href="#">Жанр муз4</a></li>
    </ul>
    </div> 
    </div>
  </div>)
    
}