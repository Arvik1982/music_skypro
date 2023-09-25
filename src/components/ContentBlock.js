import sprite from "../img/icon/sprite.svg";
import "../components/ContentBlock.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import React, { useState } from "react";
import styled from "styled-components";

const StyledCentralBlockContent = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
`;
const StyledCentralBlockContentTitle = styled.div`
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
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  margin-bottom: 24px;
`;
const StyledCentralBlock_playlistTitle = styled(StyledCentralBlockContentTitle)``


const StyledCentralBlockContentPlaylist = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  overflow-y: auto;
`;
const StyledPlaylistTitleCol = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 2px;
  color: #696969;
  text-transform: uppercase;
`;
const StyledPlaylistTitleCol01 = styled(StyledPlaylistTitleCol)`
  width: 447px;
`;
const StyledPlaylistTitleCol02 = styled(StyledPlaylistTitleCol)`
  width: 321px;
`;
const StyledPlaylistTitleCol03 = styled(StyledPlaylistTitleCol)`
  width: 245px;
`;
const StyledPlaylistTitleCol04 = styled(StyledPlaylistTitleCol)`
  width: 60px;
  text-align: end;
`;

const StyledPlaylist__item = styled.div`
  width: 100%;
  display: block;
  margin-bottom: 12px;
`;

const StyledPlaylist__track = styled.div`
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
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`;
const StyledTrack__titleSpan = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #4e4e4e;
`;
const StyledTrack__title = styled.div`
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
  width: 447px;
`;
const StyledTrack__titleImage = styled.div`
  width: 51px;
  height: 51px;
  padding: 16px;
  background: #313131;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin-right: 17px;
`;
const StyledTrack__authorLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  text-align: left;
`;
const StyledTrack__titleLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
`;
const StyledPlaylist__titleSvg = styled.svg`
  width: 12px;
  height: 12px;
  fill: transparent;
  stroke: #696969;
`;
const StyledTrack__titleSvg = styled.svg`
  width: 18px;
  height: 17px;
  fill: transparent;
  stroke: #4e4e4e;
`;
const StyledTrack__author = styled.div`
  width: 321px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
`;
const StyledTrack__album = styled.div`
  width: 245px;
`;
const StyledTrack_titleText = styled.div``;
const StyledTrack__albumLink = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #696969;
`;
const StyledTrack_time = styled.div``;

const StyledTrack__timeSvg = styled.svg`
  width: 14px;
  height: 12px;
  margin-right: 17px;
  fill: transparent;
  stroke: #696969;
`;
const StyledTrack__timeText = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: right;
  color: #696969;
`;
//SkeletonStyle
const Skeleton_square = styled(Skeleton)`
  width: 50px;
  height: 50px;
  background-color: rgb(115, 111, 111);
`;
const Skeleton_line = styled(Skeleton)`
  width: 250px;
  height: 30px;
  background-color: gray;
`;

const Skeleton_lineMini = styled(Skeleton)`
  margin-top: 20px;
  width: 50px;
  height: 25px;
  background-color: #202020;
`;
const Skeleton_displayNo = styled(Skeleton)`
  display: none;
`;

// const Styled_=styled.div``

