import { useEffect, useState } from "react";
// import "../Filter/FilterBlock.css"
import React from "react";
import * as S from "./FilterStyles.js";
import { setTracksRedux,setTrackRedux, setMyTracksRedux,likeTrackRedux,setFilterAuthor, setCategoryResults,setSortYearFavorites } from "../../store/reducers/playerSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { delMyTracks, getMyTracks, getTracks, refreshToken } from "../../api";
import { useParams } from "react-router-dom";

export function Filter({tracks, setTracks}) {

const searchBaseRedux = useSelector(state=>state.track.searchBase)
const myTracks = useSelector(state=>state.track.myTracks)
const categoryListRedux = useSelector(state=>state.track.categoryList)

const [genre, setGenre]=useState([])
const [filterTracks, setFilterTracks]=useState([])
const [filterMyTracks, setFilterMyTracks]=useState([])
const param = useParams()
let page = param.id


useEffect(()=>{
getTracks().then((data)=>{setFilterTracks(data)})
getMyTracks().then((data)=>{setFilterMyTracks(data)})
.catch((error) => {refreshToken().then(()=>{getMyTracks().then((data) => {setFilterMyTracks(data)})})})  
},[])

//filter AUTHOR

function callFilterFunction(track){
  if (page === '1'||page === '2'||page === '3'){authorFilterCategory(track)}
  else if (page =='favorites'){authorFilterMy(track)}
  else  {authorFilterAll(track)};
}

function authorFilterAll(track){
  setTracks(filterTracks.filter((el)=>el.author===track.author))
};
function authorFilterMy(track){

  let resultSearchAll= filterMyTracks.filter((el)=>el.author===track.author)
 
  dispatch(setMyTracksRedux(resultSearchAll))

};
function authorFilterCategory(track){

  let resultSearch= searchBaseRedux.filter((el)=>el.author===track.author)
  dispatch(setCategoryResults(resultSearch))
};

//filter YEAR
function sortYearGrow(){

  if (page === '1'||page === '2'||page === '3'){sortYearGrowCategory()}
  else if (page =='favorites'){sortYearGrowMy()}
  else  {sortYearGrowAll()};

}


function sortYearGrowAll(){

filterTracks.sort (function grow(a,b){

return new Date(a.release_date)-new Date(b.release_date)
})

setTracks(filterTracks);

}

function sortYearGrowMy(){

   
  dispatch(setSortYearFavorites(filterMyTracks))
  
  }

  function sortYearGrowCategory(){
    // filterTracks.sort (function grow(a,b){
    
    // return new Date(a.release_date)-new Date(b.release_date)


    // })
    dispatch(setSortYearFavorites(categoryListRedux))
    // console.log(categoryListRedux)
    }


function sortYearDecrease(){
  

  filterTracks.sort (function grow(a,b){

    return new Date(b.release_date)-new Date(a.release_date)
    })
   
}

function genreChoose(genre){}

  const dispatch=useDispatch();


  const [activeFilter, setActiveFilter] = useState("");

  return (
    <S.centralBlockFilter className="filter">
      <S.centralBlockFilterTitle>Искать по:</S.centralBlockFilterTitle>

      <S.filterBlockPerformer>
        <div className="filter_performer">
          <S.centralBlockFilterButton
            onClick={() => {
              activeFilter === "author"
                ? setActiveFilter("")
                : setActiveFilter("author");
             
            }}
            className="_btn-text"
          >
            Исполнителю
          </S.centralBlockFilterButton>
        </div>
        <div>
          {activeFilter === "author" ? (
            <S.displayYes>
              {filterTracks.map((track,index) => {
          
          return (
              <li>
                <S.filterBlockLink key={index} onClick={()=>{dispatch(setFilterAuthor({track}));callFilterFunction(track)}} href="#">{track.author}</S.filterBlockLink>
              </li>
          );
          })}

              {/* <li>
                <S.filterBlockLink href="#">исполнитель1</S.filterBlockLink>
              </li>
              <li>
                <S.filterBlockLink href="#">
                  исполнитель2исполнитель2
                </S.filterBlockLink>
              </li>
              <li>
                <S.filterBlockLink href="#">исполнитель3</S.filterBlockLink>
              </li>
              <li>
                <S.filterBlockLink href="#">исполнитель4</S.filterBlockLink>
              </li>
              <li>
                <S.filterBlockLink href="#">исполнитель5</S.filterBlockLink>
              </li>
              <li>
                <S.filterBlockLink href="#">исполнитель6</S.filterBlockLink>
              </li>
              <li>
                <S.filterBlockLink href="#">исполнитель7</S.filterBlockLink>
              </li>
              <li>
                <S.filterBlockLink href="#">исполнитель5</S.filterBlockLink>
              </li>
              <li>
                <S.filterBlockLink href="#">исполнитель6</S.filterBlockLink>
              </li>
              <li>
                <S.filterBlockLink href="#">исполнитель7</S.filterBlockLink>
              </li> */}
            </S.displayYes>
          ) : null}
        </div>
      </S.filterBlockPerformer>

      <S.filterBlockYear>
        <div className="filter_performer">
          <S.centralBlockFilterButton
            onClick={() => {
              activeFilter === "year"
                ? setActiveFilter("")
                : setActiveFilter("year");
              
            }}
            className="_btn-text"
          >
            году выпуска
          </S.centralBlockFilterButton>
        </div>
        <div>
          {activeFilter === "year" ? (
            <S.displayYes>
              <li>
                <S.filterBlockLink onClick={()=>{console.log(filterMyTracks);console.log(filterTracks);console.log(categoryListRedux);
                  sortYearGrow()}} href="#">Год увеличение</S.filterBlockLink>
              </li>
              <li>
                <S.filterBlockLink onClick={()=>{sortYearDecrease()}} href="#">Год уменьшение</S.filterBlockLink>
              </li>
              
            </S.displayYes>
          ) : null}
        </div>
      </S.filterBlockYear>
      <S.filterBlockStyle>
        <div className="filter_style">
          <S.centralBlockFilterButton
            onClick={() => {
              activeFilter === "style"
                ? setActiveFilter("")
                : setActiveFilter("style");
              
            }}
            className="_btn-text"
          >
            жанру
          </S.centralBlockFilterButton>
        </div>

        {/* <div className="filter_style">
    <S.centralBlockFilterButton onClick={()=>{activeFilter==='style'?setActiveFilter('') :setActiveFilter('style')
console.log(`click`)}} className="_btn-text">жанру</S.centralBlockFilterButton>
  </div>  */}

        <div>
          <S.styleFilterUl isactive ={ activeFilter === "style"? "style": null }>


            <li>
              <S.filterBlockLink   onClick={()=>{setGenre('Cl')}} href="#">Классика</S.filterBlockLink>
            </li>
            <li>
              <S.filterBlockLink onClick={()=>{setGenre('In')}} href="#">Инди</S.filterBlockLink>
            </li>
            <li>
              <S.filterBlockLink onClick={()=>{setGenre('Rk')}} href="#">Рок</S.filterBlockLink>
            </li>
            
          </S.styleFilterUl>

          {/* <ul className={activeFilter === 'style' ? 'display_yes':'display_no'} >
    <li><a className="link"href="#">Жанр муз1</a></li>
    <li><a className="link"href="#">Жанр муз2</a></li>
    <li><a className="link"href="#">Жанр муз3</a></li>
    <li><a className="link"href="#">Жанр муз4</a></li>
    </ul> */}
        </div>
      </S.filterBlockStyle>
    </S.centralBlockFilter>
  );
}
