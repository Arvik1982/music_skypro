import sprite from "../img/icon/sprite.svg"
import "../components/Search.css"
export function Search(){
    return(
    <div className="centerblock__search search">
    <svg className="search__svg">
      <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
      <use href={`${sprite}#icon-search`} />
    </svg>
    <input
      className="search__text"
      type="search"
      placeholder="Поиск"
      name="search"
    />
  </div>)
}