export function Content(props) {
  const [contentVisible, setContentVisible] = useState(false);
  setTimeout(() => {
    setContentVisible(true);
  }, 1000);

  return (
    <StyledCentralBlockContent>
      
      <StyledCentralBlock_playlistTitle>
        <StyledPlaylistTitleCol01>Трек</StyledPlaylistTitleCol01>
        <StyledPlaylistTitleCol02>ИСПОЛНИТЕЛЬ</StyledPlaylistTitleCol02>
        <StyledPlaylistTitleCol03>АЛЬБОМ</StyledPlaylistTitleCol03>
        <StyledPlaylistTitleCol04>
          <StyledPlaylist__titleSvg alt="time">
            <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
          </StyledPlaylist__titleSvg>
        </StyledPlaylistTitleCol04>
      </StyledCentralBlock_playlistTitle>
      <StyledCentralBlockContentPlaylist>
        <StyledPlaylist__item>
          <StyledPlaylist__track>
            <StyledTrack__title>
              <StyledTrack__titleImage>
                {contentVisible ? (
                  <StyledTrack__titleSvg alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                    <use href={`${sprite}#icon-note`} />
                  </StyledTrack__titleSvg>
                ) : (
                  <SkeletonTheme baseColor="#202020" highlightColor="#444">
                    <Skeleton_square />
                  </SkeletonTheme>
                )}
              </StyledTrack__titleImage>
              <StyledTrack_titleText>
                <StyledTrack__titleLink href="http://">
                  {contentVisible ? (
                    <span>Guilt</span>
                  ) : (
                    <SkeletonTheme baseColor="#202020" highlightColor="#444">
                      <Skeleton_line />
                    </SkeletonTheme>
                  )}
                  <StyledTrack__titleSpan></StyledTrack__titleSpan>
                </StyledTrack__titleLink>
              </StyledTrack_titleText>
            </StyledTrack__title>
            <StyledTrack__author>
              <StyledTrack__authorLink href="http://">
                {contentVisible ? (
                  <span>Nero</span>
                ) : (
                  <SkeletonTheme baseColor="#202020" highlightColor="#444">
                    <Skeleton_line />
                  </SkeletonTheme>
                )}
              </StyledTrack__authorLink>
            </StyledTrack__author>
            <StyledTrack__album>
              <StyledTrack__albumLink href="http://">
                {contentVisible ? (
                  <span>Welcome Reality</span>
                ) : (
                  <SkeletonTheme baseColor="#202020" highlightColor="#444">
                    <Skeleton_line />
                  </SkeletonTheme>
                )}
              </StyledTrack__albumLink>
            </StyledTrack__album>
            <StyledTrack_time>
              {contentVisible ? (
                <StyledTrack__timeSvg alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                  <use href={`${sprite}#icon-like`} />
                </StyledTrack__timeSvg>
              ) : (
                <SkeletonTheme baseColor="#202020" highlightColor="#444">
                  <Skeleton_lineMini />
                </SkeletonTheme>
              )}

              {contentVisible ? (
                <StyledTrack__timeText>4:44</StyledTrack__timeText>
              ) : (
                <SkeletonTheme baseColor="#202020" highlightColor="#444">
                  <Skeleton_displayNo />
                </SkeletonTheme>
              )}
            </StyledTrack_time>
          </StyledPlaylist__track>
        </StyledPlaylist__item>

        <StyledPlaylist__item>
          <StyledPlaylist__track className="track">
            <StyledTrack__title>
              <StyledTrack__titleImage>
                {contentVisible ? (
                  <StyledTrack__titleSvg alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                    <use href={`${sprite}#icon-note`} />
                  </StyledTrack__titleSvg>
                ) : (
                  <SkeletonTheme baseColor="#202020" highlightColor="#444">
                    {" "}
                    <Skeleton_square />
                  </SkeletonTheme>
                )}
              </StyledTrack__titleImage>
              <StyledTrack_titleText>
                <StyledTrack__titleLink href="http://">
                  {contentVisible ? (
                    <span>Elektro</span>
                  ) : (
                    <SkeletonTheme baseColor="#202020" highlightColor="#444">
                      <Skeleton_line />
                    </SkeletonTheme>
                  )}
                  <StyledTrack__titleSpan></StyledTrack__titleSpan>
                </StyledTrack__titleLink>
              </StyledTrack_titleText>
            </StyledTrack__title>
            <StyledTrack__author>
              <StyledTrack__authorLink href="http://">
                {contentVisible ? (
                  <span>Dynoro, Outwork, Mr. Gee</span>
                ) : (
                  <SkeletonTheme baseColor="#202020" highlightColor="#444">
                    <Skeleton_line />
                  </SkeletonTheme>
                )}
              </StyledTrack__authorLink>
            </StyledTrack__author>
            <StyledTrack__album>
              <StyledTrack__albumLink href="http://">
                {contentVisible ? (
                  <span>Elektro</span>
                ) : (
                  <SkeletonTheme baseColor="#202020" highlightColor="#444">
                    <Skeleton_line />
                  </SkeletonTheme>
                )}
              </StyledTrack__albumLink>
            </StyledTrack__album>
            <StyledTrack_time>
              {contentVisible ? (
                <StyledTrack__timeSvg alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                  <use href={`${sprite}#icon-like`} />
                </StyledTrack__timeSvg>
              ) : (
                <SkeletonTheme baseColor="#202020" highlightColor="#444">
                  {" "}
                  <Skeleton_lineMini />
                </SkeletonTheme>
              )}

              {contentVisible ? (
                <StyledTrack__timeText>2:22</StyledTrack__timeText>
              ) : (
                <SkeletonTheme baseColor="#202020" highlightColor="#444">
                  <Skeleton_displayNo />
                </SkeletonTheme>
              )}
            </StyledTrack_time>
          </StyledPlaylist__track>
        </StyledPlaylist__item>

        <StyledPlaylist__item>
          <StyledPlaylist__track className="track">
            <StyledTrack__title>
              <StyledTrack__titleImage>
                {contentVisible ? (
                  <StyledTrack__titleSvg alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                    <use href={`${sprite}#icon-note`} />
                  </StyledTrack__titleSvg>
                ) : (
                  <SkeletonTheme baseColor="#202020" highlightColor="#444">
                    {" "}
                    <Skeleton_square />
                  </SkeletonTheme>
                )}
              </StyledTrack__titleImage>
              <StyledTrack_titleText>
                <StyledTrack__titleLink href="http://">
                  {contentVisible ? (
                    <span>I’m Fire </span>
                  ) : (
                    <SkeletonTheme baseColor="#202020" highlightColor="#444">
                      <Skeleton_line />
                    </SkeletonTheme>
                  )}

                  <StyledTrack__titleSpan></StyledTrack__titleSpan>
                </StyledTrack__titleLink>
              </StyledTrack_titleText>
            </StyledTrack__title>
            <StyledTrack__author>
              <StyledTrack__authorLink href="http://">
                {contentVisible ? (
                  <span>Ali Bakgor </span>
                ) : (
                  <SkeletonTheme baseColor="#202020" highlightColor="#444">
                    <Skeleton_line />
                  </SkeletonTheme>
                )}
              </StyledTrack__authorLink>
            </StyledTrack__author>
            <StyledTrack__album>
              <StyledTrack__albumLink href="http://">
                {contentVisible ? (
                  <span>I’m Fire </span>
                ) : (
                  <SkeletonTheme baseColor="#202020" highlightColor="#444">
                    <Skeleton_line />
                  </SkeletonTheme>
                )}
              </StyledTrack__albumLink>
            </StyledTrack__album>
            <StyledTrack_time>
              {contentVisible ? (
                <StyledTrack__timeSvg alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                  <use href={`${sprite}#icon-like`} />
                </StyledTrack__timeSvg>
              ) : (
                <SkeletonTheme baseColor="#202020" highlightColor="#444">
                  <Skeleton_lineMini />
                </SkeletonTheme>
              )}

              {contentVisible ? (
                <StyledTrack__timeText>2:44</StyledTrack__timeText>
              ) : (
                <SkeletonTheme baseColor="#202020" highlightColor="#444">
                  <Skeleton_displayNo />
                </SkeletonTheme>
              )}
            </StyledTrack_time>
          </StyledPlaylist__track>
        </StyledPlaylist__item>

        <StyledPlaylist__item>
          <StyledPlaylist__track className="track">
            <StyledTrack__title>
              <StyledTrack__titleImage>
                {contentVisible ? (
                  <StyledTrack__titleSvg alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                    <use href={`${sprite}#icon-note`} />
                  </StyledTrack__titleSvg>
                ) : (
                  <SkeletonTheme baseColor="#202020" highlightColor="#444">
                    {" "}
                    <Skeleton_square />
                  </SkeletonTheme>
                )}
              </StyledTrack__titleImage>
              <StyledTrack_titleText>
                <StyledTrack__titleLink href="http://">
                  {contentVisible ? (
                    <span>Non Stop </span>
                  ) : (
                    <SkeletonTheme baseColor="#202020" highlightColor="#444">
                      <Skeleton_line />
                    </SkeletonTheme>
                  )}

                  <StyledTrack__titleSpan>(Remix)</StyledTrack__titleSpan>
                </StyledTrack__titleLink>
              </StyledTrack_titleText>
            </StyledTrack__title>
            <StyledTrack__author>
              <StyledTrack__authorLink href="http://">
                {contentVisible ? (
                  <span>Стоункат, Psychopath</span>
                ) : (
                  <SkeletonTheme baseColor="#202020" highlightColor="#444">
                    <Skeleton_line />
                  </SkeletonTheme>
                )}
              </StyledTrack__authorLink>
            </StyledTrack__author>
            <StyledTrack__album>
              <StyledTrack__albumLink href="http://">
                {contentVisible ? (
                  <span>Non Stop </span>
                ) : (
                  <SkeletonTheme baseColor="#202020" highlightColor="#444">
                    <Skeleton_line />
                  </SkeletonTheme>
                )}
              </StyledTrack__albumLink>
            </StyledTrack__album>
            <StyledTrack_time>
              {contentVisible ? (
                <StyledTrack__timeSvg alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                  <use href={`${sprite}#icon-like`} />
                </StyledTrack__timeSvg>
              ) : (
                <SkeletonTheme baseColor="#202020" highlightColor="#444">
                  <Skeleton_lineMini />
                </SkeletonTheme>
              )}

              {contentVisible ? (
                <StyledTrack__timeText>4:12</StyledTrack__timeText>
              ) : (
                <SkeletonTheme baseColor="#202020" highlightColor="#444">
                  <Skeleton_displayNo />
                </SkeletonTheme>
              )}
            </StyledTrack_time>
          </StyledPlaylist__track>
        </StyledPlaylist__item>

        <StyledPlaylist__item>
          <StyledPlaylist__track className=" track">
            <StyledTrack__title>
              <StyledTrack__titleImage>
                {contentVisible ? (
                  <StyledTrack__titleSvg alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                    <use href={`${sprite}#icon-note`} />
                  </StyledTrack__titleSvg>
                ) : (
                  <SkeletonTheme baseColor="#202020" highlightColor="#444">
                    {" "}
                    <Skeleton_square />
                  </SkeletonTheme>
                )}
              </StyledTrack__titleImage>
              <StyledTrack_titleText>
                <StyledTrack__titleLink href="http://">
                  {contentVisible ? (
                    <span>Run Run </span>
                  ) : (
                    <SkeletonTheme baseColor="#202020" highlightColor="#444">
                      <Skeleton_line />
                    </SkeletonTheme>
                  )}

                  <StyledTrack__titleSpan>(feat. AR/CO)</StyledTrack__titleSpan>
                </StyledTrack__titleLink>
              </StyledTrack_titleText>
            </StyledTrack__title>
            <StyledTrack__author>
              <StyledTrack__authorLink href="http://">
                {contentVisible ? (
                  <span>Jaded, Will Clarke, AR/CO </span>
                ) : (
                  <SkeletonTheme baseColor="#202020" highlightColor="#444">
                    <Skeleton_line />
                  </SkeletonTheme>
                )}
              </StyledTrack__authorLink>
            </StyledTrack__author>
            <StyledTrack__album>
              <StyledTrack__albumLink href="http://">
                {contentVisible ? (
                  <span>Run Run</span>
                ) : (
                  <SkeletonTheme baseColor="#202020" highlightColor="#444">
                    <Skeleton_line />
                  </SkeletonTheme>
                )}
              </StyledTrack__albumLink>
            </StyledTrack__album>
            <StyledTrack_time>
              {contentVisible ? (
                <StyledTrack__timeSvg alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                  <use href={`${sprite}#icon-like`} />
                </StyledTrack__timeSvg>
              ) : (
                <SkeletonTheme baseColor="#202020" highlightColor="#444">
                  {" "}
                  <Skeleton_lineMini />
                </SkeletonTheme>
              )}

              {contentVisible ? (
                <StyledTrack__timeText>2:54</StyledTrack__timeText>
              ) : (
                <SkeletonTheme baseColor="#202020" highlightColor="#444">
                  <Skeleton_displayNo />
                </SkeletonTheme>
              )}
            </StyledTrack_time>
          </StyledPlaylist__track>
        </StyledPlaylist__item>

        <StyledPlaylist__item>
          <StyledPlaylist__track className="track">
            <StyledTrack__title>
              <StyledTrack__titleImage>
                {contentVisible ? (
                  <StyledTrack__titleSvg alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                    <use href={`${sprite}#icon-note`} />
                  </StyledTrack__titleSvg>
                ) : (
                  <SkeletonTheme baseColor="#202020" highlightColor="#444">
                    {" "}
                    <Skeleton_square />
                  </SkeletonTheme>
                )}
              </StyledTrack__titleImage>
              <StyledTrack_titleText>
                <StyledTrack__titleLink href="http://">
                  {contentVisible ? (
                    <span>Eyes on Fire</span>
                  ) : (
                    <SkeletonTheme baseColor="#202020" highlightColor="#444">
                      <Skeleton_line />
                    </SkeletonTheme>
                  )}

                  <StyledTrack__titleSpan>
                    (Zeds Dead Remix)
                  </StyledTrack__titleSpan>
                </StyledTrack__titleLink>
              </StyledTrack_titleText>
            </StyledTrack__title>
            <StyledTrack__author>
              <StyledTrack__authorLink href="http://">
                {contentVisible ? (
                  <span>Blue Foundation, Zeds Dead </span>
                ) : (
                  <SkeletonTheme baseColor="#202020" highlightColor="#444">
                    <Skeleton_line />
                  </SkeletonTheme>
                )}
              </StyledTrack__authorLink>
            </StyledTrack__author>
            <StyledTrack__album>
              <StyledTrack__albumLink href="http://">
                {contentVisible ? (
                  <span>Eyes on Fire</span>
                ) : (
                  <SkeletonTheme baseColor="#202020" highlightColor="#444">
                    <Skeleton_line />
                  </SkeletonTheme>
                )}
              </StyledTrack__albumLink>
            </StyledTrack__album>
            <StyledTrack_time>
              {contentVisible ? (
                <StyledTrack__timeSvg alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                  <use href={`${sprite}#icon-like`} />
                </StyledTrack__timeSvg>
              ) : (
                <SkeletonTheme baseColor="#202020" highlightColor="#444">
                  <Skeleton_lineMini />
                </SkeletonTheme>
              )}

              {contentVisible ? (
                <StyledTrack__timeText>5:20</StyledTrack__timeText>
              ) : (
                <SkeletonTheme baseColor="#202020" highlightColor="#444">
                  <Skeleton_displayNo />
                </SkeletonTheme>
              )}
            </StyledTrack_time>
          </StyledPlaylist__track>
        </StyledPlaylist__item>

        <StyledPlaylist__item>
          <StyledPlaylist__track className="track">
            <StyledTrack__title>
              <StyledTrack__titleImage>
                {contentVisible ? (
                  <StyledTrack__titleSvg alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                    <use href={`${sprite}#icon-note`} />
                  </StyledTrack__titleSvg>
                ) : (
                  <SkeletonTheme baseColor="#202020" highlightColor="#444">
                    <Skeleton_square />
                  </SkeletonTheme>
                )}
              </StyledTrack__titleImage>
              <StyledTrack_titleText>
                <StyledTrack__titleLink href="http://">
                  {contentVisible ? (
                    <span>Mucho Bien</span>
                  ) : (
                    <SkeletonTheme baseColor="#202020" highlightColor="#444">
                      <Skeleton_line />
                    </SkeletonTheme>
                  )}

                  <StyledTrack__titleSpan>
                    (Hi Profile Remix)
                  </StyledTrack__titleSpan>
                </StyledTrack__titleLink>
              </StyledTrack_titleText>
            </StyledTrack__title>
            <StyledTrack__author>
              <StyledTrack__authorLink href="http://">
                {contentVisible ? (
                  <span>HYBIT, Mr. Black, Offer Nissim, Hi Profile</span>
                ) : (
                  <SkeletonTheme baseColor="#202020" highlightColor="#444">
                    <Skeleton_line />
                  </SkeletonTheme>
                )}
              </StyledTrack__authorLink>
            </StyledTrack__author>
            <StyledTrack__album>
              <StyledTrack__albumLink href="http://">
                {contentVisible ? (
                  <span>Mucho Bien</span>
                ) : (
                  <SkeletonTheme baseColor="#202020" highlightColor="#444">
                    <Skeleton_line />
                  </SkeletonTheme>
                )}
              </StyledTrack__albumLink>
            </StyledTrack__album>
            <StyledTrack_time>
              {contentVisible ? (
                <StyledTrack__timeSvg alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                  <use href={`${sprite}#icon-like`} />
                </StyledTrack__timeSvg>
              ) : (
                <SkeletonTheme baseColor="#202020" highlightColor="#444">
                  <Skeleton_lineMini />
                </SkeletonTheme>
              )}

              {contentVisible ? (
                <StyledTrack__timeText>3:41</StyledTrack__timeText>
              ) : (
                <SkeletonTheme baseColor="#202020" highlightColor="#444">
                  <Skeleton_displayNo />
                </SkeletonTheme>
              )}
            </StyledTrack_time>
          </StyledPlaylist__track>
        </StyledPlaylist__item>

        <StyledPlaylist__item>
          <StyledPlaylist__track className="track">
            <StyledTrack__title>
              <StyledTrack__titleImage>
                {contentVisible ? (
                  <StyledTrack__titleSvg alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                    <use href={`${sprite}#icon-note`} />
                  </StyledTrack__titleSvg>
                ) : (
                  <SkeletonTheme baseColor="#202020" highlightColor="#444">
                    {" "}
                    <Skeleton_square />
                  </SkeletonTheme>
                )}
              </StyledTrack__titleImage>
              <StyledTrack_titleText>
                <StyledTrack__titleLink href="http://">
                  {contentVisible ? (
                    <span>Knives n Cherries</span>
                  ) : (
                    <SkeletonTheme baseColor="#202020" highlightColor="#444">
                      {" "}
                      <Skeleton_line />
                    </SkeletonTheme>
                  )}

                  <StyledTrack__titleSpan></StyledTrack__titleSpan>
                </StyledTrack__titleLink>
              </StyledTrack_titleText>
            </StyledTrack__title>
            <StyledTrack__author>
              <StyledTrack__authorLink href="http://">
                {contentVisible ? (
                  <span>minthaze</span>
                ) : (
                  <SkeletonTheme baseColor="#202020" highlightColor="#444">
                    <Skeleton_line />
                  </SkeletonTheme>
                )}
              </StyledTrack__authorLink>
            </StyledTrack__author>
            <StyledTrack__album>
              <StyledTrack__albumLink href="http://">
                {contentVisible ? (
                  <span>Captivating</span>
                ) : (
                  <SkeletonTheme baseColor="#202020" highlightColor="#444">
                    <Skeleton_line />
                  </SkeletonTheme>
                )}
              </StyledTrack__albumLink>
            </StyledTrack__album>
            <StyledTrack_time>
              {contentVisible ? (
                <StyledTrack__timeSvg alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                  <use href={`${sprite}#icon-like`} />
                </StyledTrack__timeSvg>
              ) : (
                <SkeletonTheme baseColor="#202020" highlightColor="#444">
                  <Skeleton_lineMini />
                </SkeletonTheme>
              )}

              {contentVisible ? (
                <StyledTrack__timeText>1:48</StyledTrack__timeText>
              ) : (
                <SkeletonTheme baseColor="#202020" highlightColor="#444">
                  <Skeleton_displayNo />
                </SkeletonTheme>
              )}
            </StyledTrack_time>
          </StyledPlaylist__track>
        </StyledPlaylist__item>

        <StyledPlaylist__item>
          <StyledPlaylist__track className="track">
            <StyledTrack__title>
              <StyledTrack__titleImage>
                {contentVisible ? (
                  <StyledTrack__titleSvg alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                    <use href={`${sprite}#icon-note`} />
                  </StyledTrack__titleSvg>
                ) : (
                  <SkeletonTheme baseColor="#202020" highlightColor="#444">
                    {" "}
                    <Skeleton_square />
                  </SkeletonTheme>
                )}
              </StyledTrack__titleImage>
              <StyledTrack_titleText>
                <StyledTrack__titleLink href="http://">
                  {contentVisible ? (
                    <span>Knives n Cherries</span>
                  ) : (
                    <SkeletonTheme baseColor="#202020" highlightColor="#444">
                      {" "}
                      <Skeleton_line />
                    </SkeletonTheme>
                  )}

                  <StyledTrack__titleSpan></StyledTrack__titleSpan>
                </StyledTrack__titleLink>
              </StyledTrack_titleText>
            </StyledTrack__title>
            <StyledTrack__author>
              <StyledTrack__authorLink href="http://">
                {contentVisible ? (
                  <span>minthaze</span>
                ) : (
                  <SkeletonTheme baseColor="#202020" highlightColor="#444">
                    <Skeleton_line />
                  </SkeletonTheme>
                )}
              </StyledTrack__authorLink>
            </StyledTrack__author>
            <StyledTrack__album>
              <StyledTrack__albumLink href="http://">
                {contentVisible ? (
                  <span>Captivating</span>
                ) : (
                  <SkeletonTheme baseColor="#202020" highlightColor="#444">
                    <Skeleton_line />
                  </SkeletonTheme>
                )}
              </StyledTrack__albumLink>
            </StyledTrack__album>
            <StyledTrack_time>
              {contentVisible ? (
                <StyledTrack__timeSvg alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                  <use href={`${sprite}#icon-like`} />
                </StyledTrack__timeSvg>
              ) : (
                <SkeletonTheme baseColor="#202020" highlightColor="#444">
                  <Skeleton_lineMini />
                </SkeletonTheme>
              )}

              {contentVisible ? (
                <StyledTrack__timeText>1:48</StyledTrack__timeText>
              ) : (
                <SkeletonTheme baseColor="#202020" highlightColor="#444">
                  {" "}
                  <Skeleton_displayNo />
                </SkeletonTheme>
              )}
            </StyledTrack_time>
          </StyledPlaylist__track>
        </StyledPlaylist__item>
        <StyledPlaylist__item>
          <StyledPlaylist__track className="track">
            <StyledTrack__title>
              <StyledTrack__titleImage>
                {contentVisible ? (
                  <StyledTrack__titleSvg alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                    <use href={`${sprite}#icon-note`} />
                  </StyledTrack__titleSvg>
                ) : (
                  <SkeletonTheme baseColor="#202020" highlightColor="#444">
                    {" "}
                    <Skeleton_square />
                  </SkeletonTheme>
                )}
              </StyledTrack__titleImage>
              <StyledTrack_titleText>
                <StyledTrack__titleLink href="http://">
                  {contentVisible ? (
                    <span>Knives n Cherries</span>
                  ) : (
                    <SkeletonTheme baseColor="#202020" highlightColor="#444">
                      {" "}
                      <Skeleton_line />
                    </SkeletonTheme>
                  )}

                  <StyledTrack__titleSpan></StyledTrack__titleSpan>
                </StyledTrack__titleLink>
              </StyledTrack_titleText>
            </StyledTrack__title>
            <StyledTrack__author>
              <StyledTrack__authorLink href="http://">
                {contentVisible ? (
                  <span>minthaze</span>
                ) : (
                  <SkeletonTheme baseColor="#202020" highlightColor="#444">
                    {" "}
                    <Skeleton_line />
                  </SkeletonTheme>
                )}
              </StyledTrack__authorLink>
            </StyledTrack__author>
            <StyledTrack__album>
              <StyledTrack__albumLink href="http://">
                {contentVisible ? (
                  <span>Captivating</span>
                ) : (
                  <SkeletonTheme baseColor="#202020" highlightColor="#444">
                    {" "}
                    <Skeleton_line />
                  </SkeletonTheme>
                )}
              </StyledTrack__albumLink>
            </StyledTrack__album>
            <StyledTrack_time>
              {contentVisible ? (
                <StyledTrack__timeSvg alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                  <use href={`${sprite}#icon-like`} />
                </StyledTrack__timeSvg>
              ) : (
                <SkeletonTheme baseColor="#202020" highlightColor="#444">
                  <Skeleton_lineMini />
                </SkeletonTheme>
              )}

              {contentVisible ? (
                <StyledTrack__timeText>4:44</StyledTrack__timeText>
              ) : (
                <SkeletonTheme baseColor="#202020" highlightColor="#444">
                  <Skeleton_displayNo />
                </SkeletonTheme>
              )}
            </StyledTrack_time>
          </StyledPlaylist__track>
        </StyledPlaylist__item>
        <StyledPlaylist__item>
          <StyledPlaylist__track className="track">
            <StyledTrack__title>
              <StyledTrack__titleImage>
                {contentVisible ? (
                  <StyledTrack__titleSvg alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                    <use href={`${sprite}#icon-note`} />
                  </StyledTrack__titleSvg>
                ) : (
                  <SkeletonTheme baseColor="#202020" highlightColor="#444">
                    <Skeleton_square />
                  </SkeletonTheme>
                )}
              </StyledTrack__titleImage>
              <StyledTrack_titleText>
                <StyledTrack__titleLink href="http://">
                  {contentVisible ? (
                    <span>Knives n Cherries</span>
                  ) : (
                    <SkeletonTheme baseColor="#202020" highlightColor="#444">
                      {" "}
                      <Skeleton_line />
                    </SkeletonTheme>
                  )}

                  <StyledTrack__titleSpan></StyledTrack__titleSpan>
                </StyledTrack__titleLink>
              </StyledTrack_titleText>
            </StyledTrack__title>
            <StyledTrack__author>
              <StyledTrack__authorLink href="http://">
                {contentVisible ? (
                  <span>minthaze</span>
                ) : (
                  <SkeletonTheme baseColor="#202020" highlightColor="#444">
                    <Skeleton_line />
                  </SkeletonTheme>
                )}
              </StyledTrack__authorLink>
            </StyledTrack__author>
            <StyledTrack__album>
              <StyledTrack__albumLink href="http://">
                {contentVisible ? (
                  <span> Captivating</span>
                ) : (
                  <SkeletonTheme baseColor="#202020" highlightColor="#444">
                    <Skeleton_line />
                  </SkeletonTheme>
                )}
              </StyledTrack__albumLink>
            </StyledTrack__album>
            <StyledTrack_time>
              {contentVisible ? (
                <StyledTrack__timeSvg alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                  <use href={`${sprite}#icon-like`} />
                </StyledTrack__timeSvg>
              ) : (
                <SkeletonTheme baseColor="#202020" highlightColor="#444">
                  <Skeleton_lineMini />
                </SkeletonTheme>
              )}

              {contentVisible ? (
                <StyledTrack__timeText>9:44</StyledTrack__timeText>
              ) : (
                <SkeletonTheme baseColor="#202020" highlightColor="#444">
                  <Skeleton_displayNo />
                </SkeletonTheme>
              )}
            </StyledTrack_time>
          </StyledPlaylist__track>
        </StyledPlaylist__item>
        <StyledPlaylist__item>
          <StyledPlaylist__track className="track">
            <StyledTrack__title>
              <StyledTrack__titleImage>
                {contentVisible ? (
                  <StyledTrack__titleSvg alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                    <use href={`${sprite}#icon-note`} />
                  </StyledTrack__titleSvg>
                ) : (
                  <SkeletonTheme baseColor="#202020" highlightColor="#444">
                    <Skeleton_square />
                  </SkeletonTheme>
                )}
              </StyledTrack__titleImage>
              <StyledTrack_titleText>
                <StyledTrack__titleLink href="http://">
                  {contentVisible ? (
                    <span>Knives n Cherries</span>
                  ) : (
                    <SkeletonTheme baseColor="#202020" highlightColor="#444">
                      <Skeleton_line />
                    </SkeletonTheme>
                  )}

                  <StyledTrack__titleSpan></StyledTrack__titleSpan>
                </StyledTrack__titleLink>
              </StyledTrack_titleText>
            </StyledTrack__title>
            <StyledTrack__author>
              <StyledTrack__authorLink href="http://">
                {contentVisible ? (
                  <span>minthaze</span>
                ) : (
                  <SkeletonTheme baseColor="#202020" highlightColor="#444">
                    <Skeleton_line />
                  </SkeletonTheme>
                )}
              </StyledTrack__authorLink>
            </StyledTrack__author>
            <StyledTrack__album>
              <StyledTrack__albumLink href="http://">
                {contentVisible ? (
                  <span>Captivating</span>
                ) : (
                  <SkeletonTheme baseColor="#202020" highlightColor="#444">
                    <Skeleton_line />
                  </SkeletonTheme>
                )}
              </StyledTrack__albumLink>
            </StyledTrack__album>
            <StyledTrack_time>
              {contentVisible ? (
                <StyledTrack__timeSvg alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                  <use href={`${sprite}#icon-like`} />
                </StyledTrack__timeSvg>
              ) : (
                <SkeletonTheme baseColor="#202020" highlightColor="#444">
                  <Skeleton_lineMini />
                </SkeletonTheme>
              )}

              {contentVisible ? (
                <StyledTrack__timeText>2:40</StyledTrack__timeText>
              ) : (
                <SkeletonTheme baseColor="#202020" highlightColor="#444">
                  <Skeleton_displayNo />
                </SkeletonTheme>
              )}
            </StyledTrack_time>
          </StyledPlaylist__track>
        </StyledPlaylist__item>
        <StyledPlaylist__item>
          <StyledPlaylist__track className="track">
            <StyledTrack__title>
              <StyledTrack__titleImage>
                {contentVisible ? (
                  <StyledTrack__titleSvg alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                    <use href={`${sprite}#icon-note`} />
                  </StyledTrack__titleSvg>
                ) : (
                  <SkeletonTheme baseColor="#202020" highlightColor="#444">
                    <Skeleton_square />
                  </SkeletonTheme>
                )}
              </StyledTrack__titleImage>
              <StyledTrack_titleText>
                <StyledTrack__titleLink href="http://">
                  {contentVisible ? (
                    <span>Knives n Cherries</span>
                  ) : (
                    <SkeletonTheme baseColor="#202020" highlightColor="#444">
                      {" "}
                      <Skeleton_line />
                    </SkeletonTheme>
                  )}

                  <StyledTrack__titleSpan></StyledTrack__titleSpan>
                </StyledTrack__titleLink>
              </StyledTrack_titleText>
            </StyledTrack__title>
            <StyledTrack__author>
              <StyledTrack__authorLink href="http://">
                {contentVisible ? (
                  <span>minthaze</span>
                ) : (
                  <SkeletonTheme baseColor="#202020" highlightColor="#444">
                    {" "}
                    <Skeleton_line />
                  </SkeletonTheme>
                )}
              </StyledTrack__authorLink>
            </StyledTrack__author>
            <StyledTrack__album>
              <StyledTrack__albumLink href="http://">
                {contentVisible ? (
                  <span>Captivating</span>
                ) : (
                  <SkeletonTheme baseColor="#202020" highlightColor="#444">
                    {" "}
                    <Skeleton_line />
                  </SkeletonTheme>
                )}
              </StyledTrack__albumLink>
            </StyledTrack__album>
            <StyledTrack_time>
              {contentVisible ? (
                <StyledTrack__timeSvg alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                  <use href={`${sprite}#icon-like`} />
                </StyledTrack__timeSvg>
              ) : (
                <SkeletonTheme baseColor="#202020" highlightColor="#444">
                  <Skeleton_lineMini />
                </SkeletonTheme>
              )}

              {contentVisible ? (
                <StyledTrack__timeText>4:44</StyledTrack__timeText>
              ) : (
                <SkeletonTheme baseColor="#202020" highlightColor="#444">
                  {" "}
                  <Skeleton_displayNo />
                </SkeletonTheme>
              )}
            </StyledTrack_time>
          </StyledPlaylist__track>
        </StyledPlaylist__item>
        <StyledPlaylist__item>
          <StyledPlaylist__track className="track">
            <StyledTrack__title>
              <StyledTrack__titleImage>
                {contentVisible ? (
                  <StyledTrack__titleSvg alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                    <use href={`${sprite}#icon-note`} />
                  </StyledTrack__titleSvg>
                ) : (
                  <SkeletonTheme baseColor="#202020" highlightColor="#444">
                    <Skeleton_square />
                  </SkeletonTheme>
                )}
              </StyledTrack__titleImage>
              <StyledTrack_titleText>
                <StyledTrack__titleLink href="http://">
                  {contentVisible ? (
                    <span>Knives n Cherries</span>
                  ) : (
                    <SkeletonTheme baseColor="#202020" highlightColor="#444">
                      {" "}
                      <Skeleton_line />
                    </SkeletonTheme>
                  )}

                  <StyledTrack__titleSpan></StyledTrack__titleSpan>
                </StyledTrack__titleLink>
              </StyledTrack_titleText>
            </StyledTrack__title>
            <StyledTrack__author>
              <StyledTrack__authorLink href="http://">
                {contentVisible ? (
                  <span>minthaze</span>
                ) : (
                  <SkeletonTheme baseColor="#202020" highlightColor="#444">
                    {" "}
                    <Skeleton_line />
                  </SkeletonTheme>
                )}
              </StyledTrack__authorLink>
            </StyledTrack__author>
            <StyledTrack__album>
              <StyledTrack__albumLink href="http://">
                {contentVisible ? (
                  <span>Captivating</span>
                ) : (
                  <SkeletonTheme baseColor="#202020" highlightColor="#444">
                    {" "}
                    <Skeleton_line />
                  </SkeletonTheme>
                )}
              </StyledTrack__albumLink>
            </StyledTrack__album>
            <StyledTrack_time>
              {contentVisible ? (
                <StyledTrack__timeSvg alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                  <use href={`${sprite}#icon-like`} />
                </StyledTrack__timeSvg>
              ) : (
                <SkeletonTheme baseColor="#202020" highlightColor="#444">
                  <Skeleton_lineMini />
                </SkeletonTheme>
              )}

              {contentVisible ? (
                <StyledTrack__timeText>4:54</StyledTrack__timeText>
              ) : (
                <SkeletonTheme baseColor="#202020" highlightColor="#444">
                  {" "}
                  <Skeleton_displayNo />
                </SkeletonTheme>
              )}
            </StyledTrack_time>
          </StyledPlaylist__track>
        </StyledPlaylist__item>

        <StyledPlaylist__item>
          <StyledPlaylist__track className="track">
            <StyledTrack__title>
              <StyledTrack__titleImage>
                {contentVisible ? (
                  <StyledTrack__titleSvg alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                    <use href={`${sprite}#icon-note`} />
                  </StyledTrack__titleSvg>
                ) : (
                  <SkeletonTheme baseColor="#202020" highlightColor="#444">
                    {" "}
                    <Skeleton_square />
                  </SkeletonTheme>
                )}
              </StyledTrack__titleImage>
              <StyledTrack_titleText>
                <StyledTrack__titleLink href="http://">
                  {contentVisible ? (
                    <span>How Deep Is Your Love</span>
                  ) : (
                    <SkeletonTheme baseColor="#202020" highlightColor="#444">
                      {" "}
                      <Skeleton_line />
                    </SkeletonTheme>
                  )}

                  <StyledTrack__titleSpan></StyledTrack__titleSpan>
                </StyledTrack__titleLink>
              </StyledTrack_titleText>
            </StyledTrack__title>
            <StyledTrack__author>
              <StyledTrack__authorLink href="http://">
                {contentVisible ? (
                  <span>Calvin Harris, Disciples</span>
                ) : (
                  <SkeletonTheme baseColor="#202020" highlightColor="#444">
                    {" "}
                    <Skeleton_line />
                  </SkeletonTheme>
                )}
              </StyledTrack__authorLink>
            </StyledTrack__author>
            <StyledTrack__album>
              <StyledTrack__albumLink href="http://">
                {contentVisible ? (
                  <span>How Deep Is Your Love</span>
                ) : (
                  <SkeletonTheme baseColor="#202020" highlightColor="#444">
                    {" "}
                    <Skeleton_line />
                  </SkeletonTheme>
                )}
              </StyledTrack__albumLink>
            </StyledTrack__album>
            <StyledTrack_time>
              <StyledTrack__timeSvg alt="time">
                <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                <use href={`${sprite}#icon-like`} />
              </StyledTrack__timeSvg>
              <StyledTrack__timeText>3:32</StyledTrack__timeText>
            </StyledTrack_time>
          </StyledPlaylist__track>
        </StyledPlaylist__item>

        <StyledPlaylist__item>
          <StyledPlaylist__track className="track">
            <StyledTrack__title>
              <StyledTrack__titleImage>
                {contentVisible ? (
                  <StyledTrack__titleSvg alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                    <use href={`${sprite}#icon-note`} />
                  </StyledTrack__titleSvg>
                ) : (
                  <SkeletonTheme baseColor="#202020" highlightColor="#444">
                    <Skeleton_square />
                  </SkeletonTheme>
                )}
              </StyledTrack__titleImage>
              <StyledTrack_titleText>
                <StyledTrack__titleLink href="http://">
                  {contentVisible ? (
                    <span>Morena</span>
                  ) : (
                    <SkeletonTheme baseColor="#202020" highlightColor="#444">
                      <Skeleton_line />
                    </SkeletonTheme>
                  )}
                  <StyledTrack__titleSpan></StyledTrack__titleSpan>
                </StyledTrack__titleLink>
              </StyledTrack_titleText>
            </StyledTrack__title>
            <StyledTrack__author>
              <StyledTrack__authorLink href="http://">
                {contentVisible ? (
                  <span>Tom Boxer</span>
                ) : (
                  <SkeletonTheme baseColor="#202020" highlightColor="#444">
                    <Skeleton_line />
                  </SkeletonTheme>
                )}
              </StyledTrack__authorLink>
            </StyledTrack__author>
            <StyledTrack__album>
              <StyledTrack__albumLink href="http://">
                {contentVisible ? (
                  <span>Soundz Made in Romania</span>
                ) : (
                  <SkeletonTheme baseColor="#202020" highlightColor="#444">
                    {" "}
                    <Skeleton_line />
                  </SkeletonTheme>
                )}
              </StyledTrack__albumLink>
            </StyledTrack__album>
            <StyledTrack_time>
              <StyledTrack__timeSvg alt="time">
                <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                <use href={`${sprite}#icon-like`} />
              </StyledTrack__timeSvg>
              <StyledTrack__timeText>3:36</StyledTrack__timeText>
            </StyledTrack_time>
          </StyledPlaylist__track>
        </StyledPlaylist__item>

        <StyledPlaylist__item>
          <StyledPlaylist__track className="track">
            <StyledTrack__title>
              <StyledTrack__titleImage>
                <StyledTrack__titleSvg alt="music">
                  <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                  <use href={`${sprite}#icon-note`} />
                </StyledTrack__titleSvg>
              </StyledTrack__titleImage>
              <StyledTrack_titleText>
                <StyledTrack__titleLink href="http://">
                  <StyledTrack__titleSpan></StyledTrack__titleSpan>
                </StyledTrack__titleLink>
              </StyledTrack_titleText>
            </StyledTrack__title>
            <StyledTrack__author>
              <StyledTrack__authorLink href="http://"></StyledTrack__authorLink>
            </StyledTrack__author>
            <StyledTrack__album>
              <StyledTrack__albumLink href="http://"></StyledTrack__albumLink>
            </StyledTrack__album>
            <StyledTrack_time>
              <StyledTrack__timeSvg alt="time">
                <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                <use href={`${sprite}#icon-like`} />
              </StyledTrack__timeSvg>
              <StyledTrack__timeText></StyledTrack__timeText>
            </StyledTrack_time>
          </StyledPlaylist__track>
        </StyledPlaylist__item>
      </StyledCentralBlockContentPlaylist>
      {/* </div> */}
    </StyledCentralBlockContent>
  );
}
