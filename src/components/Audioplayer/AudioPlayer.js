import sprite from "./sprite.svg";
// import "../Audioplayer/AudioPlayer.css"
import React, { useState } from "react";

import "react-loading-skeleton/dist/skeleton.css";
import { SkeletonTheme } from "react-loading-skeleton";

import * as S from "./PlayerStyles";

export function Player(props) {
  const [contentVisible, setContentVisible] = useState(false);
  setTimeout(() => {
    setContentVisible(true);
  }, 4000);

  return (
    <S.bar>
      <S.barContent>
        <S.progress></S.progress>
        <S.playerBlock>
          <S.barPlayer_player>
            <S.playerControls>
              <S.playerBtnPrev>
                <S.playerBtnPrevSvg alt="prev">
                  <use xlinkHref="img/icon/sprite.svg#icon-prev"></use>
                  <use href={`${sprite}#icon-prev`} />
                </S.playerBtnPrevSvg>
              </S.playerBtnPrev>
              <S.playerBtnPlay className="_btn">
                <S.playerBtnPlaySvg alt="play">
                  <use xlinkHref="img/icon/sprite.svg#icon-play"></use>
                  <use href={`${sprite}#icon-play`} />
                </S.playerBtnPlaySvg>
              </S.playerBtnPlay>
              <S.playerBtnNext>
                <S.playerBtnNextSvg alt="next">
                  <use xlinkHref="img/icon/sprite.svg#icon-next"></use>
                  <use href={`${sprite}#icon-next`} />
                </S.playerBtnNextSvg>
              </S.playerBtnNext>
              <S.playerBtnRepeat className="_btn-icon">
                <S.playerBtnRepeatSvg alt="repeat">
                  <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
                  <use href={`${sprite}#icon-repeat`} />
                </S.playerBtnRepeatSvg>
              </S.playerBtnRepeat>
              <S.playerBtnShuffle className=" _btn-icon">
                <S.playerBtnShuffleSvg alt="shuffle">
                  <use xlinkHref="img/icon/sprite.svg#icon-shuffle"></use>
                  <use href={`${sprite}#icon-shuffle`} />
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
                      <span>Ты та...</span>
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
                      <span>Баста</span>
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
                <S.playerTrackPlayLke className=" _btn-icon">
                  <S.playerTrackPlayLikeSvg alt="like">
                    <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                    <use href={`${sprite}#icon-like`} />
                  </S.playerTrackPlayLikeSvg>
                </S.playerTrackPlayLke>
                <S.playerTrackPlayDisLke className="_btn-icon">
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
