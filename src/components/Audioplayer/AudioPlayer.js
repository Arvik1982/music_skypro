import sprite from "./sprite.svg"
import "../Audioplayer/AudioPlayer.css"
import React, { useState } from 'react';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { SkeletonTheme } from "react-loading-skeleton";
import styled from "styled-components";

const StyleAudioPlayer_bar=styled.div`
position: absolute;
bottom: 0;
left: 0;
width: 100%;
background: rgba(28, 28, 28, 0.5);
  `

const StyleAudioPlayer_barContent=styled.div`
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: vertical;
-webkit-box-direction: normal;
-ms-flex-direction: column;
flex-direction: column;
  `
const StyleAudioPlayer_progress=styled.div`
width: 100%;
height: 5px;
background: #2e2e2e;
`
const StyleAudioPlayer_playerBlock=styled(StyleAudioPlayer_barContent)`
height: 73px;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: horizontal;
-webkit-box-direction: normal;
-ms-flex-direction: row;
flex-direction: row;
-webkit-box-pack: justify;
-ms-flex-pack: justify;
justify-content: space-between;
`
const StyleAudioPlayer_barPlayer=styled.div`
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: horizontal;
-webkit-box-direction: normal;
-ms-flex-direction: row;
flex-direction: row;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
-webkit-box-pack: start;
-ms-flex-pack: start;
justify-content: flex-start;
`
const StyleAudioPlayer_barPlayer_player=styled(StyleAudioPlayer_barPlayer)`
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: horizontal;
-webkit-box-direction: normal;
-ms-flex-direction: row;
flex-direction: row;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
-webkit-box-pack: start;
-ms-flex-pack: start;
justify-content: flex-start;
`
const StyleAudioPlayer_playerControls=styled.div`
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: horizontal;
-webkit-box-direction: normal;
-ms-flex-direction: row;
flex-direction: row;
padding: 0 27px 0 31px;
`
const StyleAudioPlayer_playerButtons=styled.div`
padding: 5px;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;

`

const StyleAudioPlayer_playerBtnPrev=styled(StyleAudioPlayer_playerButtons)`
margin-right: 25px;
`
const StyleAudioPlayer_playerBtnPrevSvg=styled.svg`
width: 15px;
height: 14px;
`
const StyleAudioPlayer_playerBtnPlay=styled(StyleAudioPlayer_playerButtons)`
margin-right: 23px;

`
const StyleAudioPlayer_playerBtnPlaySvg=styled.svg`
width: 22px;
height: 20px;
fill: #d9d9d9;
`

const StyleAudioPlayer_playerBtnNext=styled(StyleAudioPlayer_playerButtons)`
margin-right: 28px;
fill: #a53939;
`
const StyleAudioPlayer_playerBtnNextSvg=styled.svg`
width: 15px;
height: 14px;
fill: inherit;
stroke: #d9d9d9;
`
const StyleAudioPlayer_playerBtnRepeat=styled(StyleAudioPlayer_playerButtons)`
margin-right: 24px;
`
const StyleAudioPlayer_playerBtnRepeatSvg=styled.svg`
width: 18px;
height: 12px;
fill: transparent;
stroke: #696969;
`
const StyleAudioPlayer_playerBtnShuffle=styled(StyleAudioPlayer_playerButtons)`
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
`
const StyleAudioPlayer_playerBtnShuffleSvg=styled.svg`
width: 19px;
height: 12px;
fill: transparent;
stroke: #696969;
`
// const StyleAudioPlayer_=styled.div``
const StyleAudioPlayer_playerTrackPlay=styled.div`
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: horizontal;
-webkit-box-direction: normal;
-ms-flex-direction: row;
flex-direction: row;
`

const StyleAudioPlayer_playerTrackPlayContain=styled.div`
width: auto;
display: -ms-grid;
display: grid;
-ms-grid-columns: auto 1fr;
grid-template-columns: auto 1fr;
grid-template-areas: "image author" "image album";
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
`
const StyleAudioPlayer_playerTrackPlayImage=styled.div`
width: 51px;
height: 51px;
background-color: #313131;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
-webkit-box-pack: center;
-ms-flex-pack: center;
justify-content: center;
margin-right: 12px;
-ms-grid-row: 1;
-ms-grid-row-span: 2;
-ms-grid-column: 1;
grid-area: image;
`

