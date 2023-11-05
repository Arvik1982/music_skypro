import sprite from "./sprite.svg";
import React, { useContext, useEffect, useRef, useState } from "react";
import "react-loading-skeleton/dist/skeleton.css";
import { SkeletonTheme } from "react-loading-skeleton";
import "../../img/icon/play.svg";
import * as S from "./PlayerStyles";
import { getMyTracks, getTracks } from "../../api";
import { UserContext } from "../../App"
import { useNavigate, useParams } from "react-router-dom";
import { addMyTracks,delMyTracks } from "../../api";
//redux

import { useSelector } from "react-redux";
import { 
  setNextRedux,
  setPrevRedux,
  setTimeRedux,
  setProgressRedux,
  setShuffleRedux,
  setNotShuffleRedux,
  setOnDotRedux,
  setOffDotRedux,
  setCycleRedux,
  setTrackRedux,
  setTracksRedux,
  setMyTracksRedux} from "../../store/reducers/playerSlice";
import { useDispatch } from "react-redux";
// let tracks=[]


export function Player({playerVisibility, tracks, setTracks}) {
  
  const[liked, setLiked] = useState()
  const param = useParams()
  const realPlayer = useRef(null);
  const [playerOn, setPlayerOn] = useState(false);
  const [loopOn, setLoopOn] = useState(false);
  const [volumeOn, setVolumeOn] = useState(0.2);
  const [progressOn, setProgressOn] = useState(0);
  const [trackTime, setTrackTime] = useState(0);
  const [mix, setMixOn] = useState(false);
  const userName = useContext(UserContext)
  
  
  
 
//redux
const tracksRedux = useSelector(state=>state.track.tracks)

const activeTrackRedux = useSelector(state=>state.track.activeTrack)
const isLikedRedux = useSelector(state=>state.track.isLiked)
const myTracks = useSelector(state=>state.track.myTracks)
console.log(myTracks)
const dispatch=useDispatch()
let activeTrack = activeTrackRedux 
const navigate=useNavigate()

useEffect(() => {
  renderTracks()
  likes()
  console.log('i work');
  
  
    if(!playerOn){
    setTimeout(() => {
      realPlayer?.current.addEventListener("timeupdate", () => {
        setProgressOn(realPlayer.current.currentTime);
         dispatch(setProgressRedux(realPlayer.current.currentTime))
         
        
      });
    }, 1);
    setTimeout(() => {
      realPlayer?.current.addEventListener("loadedmetadata", () => {
        setTrackTime(realPlayer.current.duration);
        
         dispatch(setTimeRedux(realPlayer.current.duration))
        // console.log(trackTime)
      });
    }, 1);

    return () => {
      realPlayer.current.removeEventListener("timeupdate", () => {
        setProgressOn(realPlayer.current.currentTime);
      });
      realPlayer?.current.removeEventListener("loadedmetadata", () => {
        setTrackTime(realPlayer.current.duration);
      });
    };
    
}

}, [activeTrack
  // tracks
]);


  const clickPlayerStart = () => {
    realPlayer?.current.play();
    setPlayerOn(true);
    dispatch(setOnDotRedux())
    // dispatch(setNextRedux());
  };
  const clickPlayerStop = () => {
    realPlayer?.current.pause();
    setPlayerOn(false);
    dispatch(setOffDotRedux())
  };
  const clickPlayerLoopOn = () => {
    realPlayer.current.loop = true;
    setLoopOn(true);
    dispatch(setCycleRedux())
    // console.log(activeTrack)

    // console.log(activeTrack.id)
    // console.log(activeTrack[0])
  };
  const clickPlayerLoopOff = () => {
    realPlayer.current.loop = false;
    setLoopOn(false);
     dispatch(setCycleRedux())
    //  console.log(activeTrack)
  };

  const clickPlayerShuffleOn = () => {
    dispatch(setShuffleRedux())
   
    setMixOn(true);
  };
  const clickPlayerShuffleOff = () => {
    dispatch(setNotShuffleRedux())
   
    setMixOn(false);
  };


  const [contentVisible, setContentVisible] = useState(false);
  setTimeout(() => {
    setContentVisible(true);
  }, 500);

if(playerOn){
  realPlayer.current.play();
}
// if(playerOn & pause===true ){
//   realPlayer.current.pause();
// }
console.log(activeTrackRedux)


//LIKES-START

function renderLikes(id){
  addMyTracks(id).then(()=>renderTracks()
  ).catch((err)=>{console.log(err.message)
  // localStorage.removeItem('userName');
  // setError(err.message);
  // setTimeout(()=>navigate("/login",{replace:true}),2000)
  })
}
function renderDisLikes(id){
  delMyTracks(id).then(()=>renderTracks()
  ).catch((err)=>{console.log(err.message)
    // setError(err.message); 
  })
}
function renderTracks(){
  
  getTracks()
    .then((data) => {
      // console.log(data)
      // errorText = null;
      setTracks(data);
      // console.log(tracks)
      dispatch(setTracksRedux(data));
      // dispatch(setMyTracksRedux(data))
      setContentVisible(true);
      
      // return tracks;
      
    }).then(()=>{getMyTracks().then((data)=>{dispatch(setMyTracksRedux(data))})
  
    .catch((error) => {
      // errorText = error.message;
      setContentVisible(true);
      // setTracks([]);
      localStorage.removeItem('userName')
      navigate("/login",{replace:true})
      // setUser(false);
      // console.log('REDIRECT /')
      // navigate("/",{replace:true})
      // return errorText;
    })
  
  })
    .catch((error) => {
      // errorText = error.message;
      setContentVisible(true);
      // setTracks([]);
      localStorage.removeItem('userName')
      navigate("/login",{replace:true})
      // setUser(false);
      // console.log('REDIRECT /')
      // navigate("/",{replace:true})
      // return errorText;
    })
} 


// function likes(track){ 
//   console.log(track)
//   for (let index_user = 0; index_user < track.length; index_user++) {
// let likName =track.stared_user[index_user].username

// let un=userName

          
//    if (likName === un[0])     
//     {
      
//       return track.id
      
//     }
    
//      }
    
// }






function likes(){ 
console.log(activeTrack)
console.log(myTracks)
  let likedTrack = myTracks.find(item=>item.name===activeTrack.name)
setLiked(Boolean(likedTrack))
  console.log(Boolean(likedTrack))
}

//LIKES-END
  return ( 
    <S.bar style={{ visibility: `${playerVisibility}` }}>
      <S.barContent>
       
        <audio
       
          hidden
          id="audio"
          controls
          ref={realPlayer}
          src={activeTrack.track_file}
          style={{ marginBottom: "20px" }}
        >
          AudioPlayer
        </audio>
        <S.progress
          type="range"
          step={0.1}
          min={0}
          onChange={(e) => {
            realPlayer.current.currentTime = e.target.value;
            setProgressOn(e.target.value);
            
          }}
          value={progressOn}
          max={trackTime}
        ></S.progress>

        <S.playerBlock>
          <S.barPlayer_player>
            <div>
              <h2 style={{ marginLeft: "20px", color: "gray" }}>
                {((trackTime - progressOn) / 60).toFixed(2)}{" "}
              </h2>
            </div>
            <S.playerControls>
              <S.playerBtnPrev>
                <S.playerBtnPrevSvg
                  onClick={()=>{dispatch(setPrevRedux())}}
                                                                                 //PREV
                  alt="prev"
                >
                  <use xlinkHref="img/icon/sprite.svg#icon-prev"></use>
                  <use href={`${sprite}#icon-prev`} />
                </S.playerBtnPrevSvg>
              </S.playerBtnPrev>

              <S.playerBtnPlay className="_btn">
                <S.playerBtnPlaySvg
                  onClick={
                     playerOn ? clickPlayerStop :  clickPlayerStart                  //START-STOP
                  }
                  alt="play"
                >
                  
                  <use
                    href={
                      playerOn ? `${sprite}#icon-pause` : `${sprite}#icon-play`
                    }
                  />
                  
                </S.playerBtnPlaySvg>
              </S.playerBtnPlay>
              <S.playerBtnNext>
                <S.playerBtnNextSvg
                  onClick={ ()=>{dispatch(setNextRedux())}}                            //NEXT
                                                                  
                  alt="next">
                  <use xlinkHref="img/icon/sprite.svg#icon-next"></use>
                  <use href={`${sprite}#icon-next`} />
                </S.playerBtnNextSvg>
              </S.playerBtnNext>
              <S.playerBtnRepeat className="_btn-icon">
                <S.playerBtnRepeatSvg
                  onClick={loopOn ? clickPlayerLoopOff : clickPlayerLoopOn}
                  alt="repeat"
                >
                  {/* <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use> */}
                  <use
                    href={loopOn ? `${sprite}#loopOn` : `${sprite}#icon-repeat`}                              
                                                                                                // REPEAT
                  />
                </S.playerBtnRepeatSvg>
              </S.playerBtnRepeat>
              <S.playerBtnShuffle  className=" _btn-icon">
              {/* style={shuffleOn?{backgroundColor:'red'}:{backgroundColor:'yellow'}} */}
                <S.playerBtnShuffleSvg
                  onClick={  mix ? clickPlayerShuffleOff : clickPlayerShuffleOn }
                  
                                                                                              //SHUFFLE
                  alt="shuffle"
                >
                  {/* <use xlinkHref="img/icon/sprite.svg#icon-shuffle"></use> */}
                  <use href={mix?`${sprite}#icon-shuffle-off`: `${sprite}#icon-shuffle`} />
                </S.playerBtnShuffleSvg>
              </S.playerBtnShuffle>
            </S.playerControls>

            <S.playerTrackPlay className="track-play">
              <S.playerTrackPlayContain>
                <S.playerTrackPlayImage>
                  {contentVisible ? (
                    <S.playerTrackPlaySvg alt="music">
                      <use href={`${sprite}#icon-note`} />
                    </S.playerTrackPlaySvg>
                  ) : (
                    <SkeletonTheme baseColor="#202020" highlightColor="#444">
                      <S.skeletonImg />
                    </SkeletonTheme>
                  )}
                </S.playerTrackPlayImage>

                <S.playerTrackPlayAuthor>
                  <S.playerTrackPlayAuthorLink href="http://">
                    {contentVisible ? (
                      <span>{activeTrack.name}</span>
                    ) : (
                      <SkeletonTheme baseColor="#202020" highlightColor="#444">
                        <S.skeletonIcon />
                      </SkeletonTheme>
                    )}
                  </S.playerTrackPlayAuthorLink>
                </S.playerTrackPlayAuthor>

                <S.playerTrackPlayAlbum>
                  <S.playerTrackPlayAlbumLink href="http://">
                    {contentVisible ? (
                      <span>{activeTrack.author}</span>
                    ) : (
                      <SkeletonTheme baseColor="#202020" highlightColor="#444">
                        {" "}
                        <S.skeletonIcon />
                      </SkeletonTheme>
                    )}
                  </S.playerTrackPlayAlbumLink>
                </S.playerTrackPlayAlbum>
              </S.playerTrackPlayContain>
              <S.playerTrackPlayLkeDislike>
                <S.playerTrackPlayLke onClick={()=>{console.log('like');renderLikes(activeTrack.id);
                
                // likes()
                
                }} className=" _btn-icon">
                  <S.playerTrackPlayLikeSvg alt="like">                                         
                                                                                                {/* //LIKES */}
                    {/* <use xlinkHref="img/icon/sprite.svg#icon-like-liked"></use> */}
                    <use href={

liked? `${sprite}#icon-like-liked`: `${sprite}#icon-like`
                      // true? `${sprite}#icon-like-liked`: `${sprite}#icon-like`
                      
                      // `${sprite}#icon-like-liked`
                      
                      
                      } />

{console.log(activeTrackRedux.stared_user)}
                  </S.playerTrackPlayLikeSvg>
                </S.playerTrackPlayLke>
                <S.playerTrackPlayDisLke onClick={()=>{console.log('disLike');renderDisLikes(activeTrack.id)}} className="_btn-icon">
                  <S.playerTrackPlayDisLikeSvg alt="dislike">
                    <use xlinkHref="img/icon/sprite.svg#icon-dislike"></use>
                    <use href={`${sprite}#icon-dislike`} />
                  </S.playerTrackPlayDisLikeSvg>
                </S.playerTrackPlayDisLke>
              </S.playerTrackPlayLkeDislike>
            </S.playerTrackPlay>
          </S.barPlayer_player>
          <S.playerBarVolBlock className="volume">
            <S.playerBarVolContent>
              <S.playerBarVolImg>
                <S.playerBarVolSvg alt="volume">
                  <use xlinkHref="img/icon/sprite.svg#icon-volume"></use>
                  <use href={`${sprite}#icon-volume`} />
                </S.playerBarVolSvg>
              </S.playerBarVolImg>
              <S.playerBarVolProgress className="_btn">
                <S.playerBarVolProgressLine
                  onChange={(e) => {
                    let volumeRange = e.target.value / 100;
                    realPlayer.current.volume = volumeRange;
                    setVolumeOn(volumeRange);
                    
                  }}
                  className="_btn"
                  type="range"
                  name="range"
                />
              </S.playerBarVolProgress>
            </S.playerBarVolContent>
          </S.playerBarVolBlock>
        </S.playerBlock>
      </S.barContent>
    </S.bar>
    
  );
  
}
