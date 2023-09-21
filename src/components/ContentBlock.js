import sprite from "../img/icon/sprite.svg";
import "../components/ContentBlock.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import React, { useState } from "react";




export function Content(props) {
  const [contentVisible, setContentVisible] = useState(false);
  setTimeout(() => {
    setContentVisible(true);
  }, 4000);



  return (

    <div className="centerblock__content ">
      {/* <div className="skeleton">
        <h1 className={`${contentVisible ? "display_no" : "display_yes"}`}>
          <div>
            <h1>{props.name}</h1>
          </div>
        </h1>
      </div> */}
      {/* <div className={`${contentVisible ? "display_yes" : "display_no"}`}> */}
        <div className="content__title playlist-title">
          <div className="playlist-title__col col01">Трек</div>
          <div className="playlist-title__col col02">ИСПОЛНИТЕЛЬ</div>
          <div className="playlist-title__col col03">АЛЬБОМ</div>
          <div className="playlist-title__col col04">
            <svg className="playlist-title__svg" alt="time">
              <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
            </svg>
          </div>
        </div>
        <div className="content__playlist playlist">
          <div className="playlist__item">
            <div className="playlist__track track">
              <div className="track__title">
                <div className="track__title-image">
                {contentVisible ? <svg className="track__title-svg" alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                    <use href={`${sprite}#icon-note`} />
                  </svg> :  <SkeletonTheme baseColor ="#202020" highlightColor="#444">
                    <Skeleton  className="square" />
                    </SkeletonTheme>}
                </div>
                <div className="track__title-text">
                  <a className="track__title-link" href="http://">

                  {contentVisible ? <span>Guilt</span> : 
                  
                  <SkeletonTheme baseColor ="#202020" highlightColor="#444">
                    <Skeleton  className="skeleton_line" />
                  </SkeletonTheme> }
                   <span className="track__title-span"></span>
                    
                  </a>
                </div>
              </div>
              <div className="track__author">
                <a className="track__author-link" href="http://">
                {contentVisible ? <span>Nero</span> :  <SkeletonTheme baseColor ="#202020" highlightColor="#444"><Skeleton className="skeleton_line" /></SkeletonTheme>}
                  
                </a>
              </div>
              <div className="track__album">
                <a className="track__album-link" href="http://">
                {contentVisible ? <span>Welcome Reality</span> : <SkeletonTheme baseColor ="#202020" highlightColor="#444">

                <Skeleton className="skeleton_line" /></SkeletonTheme> }
                  
                </a>
              </div>
              <div className="track__time">

              {contentVisible ? <svg className="track__time-svg" alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                  <use href={`${sprite}#icon-like`} />
                </svg> :  <SkeletonTheme baseColor ="#202020" highlightColor="#444"><Skeleton className="skeleton_line-mini" /></SkeletonTheme>}
                  
                {contentVisible ? <span className="track__time-text">4:44</span> :  <SkeletonTheme baseColor ="#202020" highlightColor="#444"><Skeleton className="display_no" /></SkeletonTheme>}
                
              </div>
            </div>
          </div>

          <div className="playlist__item">
            <div className="playlist__track track">
              <div className="track__title">
              <div className="track__title-image">
                {contentVisible ? <svg className="track__title-svg" alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                    <use href={`${sprite}#icon-note`} />
                  </svg> : <SkeletonTheme baseColor ="#202020" highlightColor="#444"> <Skeleton className="square" /></SkeletonTheme>}
                </div>
                <div className="track__title-text">
                  <a className="track__title-link" href="http://">
                  {contentVisible ? <span>Elektro</span> :  <SkeletonTheme baseColor ="#202020" highlightColor="#444"><Skeleton className="skeleton_line" /></SkeletonTheme>} 
                     <span className="track__title-span"></span>
                  </a>
                </div>
              </div>
              <div className="track__author">
                <a className="track__author-link" href="http://">
                {contentVisible ? <span>Dynoro, Outwork, Mr. Gee</span> :  <SkeletonTheme baseColor ="#202020" highlightColor="#444"><Skeleton className="skeleton_line" /></SkeletonTheme>}
                  
                </a>
              </div>
              <div className="track__album">
                <a className="track__album-link" href="http://">
                {contentVisible ? <span>Elektro</span> :  <SkeletonTheme baseColor ="#202020" highlightColor="#444">
                  <Skeleton className="skeleton_line" />
                  </SkeletonTheme>}
                  
                  
                </a>
              </div>
              <div className="track__time">
              {contentVisible ? <svg className="track__time-svg" alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                  <use href={`${sprite}#icon-like`} />
                </svg> : <SkeletonTheme baseColor ="#202020" highlightColor="#444"> <Skeleton className="skeleton_line-mini" /></SkeletonTheme>}
                  
                {contentVisible ? <span className="track__time-text">2:22</span> :  <SkeletonTheme baseColor ="#202020" highlightColor="#444"><Skeleton className="display_no" /></SkeletonTheme>}
              </div>
            </div>
          </div>

          <div className="playlist__item">
            <div className="playlist__track track">
              <div className="track__title">
              <div className="track__title-image">
                {contentVisible ? <svg className="track__title-svg" alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                    <use href={`${sprite}#icon-note`} />
                  </svg> : <SkeletonTheme baseColor ="#202020" highlightColor="#444"> <Skeleton className="square" /></SkeletonTheme>}
                </div>
                <div className="track__title-text">
                  <a className="track__title-link" href="http://">

                  {contentVisible ? <span>I’m Fire </span> :  <SkeletonTheme baseColor ="#202020" highlightColor="#444"><Skeleton className="skeleton_line" /></SkeletonTheme>}
                 
                    <span className="track__title-span"></span>
                  </a>
                </div>
              </div>
              <div className="track__author">
                <a className="track__author-link" href="http://">
                {contentVisible ? <span>Ali Bakgor </span> :  <SkeletonTheme baseColor ="#202020" highlightColor="#444"><Skeleton className="skeleton_line" /></SkeletonTheme>}
                 
                  
                </a>
              </div>
              <div className="track__album">
                <a className="track__album-link" href="http://">
                {contentVisible ? <span>I’m Fire </span> :  <SkeletonTheme baseColor ="#202020" highlightColor="#444"><Skeleton className="skeleton_line" /></SkeletonTheme>}
                 
                 
                </a>
              </div>
              <div className="track__time">
              {contentVisible ? <svg className="track__time-svg" alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                  <use href={`${sprite}#icon-like`} />
                </svg> : <SkeletonTheme baseColor ="#202020" highlightColor="#444"><Skeleton className="skeleton_line-mini" /></SkeletonTheme> }
                  
                {contentVisible ? <span className="track__time-text">2:44</span> :  <SkeletonTheme baseColor ="#202020" highlightColor="#444"><Skeleton className="display_no" /></SkeletonTheme>}
              </div>
            </div>
          </div>

          <div className="playlist__item">
            <div className="playlist__track track">
              <div className="track__title">
              <div className="track__title-image">
                {contentVisible ? <svg className="track__title-svg" alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                    <use href={`${sprite}#icon-note`} />
                  </svg> :<SkeletonTheme baseColor ="#202020" highlightColor="#444">  <Skeleton className="square" /></SkeletonTheme>}
                </div>
                <div className="track__title-text">
                  <a className="track__title-link" href="http://">
                  {contentVisible ? <span>Non Stop </span> :  <SkeletonTheme baseColor ="#202020" highlightColor="#444"><Skeleton className="skeleton_line" /></SkeletonTheme>}
                 
                    
                    <span className="track__title-span">(Remix)</span>
                  </a>
                </div>
              </div>
              <div className="track__author">
                <a className="track__author-link" href="http://">
                {contentVisible ? <span>Стоункат, Psychopath</span> :  <SkeletonTheme baseColor ="#202020" highlightColor="#444"><Skeleton className="skeleton_line" /></SkeletonTheme>}
                 
                  
                </a>
              </div>
              <div className="track__album">
                <a className="track__album-link" href="http://">
                {contentVisible ? <span>Non Stop </span> :  <SkeletonTheme baseColor ="#202020" highlightColor="#444"><Skeleton className="skeleton_line" /></SkeletonTheme>}
                 
                  
                </a>
              </div>
              <div className="track__time">
              {contentVisible ? <svg className="track__time-svg" alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                  <use href={`${sprite}#icon-like`} />
                </svg> : <SkeletonTheme baseColor ="#202020" highlightColor="#444"><Skeleton className="skeleton_line-mini" /></SkeletonTheme>}
                  
                {contentVisible ? <span className="track__time-text">4:12</span> :  <SkeletonTheme baseColor ="#202020" highlightColor="#444"><Skeleton className="display_no" /></SkeletonTheme>}
              </div>
            </div>
          </div>

          <div className="playlist__item">
            <div className="playlist__track track">
              <div className="track__title">
              <div className="track__title-image">
                {contentVisible ? <svg className="track__title-svg" alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                    <use href={`${sprite}#icon-note`} />
                  </svg> : <SkeletonTheme baseColor ="#202020" highlightColor="#444"> <Skeleton className="square" /></SkeletonTheme>}
                </div>
                <div className="track__title-text">
                  <a className="track__title-link" href="http://">
                  {contentVisible ? <span>Run Run </span> :  <SkeletonTheme baseColor ="#202020" highlightColor="#444"><Skeleton className="skeleton_line" /></SkeletonTheme>}
                 
                    
                    <span className="track__title-span">(feat. AR/CO)</span>
                  </a>
                </div>
              </div>
              <div className="track__author">
                <a className="track__author-link" href="http://">
                {contentVisible ? <span>Jaded, Will Clarke, AR/CO </span> :  <SkeletonTheme baseColor ="#202020" highlightColor="#444"><Skeleton className="skeleton_line" /></SkeletonTheme>}
                 
                  
                </a>
              </div>
              <div className="track__album">
                <a className="track__album-link" href="http://">
                {contentVisible ? <span>Run Run</span> : <SkeletonTheme baseColor ="#202020" highlightColor="#444"><Skeleton className="skeleton_line" /></SkeletonTheme>}
                 
                  
                </a>
              </div>
              <div className="track__time">
              {contentVisible ? <svg className="track__time-svg" alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                  <use href={`${sprite}#icon-like`} />
                </svg> :<SkeletonTheme baseColor ="#202020" highlightColor="#444"> <Skeleton className="skeleton_line-mini" /></SkeletonTheme> }
                  
                {contentVisible ? <span className="track__time-text">2:54</span> :  <SkeletonTheme baseColor ="#202020" highlightColor="#444"><Skeleton className="display_no" /></SkeletonTheme> }
              </div>
            </div>
          </div>

          <div className="playlist__item">
            <div className="playlist__track track">
              <div className="track__title">
              <div className="track__title-image">
                {contentVisible ? <svg className="track__title-svg" alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                    <use href={`${sprite}#icon-note`} />
                  </svg> : <SkeletonTheme baseColor ="#202020" highlightColor="#444"> <Skeleton className="square" /></SkeletonTheme>}
                </div>
                <div className="track__title-text">
                  <a className="track__title-link" href="http://">
                  {contentVisible ? <span>Eyes on Fire</span> :  <SkeletonTheme baseColor ="#202020" highlightColor="#444"><Skeleton className="skeleton_line" /></SkeletonTheme>}
                 
                    
                    <span className="track__title-span">(Zeds Dead Remix)</span>
                  </a>
                </div>
              </div>
              <div className="track__author">
                <a className="track__author-link" href="http://">
                {contentVisible ? <span>Blue Foundation, Zeds Dead </span> :  <SkeletonTheme baseColor ="#202020" highlightColor="#444"><Skeleton className="skeleton_line" /></SkeletonTheme>}
                 
                  
                </a>
              </div>
              <div className="track__album">
                <a className="track__album-link" href="http://">
                {contentVisible ? <span>Eyes on Fire</span> :  <SkeletonTheme baseColor ="#202020" highlightColor="#444"><Skeleton className="skeleton_line" /></SkeletonTheme>}
                 
                  
                </a>
              </div>
              <div className="track__time">
              {contentVisible ? <svg className="track__time-svg" alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                  <use href={`${sprite}#icon-like`} />
                </svg> :<SkeletonTheme baseColor ="#202020" highlightColor="#444"><Skeleton className="skeleton_line-mini" /></SkeletonTheme>  }
                  
                {contentVisible ? <span className="track__time-text">5:20</span> :  <SkeletonTheme baseColor ="#202020" highlightColor="#444"><Skeleton className="display_no" /></SkeletonTheme>  }
              </div>
            </div>
          </div>

          <div className="playlist__item">
            <div className="playlist__track track">
              <div className="track__title">
              <div className="track__title-image">
                {contentVisible ? <svg className="track__title-svg" alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                    <use href={`${sprite}#icon-note`} />
                  </svg> : <SkeletonTheme baseColor ="#202020" highlightColor="#444"><Skeleton className="square" /></SkeletonTheme> }
                </div>
                <div className="track__title-text">
                  <a className="track__title-link" href="http://">
                  {contentVisible ? <span>Mucho Bien</span> :  <SkeletonTheme baseColor ="#202020" highlightColor="#444"><Skeleton className="skeleton_line" /></SkeletonTheme>}
                    
                    <span className="track__title-span">
                      (Hi Profile Remix)
                    </span>
                  </a>
                </div>
              </div>
              <div className="track__author">
                <a className="track__author-link" href="http://">
                {contentVisible ? <span>HYBIT, Mr. Black, Offer Nissim, Hi Profile</span> :  <SkeletonTheme baseColor ="#202020" highlightColor="#444"><Skeleton className="skeleton_line" /></SkeletonTheme>}
                  
                </a>
              </div>
              <div className="track__album">
                <a className="track__album-link" href="http://">
                {contentVisible ? <span>Mucho Bien</span> : <SkeletonTheme baseColor ="#202020" highlightColor="#444"><Skeleton className="skeleton_line" /></SkeletonTheme> }
                  
                </a>
              </div>
              <div className="track__time">
              {contentVisible ? <svg className="track__time-svg" alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                  <use href={`${sprite}#icon-like`} />
                </svg> : <SkeletonTheme baseColor ="#202020" highlightColor="#444"><Skeleton className="skeleton_line-mini" /></SkeletonTheme> }
                  
                {contentVisible ? <span className="track__time-text">3:41</span> : <SkeletonTheme baseColor ="#202020" highlightColor="#444"><Skeleton className="display_no" /></SkeletonTheme> }
              </div>
            </div>
          </div>

          <div className="playlist__item">
            <div className="playlist__track track">
              <div className="track__title">
              <div className="track__title-image">
                {contentVisible ? <svg className="track__title-svg" alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                    <use href={`${sprite}#icon-note`} />
                  </svg> : <SkeletonTheme baseColor ="#202020" highlightColor="#444"> <Skeleton className="square" /></SkeletonTheme>}
                </div>
                <div className="track__title-text">
                  <a className="track__title-link" href="http://">
                  {contentVisible ? <span>Knives n Cherries</span> :<SkeletonTheme baseColor ="#202020" highlightColor="#444"> <Skeleton className="skeleton_line" /></SkeletonTheme> }
                    
                    <span className="track__title-span"></span>
                  </a>
                </div>
              </div>
              <div className="track__author">
                <a className="track__author-link" href="http://">
                {contentVisible ? <span>minthaze</span> : <SkeletonTheme baseColor ="#202020" highlightColor="#444"><Skeleton className="skeleton_line" /></SkeletonTheme> }
                  
                </a>
              </div>
              <div className="track__album">
                <a className="track__album-link" href="http://">
                {contentVisible ? <span>Captivating</span> : <SkeletonTheme baseColor ="#202020" highlightColor="#444"><Skeleton className="skeleton_line" /></SkeletonTheme> }
                  
                </a>
              </div>
              <div className="track__time">
              {contentVisible ? <svg className="track__time-svg" alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                  <use href={`${sprite}#icon-like`} />
                </svg> : <SkeletonTheme baseColor ="#202020" highlightColor="#444"><Skeleton className="skeleton_line-mini" /></SkeletonTheme> }
                  
                {contentVisible ? <span className="track__time-text">1:48</span> : <SkeletonTheme baseColor ="#202020" highlightColor="#444"><Skeleton className="display_no" /></SkeletonTheme> }
              </div>
            </div>
          </div>

          <div className="playlist__item">
            <div className="playlist__track track">
              <div className="track__title">
              <div className="track__title-image">
                {contentVisible ? <svg className="track__title-svg" alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                    <use href={`${sprite}#icon-note`} />
                  </svg> : <SkeletonTheme baseColor ="#202020" highlightColor="#444"> <Skeleton className="square" /></SkeletonTheme>}
                </div>
                <div className="track__title-text">
                  <a className="track__title-link" href="http://">
                  {contentVisible ? <span>Knives n Cherries</span> :<SkeletonTheme baseColor ="#202020" highlightColor="#444"> <Skeleton className="skeleton_line" /></SkeletonTheme> }
                    
                    <span className="track__title-span"></span>
                  </a>
                </div>
              </div>
              <div className="track__author">
                <a className="track__author-link" href="http://">
                {contentVisible ? <span>minthaze</span> : <SkeletonTheme baseColor ="#202020" highlightColor="#444"><Skeleton className="skeleton_line" /></SkeletonTheme> }
                  
                </a>
              </div>
              <div className="track__album">
                <a className="track__album-link" href="http://">
                {contentVisible ? <span>Captivating</span> : <SkeletonTheme baseColor ="#202020" highlightColor="#444"><Skeleton className="skeleton_line" /></SkeletonTheme> }
                  
                </a>
              </div>
              <div className="track__time">
              {contentVisible ? <svg className="track__time-svg" alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                  <use href={`${sprite}#icon-like`} />
                </svg> : <SkeletonTheme baseColor ="#202020" highlightColor="#444"><Skeleton className="skeleton_line-mini" /></SkeletonTheme> }
                  
                {contentVisible ? <span className="track__time-text">1:48</span> : <SkeletonTheme baseColor ="#202020" highlightColor="#444"> <Skeleton className="display_no" /></SkeletonTheme> }
              </div>
            </div>
          </div>
          <div className="playlist__item">
            <div className="playlist__track track">
              <div className="track__title">
              <div className="track__title-image">
                {contentVisible ? <svg className="track__title-svg" alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                    <use href={`${sprite}#icon-note`} />
                  </svg> : <SkeletonTheme baseColor ="#202020" highlightColor="#444"> <Skeleton className="square" /></SkeletonTheme> }
                </div>
                <div className="track__title-text">
                  <a className="track__title-link" href="http://">
                  {contentVisible ? <span>Knives n Cherries</span> : <SkeletonTheme baseColor ="#202020" highlightColor="#444"> <Skeleton className="skeleton_line" /></SkeletonTheme> }
                    
                    <span className="track__title-span"></span>
                  </a>
                </div>
              </div>
              <div className="track__author">
                <a className="track__author-link" href="http://">
                {contentVisible ? <span>minthaze</span> :<SkeletonTheme baseColor ="#202020" highlightColor="#444"> <Skeleton className="skeleton_line" /></SkeletonTheme> }
                  
                </a>
              </div>
              <div className="track__album">
                <a className="track__album-link" href="http://">
                {contentVisible ? <span>Captivating</span> :<SkeletonTheme baseColor ="#202020" highlightColor="#444"> <Skeleton className="skeleton_line" /></SkeletonTheme> }
                  
                </a>
              </div>
              <div className="track__time">
              {contentVisible ? <svg className="track__time-svg" alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                  <use href={`${sprite}#icon-like`} />
                </svg> : <SkeletonTheme baseColor ="#202020" highlightColor="#444"><Skeleton className="skeleton_line-mini" /></SkeletonTheme> }
                  
                {contentVisible ? <span className="track__time-text">4:44</span> :  <SkeletonTheme baseColor ="#202020" highlightColor="#444"><Skeleton className="display_no" /></SkeletonTheme> }
              </div>
            </div>
          </div>
          <div className="playlist__item">
            <div className="playlist__track track">
              <div className="track__title">
              <div className="track__title-image">
                {contentVisible ? <svg className="track__title-svg" alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                    <use href={`${sprite}#icon-note`} />
                  </svg> :  <SkeletonTheme baseColor ="#202020" highlightColor="#444"><Skeleton className="square" /></SkeletonTheme> }
                </div>
                <div className="track__title-text">
                  <a className="track__title-link" href="http://">
                  {contentVisible ? <span>Knives n Cherries</span> : <SkeletonTheme baseColor ="#202020" highlightColor="#444"> <Skeleton className="skeleton_line" /></SkeletonTheme>}
                    
                    <span className="track__title-span"></span>
                  </a>
                </div>
              </div>
              <div className="track__author">
                <a className="track__author-link" href="http://">
                {contentVisible ? <span>minthaze</span> : <SkeletonTheme baseColor ="#202020" highlightColor="#444"><Skeleton className="skeleton_line" /></SkeletonTheme> }
                  
                </a>
              </div>
              <div className="track__album">
                <a className="track__album-link" href="http://">
                {contentVisible ? <span> Captivating</span> : <SkeletonTheme baseColor ="#202020" highlightColor="#444"><Skeleton className="skeleton_line" /></SkeletonTheme> }
                 
                </a>
              </div>
              <div className="track__time">
              {contentVisible ? <svg className="track__time-svg" alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                  <use href={`${sprite}#icon-like`} />
                </svg> :  <SkeletonTheme baseColor ="#202020" highlightColor="#444"><Skeleton className="skeleton_line-mini" /></SkeletonTheme>}
                  
                {contentVisible ? <span className="track__time-text">9:44</span> : <SkeletonTheme baseColor ="#202020" highlightColor="#444"><Skeleton className="display_no" /></SkeletonTheme> }
              </div>
            </div>
          </div>
          <div className="playlist__item">
            <div className="playlist__track track">
              <div className="track__title">
              <div className="track__title-image">
                {contentVisible ? <svg className="track__title-svg" alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                    <use href={`${sprite}#icon-note`} />
                  </svg> : <SkeletonTheme baseColor ="#202020" highlightColor="#444"><Skeleton className="square" /></SkeletonTheme> }
                </div>
                <div className="track__title-text">
                  <a className="track__title-link" href="http://">
                  {contentVisible ? <span>Knives n Cherries</span> :<SkeletonTheme baseColor ="#202020" highlightColor="#444"><Skeleton className="skeleton_line" /></SkeletonTheme>  }
                    
                    <span className="track__title-span"></span>
                  </a>
                </div>
              </div>
              <div className="track__author">
                <a className="track__author-link" href="http://">
                {contentVisible ? <span>minthaze</span> : <SkeletonTheme baseColor ="#202020" highlightColor="#444"><Skeleton className="skeleton_line" /></SkeletonTheme> }
                  
                </a>
              </div>
              <div className="track__album">
                <a className="track__album-link" href="http://">
                {contentVisible ? <span>Captivating</span> : <SkeletonTheme baseColor ="#202020" highlightColor="#444"><Skeleton className="skeleton_line" /></SkeletonTheme> }
                  
                </a>
              </div>
              <div className="track__time">
              {contentVisible ? <svg className="track__time-svg" alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                  <use href={`${sprite}#icon-like`} />
                </svg> :  <SkeletonTheme baseColor ="#202020" highlightColor="#444"><Skeleton className="skeleton_line-mini" /></SkeletonTheme>}
                  
                {contentVisible ? <span className="track__time-text">2:40</span> : <SkeletonTheme baseColor ="#202020" highlightColor="#444"><Skeleton className="display_no" /></SkeletonTheme> }
              </div>
            </div>
          </div>
          <div className="playlist__item">
            <div className="playlist__track track">
              <div className="track__title">
              <div className="track__title-image">
                {contentVisible ? <svg className="track__title-svg" alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                    <use href={`${sprite}#icon-note`} />
                  </svg> :  <SkeletonTheme baseColor ="#202020" highlightColor="#444"><Skeleton className="square" /></SkeletonTheme>}
                </div>
                <div className="track__title-text">
                  <a className="track__title-link" href="http://">
                  {contentVisible ? <span>Knives n Cherries</span> : <SkeletonTheme baseColor ="#202020" highlightColor="#444"> <Skeleton className="skeleton_line" /></SkeletonTheme>}
                    
                    <span className="track__title-span"></span>
                  </a>
                </div>
              </div>
              <div className="track__author">
                <a className="track__author-link" href="http://">
                {contentVisible ? <span>minthaze</span> :<SkeletonTheme baseColor ="#202020" highlightColor="#444">  <Skeleton className="skeleton_line" /></SkeletonTheme>}
                  
                </a>
              </div>
              <div className="track__album">
                <a className="track__album-link" href="http://">
                {contentVisible ? <span>Captivating</span> :<SkeletonTheme baseColor ="#202020" highlightColor="#444">  <Skeleton className="skeleton_line" /></SkeletonTheme>}
                  
                </a>
              </div>
              <div className="track__time">
              {contentVisible ? <svg className="track__time-svg" alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                  <use href={`${sprite}#icon-like`} />
                </svg> :  <SkeletonTheme baseColor ="#202020" highlightColor="#444"><Skeleton className="skeleton_line-mini" /></SkeletonTheme>}
                  
                {contentVisible ? <span className="track__time-text">4:44</span> :<SkeletonTheme baseColor ="#202020" highlightColor="#444">  <Skeleton className="display_no" /></SkeletonTheme>}
              </div>
            </div>
          </div>
          <div className="playlist__item">
            <div className="playlist__track track">
              <div className="track__title">
              <div className="track__title-image">
                {contentVisible ? <svg className="track__title-svg" alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                    <use href={`${sprite}#icon-note`} />
                  </svg> : <SkeletonTheme baseColor ="#202020" highlightColor="#444"><Skeleton className="square" /></SkeletonTheme> }
                </div>
                <div className="track__title-text">
                  <a className="track__title-link" href="http://">
                  {contentVisible ? <span>Knives n Cherries</span> :<SkeletonTheme baseColor ="#202020" highlightColor="#444">  <Skeleton className="skeleton_line" /></SkeletonTheme>}
                    
                    <span className="track__title-span"></span>
                  </a>
                </div>
              </div>
              <div className="track__author">
                <a className="track__author-link" href="http://">
                {contentVisible ? <span>minthaze</span> : <SkeletonTheme baseColor ="#202020" highlightColor="#444"> <Skeleton className="skeleton_line" /></SkeletonTheme>}
                  
                </a>
              </div>
              <div className="track__album">
                <a className="track__album-link" href="http://">
                {contentVisible ? <span>Captivating</span> :<SkeletonTheme baseColor ="#202020" highlightColor="#444">  <Skeleton className="skeleton_line" /></SkeletonTheme>}
                  
                </a>
              </div>
              <div className="track__time">
              {contentVisible ? <svg className="track__time-svg" alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                  <use href={`${sprite}#icon-like`} />
                </svg> :  <SkeletonTheme baseColor ="#202020" highlightColor="#444"><Skeleton className="skeleton_line-mini" /></SkeletonTheme>}
                  
                {contentVisible ? <span className="track__time-text">4:54</span> :<SkeletonTheme baseColor ="#202020" highlightColor="#444">  <Skeleton className="display_no" /></SkeletonTheme>}
              </div>
            </div>
          </div>

          <div className="playlist__item">
            <div className="playlist__track track">
              <div className="track__title">
              <div className="track__title-image">
                {contentVisible ? <svg className="track__title-svg" alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                    <use href={`${sprite}#icon-note`} />
                  </svg> : <SkeletonTheme baseColor ="#202020" highlightColor="#444"> <Skeleton className="square" /></SkeletonTheme>}
                </div>
                <div className="track__title-text">
                  <a className="track__title-link" href="http://">
                  {contentVisible ? <span>How Deep Is Your Love</span> : <SkeletonTheme baseColor ="#202020" highlightColor="#444"> <Skeleton className="skeleton_line" /></SkeletonTheme>}
                    
                    <span className="track__title-span"></span>
                  </a>
                </div>
              </div>
              <div className="track__author">
                <a className="track__author-link" href="http://">
                {contentVisible ? <span>Calvin Harris, Disciples</span> : <SkeletonTheme baseColor ="#202020" highlightColor="#444"> <Skeleton className="skeleton_line" /></SkeletonTheme>}
                  
                </a>
              </div>
              <div className="track__album">
                <a className="track__album-link" href="http://">
                {contentVisible ? <span>How Deep Is Your Love</span> :<SkeletonTheme baseColor ="#202020" highlightColor="#444">  <Skeleton className="skeleton_line" /></SkeletonTheme>}
                  
                </a>
              </div>
              <div className="track__time">
                <svg className="track__time-svg" alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                  <use href={`${sprite}#icon-like`} />
                </svg>
                <span className="track__time-text">3:32</span>
              </div>
            </div>
          </div>

          <div className="playlist__item">
            <div className="playlist__track track">
              <div className="track__title">
              <div className="track__title-image">
                {contentVisible ? <svg className="track__title-svg" alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                    <use href={`${sprite}#icon-note`} />
                  </svg> :  <SkeletonTheme baseColor ="#202020" highlightColor="#444"><Skeleton className="square" /></SkeletonTheme>}
                </div>
                <div className="track__title-text">
                  <a className="track__title-link" href="http://">
                  {contentVisible ? <span>Morena</span> :  <SkeletonTheme baseColor ="#202020" highlightColor="#444"><Skeleton className="skeleton_line" /></SkeletonTheme>}
                     <span className="track__title-span"></span>
                  </a>
                </div>
              </div>
              <div className="track__author">
                <a className="track__author-link" href="http://">
                {contentVisible ? <span>Tom Boxer</span> :  <SkeletonTheme baseColor ="#202020" highlightColor="#444"><Skeleton className="skeleton_line" /></SkeletonTheme>}
                  
                </a>
              </div>
              <div className="track__album">
                <a className="track__album-link" href="http://">
                {contentVisible ? <span>Soundz Made in Romania</span> : <SkeletonTheme baseColor ="#202020" highlightColor="#444"> <Skeleton className="skeleton_line" /></SkeletonTheme>}
                  
                </a>
              </div>
              <div className="track__time">
                <svg className="track__time-svg" alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                  <use href={`${sprite}#icon-like`} />
                </svg>
                <span className="track__time-text">3:36</span>
              </div>
            </div>
          </div>

          <div className="playlist__item">
            <div className="playlist__track track">
              <div className="track__title">
                <div className="track__title-image">
                  <svg className="track__title-svg" alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                    <use href={`${sprite}#icon-note`} />
                  </svg>
                </div>
                <div className="track__title-text">
                  <a className="track__title-link" href="http://">
                    <span className="track__title-span"></span>
                  </a>
                </div>
              </div>
              <div className="track__author">
                <a className="track__author-link" href="http://"></a>
              </div>
              <div className="track__album">
                <a className="track__album-link" href="http://"></a>
              </div>
              <div className="track__time">
                <svg className="track__time-svg" alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                  <use href={`${sprite}#icon-like`} />
                </svg>
                <span className="track__time-text"></span>
              </div>
            </div>
          </div>
        </div>
      {/* </div> */}
    </div>
  );
}
