import { useEffect, useState } from "react";
// import "../Filter/FilterBlock.css"
import React from "react";
import * as S from "./FilterStyles.js";
import { setTracksRedux,setTrackRedux, setMyTracksRedux,likeTrackRedux,setFilterAuthor, setCategoryResults,setSortYearFavoritesGr,
  setSortYearFavoritesDcr,setSortYearMyTracksGr,setSortYearMyTracksDcr,setFilterState } from "../../store/reducers/playerSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { delMyTracks, getMyTracks, getTracks, refreshToken } from "../../api";
import { useParams } from "react-router-dom";

export function Filter({tracks, setTracks}) {

const[filterAuthorNumber, setFilterAuthorNumber]  =useState('')
const[filterSortNumber, setFilterSortNumber]  =useState('')
const[filterCategoryNumber, setFilterCategoryNumber]  =useState('')
const[filterType, setFilterType] = useState()
const searchBaseRedux = useSelector(state=>state.track.searchBase)
const myTracks = useSelector(state=>state.track.myTracks)
const categoryListRedux = useSelector(state=>state.track.categoryList)
const [genre, setGenre]=useState([])
const [filterTracks, setFilterTracks]=useState([])
const [filterMyTracks, setFilterMyTracks]=useState([])
const [unFilterTracks, setUnFilterTracks]=useState([])
const param = useParams()
let page = param.id
// console.log(unFilterTracks)

useEffect(()=>{

getTracks().then((data)=>{
  // console.log(data)
  let newNewArr=[]
  for (let index = 0; index < data.length; index++) {
  newNewArr.push(data[index].author)
  }
  let newNewNewArr = [...new Set(newNewArr)]
  console.log(newNewNewArr)

  
// let unData =data.filter((el, index)=>{return data.findIndexOf(el.name) === index}) 
// data.filter((item,index)=>{indexOf(item) !==index});
setUnFilterTracks(newNewNewArr)

setFilterTracks(data)})

getMyTracks().then((data)=>{setFilterMyTracks(data)})
.catch((error) => {refreshToken().then(()=>{getMyTracks().then((data) => {setFilterMyTracks(data)})})})  
},[])

//filter AUTHOR 

function callFilterFunction(track){
  dispatch(setFilterState());
  if (page === '1'||page === '2'||page === '3'){authorFilterCategory(track)}
  else if (page ==='favorites'){authorFilterMy(track)}
  else  {authorFilterAll(track)};
}

function authorFilterAll(track){

  setTracks(filterTracks.filter((el)=>el.author===track
  // .author
  ));
  setFilterAuthorNumber(filterTracks.filter((el)=>el.author===track
  // .author
  ).length);
console.log(filterTracks)
  dispatch(setTracksRedux(filterTracks))
};


function authorFilterMy(track){

  let resultSearchAll= filterMyTracks.filter((el)=>el.author===track
  // .author
  )
  setFilterAuthorNumber(filterMyTracks.filter((el)=>el.author===track
  // .author
  ).length)
  dispatch(setMyTracksRedux(resultSearchAll))

};
function authorFilterCategory(track){
  
  let resultSearch= searchBaseRedux.filter((el)=>el.author===track
  // .author
  )
  setFilterAuthorNumber(searchBaseRedux.filter((el)=>el.author===track
  // .author
  ).length)
  dispatch(setCategoryResults(resultSearch))
};

//sort YEAR DATA

//grow
function sortYearGrow(){

  if (page === '1'||page === '2'||page === '3'){sortYearGrowCategory()}
  else if (page ==='favorites'){sortYearGrowMy()}
  else  {sortYearGrowAll()};

}


function sortYearGrowAll(){
setFilterSortNumber(filterTracks.length)
let newArr =[...filterTracks]
newArr.sort (function grow(a,b){

return new Date(a.release_date)-new Date(b.release_date)
})
// console.log(filterTracks)
setTracks(newArr);

}

function sortYearGrowMy(){

  setFilterSortNumber(filterMyTracks.length)
  dispatch(setSortYearMyTracksGr(filterMyTracks))
  
  }

  function sortYearGrowCategory(){
    setFilterSortNumber(categoryListRedux.length)
    dispatch(setSortYearFavoritesGr(categoryListRedux))
   }

//decrease
function sortYearDecrease(){
  

  if (page === '1'||page === '2'||page === '3'){sortYearDecreaseCategory()}
  else if (page ==='favorites'){sortYearDecreaseMy()}
  else  {sortYearDecreaseAll()};
   
}

function sortYearDecreaseAll(){

setFilterSortNumber(filterTracks.length)

let newArr =[...filterTracks]

newArr.sort (function grow(a,b){

return new Date(b.release_date)-new Date(a.release_date)

})

setTracks(newArr)

}

function sortYearDecreaseMy(){

  setFilterSortNumber(filterMyTracks.length)
  dispatch(setSortYearMyTracksDcr(filterMyTracks))
  
  }

  function sortYearDecreaseCategory(){
    setFilterSortNumber(categoryListRedux.length)
    dispatch(setSortYearFavoritesDcr(categoryListRedux))
   }





//category Fiter

function genreChoose(){

  if (page === '1'||page === '2'||page === '3'){categoryTracksGenreFilter()}
  else if (page =='favorites'){myTracksGenreFilter()}
  else  {allTracksGenreFilter()};

}

  function allTracksGenreFilter(){
    if (genre===0){
    setTracks(filterTracks.filter((el) => el.genre==='Классическая музыка'))
     setFilterCategoryNumber(filterTracks.filter((el)=>el.genre==='Классическая музыка').length)
  }
    else if ( genre===1){
    setTracks(filterTracks.filter((el) => el.genre==='Электронная музыка'))
    setFilterCategoryNumber(filterTracks.filter((el)=>el.genre==='Электронная музыка').length)
  }
    else{
    setTracks(filterTracks.filter((el) => el.genre==='Рок музыка'))
    setFilterCategoryNumber(filterTracks.filter((el)=>el.genre==='Рок музыка').length)
  }
    }

function myTracksGenreFilter(){


  if (genre===0){
    let resultSearchAll=filterMyTracks.filter((el) => el.genre==='Классическая музыка')
    setFilterCategoryNumber(filterMyTracks.filter((el)=>el.genre==='Классическая музыка').length)
    dispatch(setMyTracksRedux(resultSearchAll))}
    else if ( genre===1){
      let resultSearchAll=filterMyTracks.filter((el) => el.genre==='Электронная музыка')
      setFilterCategoryNumber(filterMyTracks.filter((el)=>el.genre==='Электронная музыка').length)
    dispatch(setMyTracksRedux(resultSearchAll))}
    else{
      let resultSearchAll=filterMyTracks.filter((el) => el.genre==='Рок музыка')
      setFilterCategoryNumber(filterMyTracks.filter((el)=>el.genre==='Рок музыка').length)
      dispatch(setMyTracksRedux(resultSearchAll))}

}


function categoryTracksGenreFilter(){

  if (genre===0){
    let resultSearch= searchBaseRedux.filter((el) => el.genre==='Классическая музыка')
    setFilterCategoryNumber(searchBaseRedux.filter((el)=>el.genre==='Классическая музыка').length)
    dispatch(setCategoryResults(resultSearch))}
    else if ( genre===1){
    let resultSearch= searchBaseRedux.filter((el) => el.genre==='Электронная музыка')
    setFilterCategoryNumber(searchBaseRedux.filter((el)=>el.genre==='Электронная музыка').length)
    dispatch(setCategoryResults(resultSearch))}
    else{
    let resultSearch= searchBaseRedux.filter((el) => el.genre==='Рок музыка')
    setFilterCategoryNumber(searchBaseRedux.filter((el)=>el.genre==='Рок музыка').length)
    dispatch(setCategoryResults(resultSearch))}


}


  const dispatch=useDispatch();
  const [activeFilter, setActiveFilter] = useState("");
  

  return (
    <S.centralBlockFilter className="filter">
       
      <S.centralBlockFilterTitle>Искать по:</S.centralBlockFilterTitle>
      
      <S.filterBlockPerformer>
        
        <div style={{display: 'flex',flexDirection: 'row-reverse',}} className="filter_performer">
        
        
        <div
        style={filterType=== "author"&filterAuthorNumber!=0 ?{display:'block',position:'absolute', top:'-10px',right:'-10px'}:{display:'none'}}
        >
        
        
        <h2 style={{
        color: 'wite',
        backgroundColor:'#AD61FF',
        width:'25px',
        height:'25px',
        top:'231px',
        left:'512px',
        borderRadius:'25px',
        fontSize:'20px',
        fontWeight:'normal',
        textAlign:'center'
        
        
        
        }}>{filterAuthorNumber}</h2>
      </div>
          <S.centralBlockFilterButton
            onClick={() => {
              activeFilter === "author"
                ? setActiveFilter("")
                : setActiveFilter("author");setFilterType("author")
             
            }}
            className="_btn-text"
          >
            Исполнителю
          </S.centralBlockFilterButton>
          
        </div>
        
        <div>
          {activeFilter === "author" ? (
            <S.displayYes  
            
            // style={{overflowX:'auto',
            // overflowY:'hidden'}}
            
            >
              {
              
              
              // filterTracks
              
              unFilterTracks
              .map((track,index) => {
          
          return (
              
                <li >
                <S.filterBlockLink key={index} onClick={
                  
                  
                  ()=>{

                    
                    
                    
                    // dispatch(setFilterAuthor({track}))
                    ;callFilterFunction(track)
                  
                  
                  
                  }
                
                
                
                
                } href="#">{
                
               
                
                
                
                track
                // .author
                // unFilterTracks
                }</S.filterBlockLink>
                </li>
              
          );
          })}

              
            </S.displayYes>
          ) : null}
        </div>
      </S.filterBlockPerformer>

      <S.filterBlockYear>

      <div
        style={filterType=== "year"&filterSortNumber!=0 ?{display:'block',position:'absolute', top:'-10px',right:'-10px'}:{display:'none'}}
        >
        
        
        <h2 style={{
        color: 'wite',
        backgroundColor:'#AD61FF',
        width:'25px',
        height:'25px',
        top:'231px',
        left:'512px',
        borderRadius:'25px',
        fontSize:'20px',
        fontWeight:'normal',
        textAlign:'center'
        
        
        
        }}>{filterSortNumber}</h2>
      </div>

        <div className="filter_performer">
          <S.centralBlockFilterButton
            onClick={() => {
              activeFilter === "year"
                ? setActiveFilter("")
                : setActiveFilter("year");setFilterType("year")
              
            }}
            className="_btn-text"
          >
            году выпуска
          </S.centralBlockFilterButton>
        </div>
        <div>
          {activeFilter === "year" ? (
            <S.displayYesYar>
              <li >
                <S.filterBlockLink key={'year1'} onClick={()=>{sortYearGrow()}} href="#">Год увеличение</S.filterBlockLink>
              </li>
              <li >
                <S.filterBlockLink key={'year2'} onClick={()=>{sortYearDecrease()}} href="#">Год уменьшение</S.filterBlockLink>
              </li>
              
            </S.displayYesYar>
          ) : null}
        </div>
      </S.filterBlockYear>
      <S.filterBlockStyle>


      <div
        style={filterType=== "style"&filterCategoryNumber!=0 ?{display:'block',position:'absolute', top:'-10px',right:'-10px'}:{display:'none'}}
        >
        
        
        <h2 style={{
        color: 'wite',
        backgroundColor:'#AD61FF',
        width:'25px',
        height:'25px',
        top:'231px',
        left:'512px',
        borderRadius:'25px',
        fontSize:'20px',
        fontWeight:'normal',
        textAlign:'center'
        
        
        
        }}>{filterCategoryNumber}</h2>
      </div>


        <div className="filter_style">
          <S.centralBlockFilterButton
            onClick={() => {
              activeFilter === "style"
                ? setActiveFilter("")
                : setActiveFilter("style");setFilterType("style")
              
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


            <li style={{marginBottom:'10px'}} key={'cl'}>
              <S.filterBlockLink   onClick={()=>{setGenre(0);genreChoose()}} href="#">Классика</S.filterBlockLink>
            </li>
            <li style={{marginBottom:'10px'}} key={'in'}>
              <S.filterBlockLink onClick={()=>{setGenre(1);genreChoose()}} href="#">Инди</S.filterBlockLink>
            </li>
            <li style={{marginBottom:'10px'}} key={'rk'}>
              <S.filterBlockLink onClick={()=>{setGenre(2);genreChoose()}} href="#">Рок</S.filterBlockLink>
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