const StyleAudioPlayer_playerTrackPlaySvg=styled.svg`
width: 18px;
height: 17px;
fill: transparent;
stroke: #4e4e4e;
`
const StyleAudioPlayer_playerTrackPlayAuthor=styled.div`
-ms-grid-row: 1;
-ms-grid-column: 2;
grid-area: author;
min-width: 49px;
`
const StyleAudioPlayer_playerTrackPlayAuthorLink=styled.a`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #ffffff;
white-space: nowrap;
`

const StyleAudioPlayer_playerTrackPlayAlbum=styled.div`
-ms-grid-row: 2;
-ms-grid-column: 2;
grid-area: album;
min-width: 49px;
`
const StyleAudioPlayer_playerTrackPlayAlbumLink=styled.a`
font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 24px;
color: #ffffff;
`
const StyleAudioPlayer_playerTrackPlayLkeDislike=styled.div`
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: horizontal;
-webkit-box-direction: normal;
-ms-flex-direction: row;
flex-direction: row;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
margin-left: 26%;
`
const StyleAudioPlayer_playerTrackPlayLke=styled.div`
padding: 5px;
`
const StyleAudioPlayer_playerTrackPlayLikeSvg=styled.svg`
width: 14px;
height: 12px;
fill: transparent;
stroke: #696969;
`
const StyleAudioPlayer_playerTrackPlayDisLke=styled.div`
padding: 5px;
margin-left: 28.5px;
`
const StyleAudioPlayer_playerTrackPlayDisLikeSvg=styled.svg`
width: 14.34px;
height: 13px;
fill: transparent;
stroke: #696969;
`
const StyleAudioPlayer_playerBarVolBlock=styled.div`
width: auto;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
padding: 0 92px 0 0;
`
const StyleAudioPlayer_playerBarVolContent=styled.div`

display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: horizontal;
-webkit-box-direction: normal;
-ms-flex-direction: row;
flex-direction: row;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
-webkit-box-pack: end;
-ms-flex-pack: end;
justify-content: end;
`
const StyleAudioPlayer_playerBarVolImg=styled.div`

width: 13px;
height: 18px;
margin-right: 17px;
`
const StyleAudioPlayer_playerBarVolSvg=styled.svg`
width: 13px;
  height: 18px;
  fill: transparent;
`

