import pList01 from "../img/playlist01.png"
import pList02 from "../img/playlist02.png"
import pList03 from "../img/playlist03.png"
import sprite from "../img/icon/sprite.svg"
import "../components/SideBar.css"
export function Sidebar() {
    return(
        <div className="main__sidebar sidebar">
              <div className="sidebar__personal">
                <p className="sidebar__personal-name">Sergey.Ivanov</p>
                <div className="sidebar__icon">
                  <svg alt="logout">
                    <use xlinkHref="img/icon/sprite.svg#logout"></use>
                    <use href={`${sprite}#icon-logout`} />
                  </svg>
                </div>
              </div>
              <div className="sidebar__block">
                <div className="sidebar__list">
                  <div className="sidebar__item">
                    <a className="sidebar__link" href="#">
                      <img
                        className="sidebar__img"
                        src={pList01}
                        alt="day's playlist"
                      />
                    </a>
                  </div>
                  <div className="sidebar__item">
                    <a className="sidebar__link" href="#">
                      <img
                        className="sidebar__img"
                        src={pList02}
                        alt="day's playlist"
                      />
                    </a>
                  </div>
                  <div className="sidebar__item">
                    <a className="sidebar__link" href="#">
                      <img
                        className="sidebar__img"
                        src={pList03}
                        alt="day's playlist"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
    )
    
}