const StyleAudioPlayer_playerBarVolProgress=styled.div`
width: 109px;
`
const StyleAudioPlayer_playerBarVolProgressLine=styled.input`
width: 109px;
`
export function Player(props){
  const [contentVisible, setContentVisible] = useState(false);
  setTimeout(() => {
    setContentVisible(true);
  }, 4000);

    return(
<StyleAudioPlayer_bar>





            <StyleAudioPlayer_barContent>
              <StyleAudioPlayer_progress></StyleAudioPlayer_progress>
              <StyleAudioPlayer_playerBlock>
   
                <StyleAudioPlayer_barPlayer_player>
                  <StyleAudioPlayer_playerControls>
                    <StyleAudioPlayer_playerBtnPrev>
                      <StyleAudioPlayer_playerBtnPrevSvg alt="prev">
                        <use xlinkHref="img/icon/sprite.svg#icon-prev"></use>
                        <use href={`${sprite}#icon-prev`} />
                      </StyleAudioPlayer_playerBtnPrevSvg>
                    </StyleAudioPlayer_playerBtnPrev>
                    <StyleAudioPlayer_playerBtnPlay className="_btn">
                      <StyleAudioPlayer_playerBtnPlaySvg alt="play">
                        <use xlinkHref="img/icon/sprite.svg#icon-play"></use>
                        <use href={`${sprite}#icon-play`} />
                      </StyleAudioPlayer_playerBtnPlaySvg>
                    </StyleAudioPlayer_playerBtnPlay>
                    <StyleAudioPlayer_playerBtnNext>
                      <StyleAudioPlayer_playerBtnNextSvg alt="next">
                        <use xlinkHref="img/icon/sprite.svg#icon-next"></use>
                        <use href={`${sprite}#icon-next`} />
                      </StyleAudioPlayer_playerBtnNextSvg>
                    </StyleAudioPlayer_playerBtnNext>
                    <StyleAudioPlayer_playerBtnRepeat className="_btn-icon">
                      <StyleAudioPlayer_playerBtnRepeatSvg alt="repeat">
                        <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
                        <use href={`${sprite}#icon-repeat`} />
                      </StyleAudioPlayer_playerBtnRepeatSvg>
                    </StyleAudioPlayer_playerBtnRepeat>
                    <StyleAudioPlayer_playerBtnShuffle className=" _btn-icon">
                      <StyleAudioPlayer_playerBtnShuffleSvg alt="shuffle">
                        <use xlinkHref="img/icon/sprite.svg#icon-shuffle"></use>
                        <use href={`${sprite}#icon-shuffle`} />
                      </StyleAudioPlayer_playerBtnShuffleSvg>
                    </StyleAudioPlayer_playerBtnShuffle>
                  </StyleAudioPlayer_playerControls>


  
                  <StyleAudioPlayer_playerTrackPlay className="track-play">
                  <StyleAudioPlayer_playerTrackPlayContain>
                  
                  <StyleAudioPlayer_playerTrackPlayImage>
                  {contentVisible ? <StyleAudioPlayer_playerTrackPlaySvg alt="music">
                        <use href={`${sprite}#icon-note`} />
                        </StyleAudioPlayer_playerTrackPlaySvg> :  <SkeletonTheme baseColor ="#202020" highlightColor="#444"><Skeleton className="skeleton_player_img" /></SkeletonTheme>}


                  
                        
                    </StyleAudioPlayer_playerTrackPlayImage>
                    
                      
                      <StyleAudioPlayer_playerTrackPlayAuthor>
                      <StyleAudioPlayer_playerTrackPlayAuthorLink href="http://">
                      {contentVisible ? <span>Ты та...</span> :  <SkeletonTheme baseColor ="#202020" highlightColor="#444"><Skeleton className="skeleton_player_icon" /></SkeletonTheme>}
                        
                      </StyleAudioPlayer_playerTrackPlayAuthorLink>
                    </StyleAudioPlayer_playerTrackPlayAuthor>

                    <StyleAudioPlayer_playerTrackPlayAlbum>
                      <StyleAudioPlayer_playerTrackPlayAlbumLink href="http://">
                      {contentVisible ? <span>Баста</span> : <SkeletonTheme baseColor ="#202020" highlightColor="#444"> <Skeleton className="skeleton_player_icon" /></SkeletonTheme>}
                        
                      </StyleAudioPlayer_playerTrackPlayAlbumLink>
                    </StyleAudioPlayer_playerTrackPlayAlbum>
                                  
                      
                    </StyleAudioPlayer_playerTrackPlayContain>
                    <StyleAudioPlayer_playerTrackPlayLkeDislike>
                      <StyleAudioPlayer_playerTrackPlayLke className=" _btn-icon">
                        <StyleAudioPlayer_playerTrackPlayLikeSvg alt="like">
                          <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                          <use href={`${sprite}#icon-like`} />
                        </StyleAudioPlayer_playerTrackPlayLikeSvg>
                      </StyleAudioPlayer_playerTrackPlayLke>
                      <StyleAudioPlayer_playerTrackPlayDisLke className="_btn-icon">
                        <StyleAudioPlayer_playerTrackPlayDisLikeSvg alt="dislike">
                          <use xlinkHref="img/icon/sprite.svg#icon-dislike"></use>
                          <use href={`${sprite}#icon-dislike`} />
                        </StyleAudioPlayer_playerTrackPlayDisLikeSvg>
                      </StyleAudioPlayer_playerTrackPlayDisLke>
                    </StyleAudioPlayer_playerTrackPlayLkeDislike>

                  </StyleAudioPlayer_playerTrackPlay>
                </StyleAudioPlayer_barPlayer_player>
                <StyleAudioPlayer_playerBarVolBlock className="volume">
                  <StyleAudioPlayer_playerBarVolContent>
                    <StyleAudioPlayer_playerBarVolImg>
                      <StyleAudioPlayer_playerBarVolSvg alt="volume">
                        <use xlinkHref="img/icon/sprite.svg#icon-volume"></use>
                        <use href={`${sprite}#icon-volume`} />
                      </StyleAudioPlayer_playerBarVolSvg>
                    </StyleAudioPlayer_playerBarVolImg>
                    <StyleAudioPlayer_playerBarVolProgress className="_btn">
                      <StyleAudioPlayer_playerBarVolProgressLine
                        className="_btn"
                        type="range"
                        name="range"
                      />
                    </StyleAudioPlayer_playerBarVolProgress>
                  </StyleAudioPlayer_playerBarVolContent>
                </StyleAudioPlayer_playerBarVolBlock>
                
              </StyleAudioPlayer_playerBlock>
            </StyleAudioPlayer_barContent>
          </StyleAudioPlayer_bar>)
          }