import sprite from "./sprite.svg";
// import "../components/ContentBlock.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import React, { useState } from "react";
import * as S from "./ContentStyle.js";



export function Content(props) {
  const [contentVisible, setContentVisible] = useState(false);
  setTimeout(() => {
    setContentVisible(true);
  }, 1000);

  return (
    <S.CentralBlockContent>
      <S.CentralBlock_playlistTitle>
        <S.PlaylistTitleCol01>Трек</S.PlaylistTitleCol01>
        <S.PlaylistTitleCol02>ИСПОЛНИТЕЛЬ</S.PlaylistTitleCol02>
        <S.PlaylistTitleCol03>АЛЬБОМ</S.PlaylistTitleCol03>
        <S.PlaylistTitleCol04>
          <S.Playlist__titleSvg alt="time">
            <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
          </S.Playlist__titleSvg>
        </S.PlaylistTitleCol04>
      </S.CentralBlock_playlistTitle>
      <S.CentralBlockContentPlaylist>
        <S.Playlist__item>
          <S.Playlist__track>
            <S.Track__title>
              <S.Track__titleImage>
                {contentVisible ? (
                  <S.Track__titleSvg alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                    <use href={`${sprite}#icon-note`} />
                  </S.Track__titleSvg>
                ) : (
                  <SkeletonTheme baseColor="#202020" highlightColor="#444">
                    <S.Skeleton_square />
                  </SkeletonTheme>
                )}
              </S.Track__titleImage>
              <S.Track_titleText>
                <S.Track__titleLink href="http://">
                  {contentVisible ? (
                    <span>Guilt</span>
                  ) : (
                    <SkeletonTheme baseColor="#202020" highlightColor="#444">
                      <S.Skeleton_line />
                    </SkeletonTheme>
                  )}
                  <S.Track__titleSpan></S.Track__titleSpan>
                </S.Track__titleLink>
              </S.Track_titleText>
            </S.Track__title>
            <S.Track__author>
              <S.Track__authorLink href="http://">
                {contentVisible ? (
                  <span>Nero</span>
                ) : (
                  <SkeletonTheme baseColor="#202020" highlightColor="#444">
                    <S.Skeleton_line />
                  </SkeletonTheme>
                )}
              </S.Track__authorLink>
            </S.Track__author>
            <S.Track__album>
              <S.Track__albumLink href="http://">
                {contentVisible ? (
                  <span>Welcome Reality</span>
                ) : (
                  <SkeletonTheme baseColor="#202020" highlightColor="#444">
                    <S.Skeleton_line />
                  </SkeletonTheme>
                )}
              </S.Track__albumLink>
            </S.Track__album>
            <S.Track_time>
              {contentVisible ? (
                <S.Track__timeSvg alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                  <use href={`${sprite}#icon-like`} />
                </S.Track__timeSvg>
              ) : (
                <SkeletonTheme baseColor="#202020" highlightColor="#444">
                  <S.Skeleton_lineMini />
                </SkeletonTheme>
              )}

              {contentVisible ? (
                <S.Track__timeText>4:44</S.Track__timeText>
              ) : (
                <SkeletonTheme baseColor="#202020" highlightColor="#444">
                  <S.Skeleton_displayNo />
                </SkeletonTheme>
              )}
            </S.Track_time>
          </S.Playlist__track>
        </S.Playlist__item>

        <S.Playlist__item>
          <S.Playlist__track className="track">
            <S.Track__title>
              <S.Track__titleImage>
                {contentVisible ? (
                  <S.Track__titleSvg alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                    <use href={`${sprite}#icon-note`} />
                  </S.Track__titleSvg>
                ) : (
                  <SkeletonTheme baseColor="#202020" highlightColor="#444">
                    {" "}
                    <S.Skeleton_square />
                  </SkeletonTheme>
                )}
              </S.Track__titleImage>
              <S.Track_titleText>
                <S.Track__titleLink href="http://">
                  {contentVisible ? (
                    <span>Elektro</span>
                  ) : (
                    <SkeletonTheme baseColor="#202020" highlightColor="#444">
                      <S.Skeleton_line />
                    </SkeletonTheme>
                  )}
                  <S.Track__titleSpan></S.Track__titleSpan>
                </S.Track__titleLink>
              </S.Track_titleText>
            </S.Track__title>
            <S.Track__author>
              <S.Track__authorLink href="http://">
                {contentVisible ? (
                  <span>Dynoro, Outwork, Mr. Gee</span>
                ) : (
                  <SkeletonTheme baseColor="#202020" highlightColor="#444">
                    <S.Skeleton_line />
                  </SkeletonTheme>
                )}
              </S.Track__authorLink>
            </S.Track__author>
            <S.Track__album>
              <S.Track__albumLink href="http://">
                {contentVisible ? (
                  <span>Elektro</span>
                ) : (
                  <SkeletonTheme baseColor="#202020" highlightColor="#444">
                    <S.Skeleton_line />
                  </SkeletonTheme>
                )}
              </S.Track__albumLink>
            </S.Track__album>
            <S.Track_time>
              {contentVisible ? (
                <S.Track__timeSvg alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                  <use href={`${sprite}#icon-like`} />
                </S.Track__timeSvg>
              ) : (
                <SkeletonTheme baseColor="#202020" highlightColor="#444">
                  {" "}
                  <S.Skeleton_lineMini />
                </SkeletonTheme>
              )}

              {contentVisible ? (
                <S.Track__timeText>2:22</S.Track__timeText>
              ) : (
                <SkeletonTheme baseColor="#202020" highlightColor="#444">
                  <S.Skeleton_displayNo />
                </SkeletonTheme>
              )}
            </S.Track_time>
          </S.Playlist__track>
        </S.Playlist__item>

        <S.Playlist__item>
          <S.Playlist__track className="track">
            <S.Track__title>
              <S.Track__titleImage>
                {contentVisible ? (
                  <S.Track__titleSvg alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                    <use href={`${sprite}#icon-note`} />
                  </S.Track__titleSvg>
                ) : (
                  <SkeletonTheme baseColor="#202020" highlightColor="#444">
                    {" "}
                    <S.Skeleton_square />
                  </SkeletonTheme>
                )}
              </S.Track__titleImage>
              <S.Track_titleText>
                <S.Track__titleLink href="http://">
                  {contentVisible ? (
                    <span>I’m Fire </span>
                  ) : (
                    <SkeletonTheme baseColor="#202020" highlightColor="#444">
                      <S.Skeleton_line />
                    </SkeletonTheme>
                  )}

                  <S.Track__titleSpan></S.Track__titleSpan>
                </S.Track__titleLink>
              </S.Track_titleText>
            </S.Track__title>
            <S.Track__author>
              <S.Track__authorLink href="http://">
                {contentVisible ? (
                  <span>Ali Bakgor </span>
                ) : (
                  <SkeletonTheme baseColor="#202020" highlightColor="#444">
                    <S.Skeleton_line />
                  </SkeletonTheme>
                )}
              </S.Track__authorLink>
            </S.Track__author>
            <S.Track__album>
              <S.Track__albumLink href="http://">
                {contentVisible ? (
                  <span>I’m Fire </span>
                ) : (
                  <SkeletonTheme baseColor="#202020" highlightColor="#444">
                    <S.Skeleton_line />
                  </SkeletonTheme>
                )}
              </S.Track__albumLink>
            </S.Track__album>
            <S.Track_time>
              {contentVisible ? (
                <S.Track__timeSvg alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                  <use href={`${sprite}#icon-like`} />
                </S.Track__timeSvg>
              ) : (
                <SkeletonTheme baseColor="#202020" highlightColor="#444">
                  <S.Skeleton_lineMini />
                </SkeletonTheme>
              )}

              {contentVisible ? (
                <S.Track__timeText>2:44</S.Track__timeText>
              ) : (
                <SkeletonTheme baseColor="#202020" highlightColor="#444">
                  <S.Skeleton_displayNo />
                </SkeletonTheme>
              )}
            </S.Track_time>
          </S.Playlist__track>
        </S.Playlist__item>

        <S.Playlist__item>
          <S.Playlist__track className="track">
            <S.Track__title>
              <S.Track__titleImage>
                {contentVisible ? (
                  <S.Track__titleSvg alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                    <use href={`${sprite}#icon-note`} />
                  </S.Track__titleSvg>
                ) : (
                  <SkeletonTheme baseColor="#202020" highlightColor="#444">
                    {" "}
                    <S.Skeleton_square />
                  </SkeletonTheme>
                )}
              </S.Track__titleImage>
              <S.Track_titleText>
                <S.Track__titleLink href="http://">
                  {contentVisible ? (
                    <span>Non Stop </span>
                  ) : (
                    <SkeletonTheme baseColor="#202020" highlightColor="#444">
                      <S.Skeleton_line />
                    </SkeletonTheme>
                  )}

                  <S.Track__titleSpan>(Remix)</S.Track__titleSpan>
                </S.Track__titleLink>
              </S.Track_titleText>
            </S.Track__title>
            <S.Track__author>
              <S.Track__authorLink href="http://">
                {contentVisible ? (
                  <span>Стоункат, Psychopath</span>
                ) : (
                  <SkeletonTheme baseColor="#202020" highlightColor="#444">
                    <S.Skeleton_line />
                  </SkeletonTheme>
                )}
              </S.Track__authorLink>
            </S.Track__author>
            <S.Track__album>
              <S.Track__albumLink href="http://">
                {contentVisible ? (
                  <span>Non Stop </span>
                ) : (
                  <SkeletonTheme baseColor="#202020" highlightColor="#444">
                    <S.Skeleton_line />
                  </SkeletonTheme>
                )}
              </S.Track__albumLink>
            </S.Track__album>
            <S.Track_time>
              {contentVisible ? (
                <S.Track__timeSvg alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                  <use href={`${sprite}#icon-like`} />
                </S.Track__timeSvg>
              ) : (
                <SkeletonTheme baseColor="#202020" highlightColor="#444">
                  <S.Skeleton_lineMini />
                </SkeletonTheme>
              )}

              {contentVisible ? (
                <S.Track__timeText>4:12</S.Track__timeText>
              ) : (
                <SkeletonTheme baseColor="#202020" highlightColor="#444">
                  <S.Skeleton_displayNo />
                </SkeletonTheme>
              )}
            </S.Track_time>
          </S.Playlist__track>
        </S.Playlist__item>

        <S.Playlist__item>
          <S.Playlist__track className=" track">
            <S.Track__title>
              <S.Track__titleImage>
                {contentVisible ? (
                  <S.Track__titleSvg alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                    <use href={`${sprite}#icon-note`} />
                  </S.Track__titleSvg>
                ) : (
                  <SkeletonTheme baseColor="#202020" highlightColor="#444">
                    {" "}
                    <S.Skeleton_square />
                  </SkeletonTheme>
                )}
              </S.Track__titleImage>
              <S.Track_titleText>
                <S.Track__titleLink href="http://">
                  {contentVisible ? (
                    <span>Run Run </span>
                  ) : (
                    <SkeletonTheme baseColor="#202020" highlightColor="#444">
                      <S.Skeleton_line />
                    </SkeletonTheme>
                  )}

                  <S.Track__titleSpan>(feat. AR/CO)</S.Track__titleSpan>
                </S.Track__titleLink>
              </S.Track_titleText>
            </S.Track__title>
            <S.Track__author>
              <S.Track__authorLink href="http://">
                {contentVisible ? (
                  <span>Jaded, Will Clarke, AR/CO </span>
                ) : (
                  <SkeletonTheme baseColor="#202020" highlightColor="#444">
                    <S.Skeleton_line />
                  </SkeletonTheme>
                )}
              </S.Track__authorLink>
            </S.Track__author>
            <S.Track__album>
              <S.Track__albumLink href="http://">
                {contentVisible ? (
                  <span>Run Run</span>
                ) : (
                  <SkeletonTheme baseColor="#202020" highlightColor="#444">
                    <S.Skeleton_line />
                  </SkeletonTheme>
                )}
              </S.Track__albumLink>
            </S.Track__album>
            <S.Track_time>
              {contentVisible ? (
                <S.Track__timeSvg alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                  <use href={`${sprite}#icon-like`} />
                </S.Track__timeSvg>
              ) : (
                <SkeletonTheme baseColor="#202020" highlightColor="#444">
                  {" "}
                  <S.Skeleton_lineMini />
                </SkeletonTheme>
              )}

              {contentVisible ? (
                <S.Track__timeText>2:54</S.Track__timeText>
              ) : (
                <SkeletonTheme baseColor="#202020" highlightColor="#444">
                  <S.Skeleton_displayNo />
                </SkeletonTheme>
              )}
            </S.Track_time>
          </S.Playlist__track>
        </S.Playlist__item>

        <S.Playlist__item>
          <S.Playlist__track className="track">
            <S.Track__title>
              <S.Track__titleImage>
                {contentVisible ? (
                  <S.Track__titleSvg alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                    <use href={`${sprite}#icon-note`} />
                  </S.Track__titleSvg>
                ) : (
                  <SkeletonTheme baseColor="#202020" highlightColor="#444">
                    {" "}
                    <S.Skeleton_square />
                  </SkeletonTheme>
                )}
              </S.Track__titleImage>
              <S.Track_titleText>
                <S.Track__titleLink href="http://">
                  {contentVisible ? (
                    <span>Eyes on Fire</span>
                  ) : (
                    <SkeletonTheme baseColor="#202020" highlightColor="#444">
                      <S.Skeleton_line />
                    </SkeletonTheme>
                  )}

                  <S.Track__titleSpan>(Zeds Dead Remix)</S.Track__titleSpan>
                </S.Track__titleLink>
              </S.Track_titleText>
            </S.Track__title>
            <S.Track__author>
              <S.Track__authorLink href="http://">
                {contentVisible ? (
                  <span>Blue Foundation, Zeds Dead </span>
                ) : (
                  <SkeletonTheme baseColor="#202020" highlightColor="#444">
                    <S.Skeleton_line />
                  </SkeletonTheme>
                )}
              </S.Track__authorLink>
            </S.Track__author>
            <S.Track__album>
              <S.Track__albumLink href="http://">
                {contentVisible ? (
                  <span>Eyes on Fire</span>
                ) : (
                  <SkeletonTheme baseColor="#202020" highlightColor="#444">
                    <S.Skeleton_line />
                  </SkeletonTheme>
                )}
              </S.Track__albumLink>
            </S.Track__album>
            <S.Track_time>
              {contentVisible ? (
                <S.Track__timeSvg alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                  <use href={`${sprite}#icon-like`} />
                </S.Track__timeSvg>
              ) : (
                <SkeletonTheme baseColor="#202020" highlightColor="#444">
                  <S.Skeleton_lineMini />
                </SkeletonTheme>
              )}

              {contentVisible ? (
                <S.Track__timeText>5:20</S.Track__timeText>
              ) : (
                <SkeletonTheme baseColor="#202020" highlightColor="#444">
                  <S.Skeleton_displayNo />
                </SkeletonTheme>
              )}
            </S.Track_time>
          </S.Playlist__track>
        </S.Playlist__item>

        <S.Playlist__item>
          <S.Playlist__track className="track">
            <S.Track__title>
              <S.Track__titleImage>
                {contentVisible ? (
                  <S.Track__titleSvg alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                    <use href={`${sprite}#icon-note`} />
                  </S.Track__titleSvg>
                ) : (
                  <SkeletonTheme baseColor="#202020" highlightColor="#444">
                    <S.Skeleton_square />
                  </SkeletonTheme>
                )}
              </S.Track__titleImage>
              <S.Track_titleText>
                <S.Track__titleLink href="http://">
                  {contentVisible ? (
                    <span>Mucho Bien</span>
                  ) : (
                    <SkeletonTheme baseColor="#202020" highlightColor="#444">
                      <S.Skeleton_line />
                    </SkeletonTheme>
                  )}

                  <S.Track__titleSpan>(Hi Profile Remix)</S.Track__titleSpan>
                </S.Track__titleLink>
              </S.Track_titleText>
            </S.Track__title>
            <S.Track__author>
              <S.Track__authorLink href="http://">
                {contentVisible ? (
                  <span>HYBIT, Mr. Black, Offer Nissim, Hi Profile</span>
                ) : (
                  <SkeletonTheme baseColor="#202020" highlightColor="#444">
                    <S.Skeleton_line />
                  </SkeletonTheme>
                )}
              </S.Track__authorLink>
            </S.Track__author>
            <S.Track__album>
              <S.Track__albumLink href="http://">
                {contentVisible ? (
                  <span>Mucho Bien</span>
                ) : (
                  <SkeletonTheme baseColor="#202020" highlightColor="#444">
                    <S.Skeleton_line />
                  </SkeletonTheme>
                )}
              </S.Track__albumLink>
            </S.Track__album>
            <S.Track_time>
              {contentVisible ? (
                <S.Track__timeSvg alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                  <use href={`${sprite}#icon-like`} />
                </S.Track__timeSvg>
              ) : (
                <SkeletonTheme baseColor="#202020" highlightColor="#444">
                  <S.Skeleton_lineMini />
                </SkeletonTheme>
              )}

              {contentVisible ? (
                <S.Track__timeText>3:41</S.Track__timeText>
              ) : (
                <SkeletonTheme baseColor="#202020" highlightColor="#444">
                  <S.Skeleton_displayNo />
                </SkeletonTheme>
              )}
            </S.Track_time>
          </S.Playlist__track>
        </S.Playlist__item>

        <S.Playlist__item>
          <S.Playlist__track className="track">
            <S.Track__title>
              <S.Track__titleImage>
                {contentVisible ? (
                  <S.Track__titleSvg alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                    <use href={`${sprite}#icon-note`} />
                  </S.Track__titleSvg>
                ) : (
                  <SkeletonTheme baseColor="#202020" highlightColor="#444">
                    {" "}
                    <S.Skeleton_square />
                  </SkeletonTheme>
                )}
              </S.Track__titleImage>
              <S.Track_titleText>
                <S.Track__titleLink href="http://">
                  {contentVisible ? (
                    <span>Knives n Cherries</span>
                  ) : (
                    <SkeletonTheme baseColor="#202020" highlightColor="#444">
                      {" "}
                      <S.Skeleton_line />
                    </SkeletonTheme>
                  )}

                  <S.Track__titleSpan></S.Track__titleSpan>
                </S.Track__titleLink>
              </S.Track_titleText>
            </S.Track__title>
            <S.Track__author>
              <S.Track__authorLink href="http://">
                {contentVisible ? (
                  <span>minthaze</span>
                ) : (
                  <SkeletonTheme baseColor="#202020" highlightColor="#444">
                    <S.Skeleton_line />
                  </SkeletonTheme>
                )}
              </S.Track__authorLink>
            </S.Track__author>
            <S.Track__album>
              <S.Track__albumLink href="http://">
                {contentVisible ? (
                  <span>Captivating</span>
                ) : (
                  <SkeletonTheme baseColor="#202020" highlightColor="#444">
                    <S.Skeleton_line />
                  </SkeletonTheme>
                )}
              </S.Track__albumLink>
            </S.Track__album>
            <S.Track_time>
              {contentVisible ? (
                <S.Track__timeSvg alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                  <use href={`${sprite}#icon-like`} />
                </S.Track__timeSvg>
              ) : (
                <SkeletonTheme baseColor="#202020" highlightColor="#444">
                  <S.Skeleton_lineMini />
                </SkeletonTheme>
              )}

              {contentVisible ? (
                <S.Track__timeText>1:48</S.Track__timeText>
              ) : (
                <SkeletonTheme baseColor="#202020" highlightColor="#444">
                  <S.Skeleton_displayNo />
                </SkeletonTheme>
              )}
            </S.Track_time>
          </S.Playlist__track>
        </S.Playlist__item>

        <S.Playlist__item>
          <S.Playlist__track className="track">
            <S.Track__title>
              <S.Track__titleImage>
                {contentVisible ? (
                  <S.Track__titleSvg alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                    <use href={`${sprite}#icon-note`} />
                  </S.Track__titleSvg>
                ) : (
                  <SkeletonTheme baseColor="#202020" highlightColor="#444">
                    {" "}
                    <S.Skeleton_square />
                  </SkeletonTheme>
                )}
              </S.Track__titleImage>
              <S.Track_titleText>
                <S.Track__titleLink href="http://">
                  {contentVisible ? (
                    <span>Knives n Cherries</span>
                  ) : (
                    <SkeletonTheme baseColor="#202020" highlightColor="#444">
                      {" "}
                      <S.Skeleton_line />
                    </SkeletonTheme>
                  )}

                  <S.Track__titleSpan></S.Track__titleSpan>
                </S.Track__titleLink>
              </S.Track_titleText>
            </S.Track__title>
            <S.Track__author>
              <S.Track__authorLink href="http://">
                {contentVisible ? (
                  <span>minthaze</span>
                ) : (
                  <SkeletonTheme baseColor="#202020" highlightColor="#444">
                    <S.Skeleton_line />
                  </SkeletonTheme>
                )}
              </S.Track__authorLink>
            </S.Track__author>
            <S.Track__album>
              <S.Track__albumLink href="http://">
                {contentVisible ? (
                  <span>Captivating</span>
                ) : (
                  <SkeletonTheme baseColor="#202020" highlightColor="#444">
                    <S.Skeleton_line />
                  </SkeletonTheme>
                )}
              </S.Track__albumLink>
            </S.Track__album>
            <S.Track_time>
              {contentVisible ? (
                <S.Track__timeSvg alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                  <use href={`${sprite}#icon-like`} />
                </S.Track__timeSvg>
              ) : (
                <SkeletonTheme baseColor="#202020" highlightColor="#444">
                  <S.Skeleton_lineMini />
                </SkeletonTheme>
              )}

              {contentVisible ? (
                <S.Track__timeText>1:48</S.Track__timeText>
              ) : (
                <SkeletonTheme baseColor="#202020" highlightColor="#444">
                  {" "}
                  <S.Skeleton_displayNo />
                </SkeletonTheme>
              )}
            </S.Track_time>
          </S.Playlist__track>
        </S.Playlist__item>
        <S.Playlist__item>
          <S.Playlist__track className="track">
            <S.Track__title>
              <S.Track__titleImage>
                {contentVisible ? (
                  <S.Track__titleSvg alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                    <use href={`${sprite}#icon-note`} />
                  </S.Track__titleSvg>
                ) : (
                  <SkeletonTheme baseColor="#202020" highlightColor="#444">
                    {" "}
                    <S.Skeleton_square />
                  </SkeletonTheme>
                )}
              </S.Track__titleImage>
              <S.Track_titleText>
                <S.Track__titleLink href="http://">
                  {contentVisible ? (
                    <span>Knives n Cherries</span>
                  ) : (
                    <SkeletonTheme baseColor="#202020" highlightColor="#444">
                      {" "}
                      <S.Skeleton_line />
                    </SkeletonTheme>
                  )}

                  <S.Track__titleSpan></S.Track__titleSpan>
                </S.Track__titleLink>
              </S.Track_titleText>
            </S.Track__title>
            <S.Track__author>
              <S.Track__authorLink href="http://">
                {contentVisible ? (
                  <span>minthaze</span>
                ) : (
                  <SkeletonTheme baseColor="#202020" highlightColor="#444">
                    {" "}
                    <S.Skeleton_line />
                  </SkeletonTheme>
                )}
              </S.Track__authorLink>
            </S.Track__author>
            <S.Track__album>
              <S.Track__albumLink href="http://">
                {contentVisible ? (
                  <span>Captivating</span>
                ) : (
                  <SkeletonTheme baseColor="#202020" highlightColor="#444">
                    {" "}
                    <S.Skeleton_line />
                  </SkeletonTheme>
                )}
              </S.Track__albumLink>
            </S.Track__album>
            <S.Track_time>
              {contentVisible ? (
                <S.Track__timeSvg alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                  <use href={`${sprite}#icon-like`} />
                </S.Track__timeSvg>
              ) : (
                <SkeletonTheme baseColor="#202020" highlightColor="#444">
                  <S.Skeleton_lineMini />
                </SkeletonTheme>
              )}

              {contentVisible ? (
                <S.Track__timeText>4:44</S.Track__timeText>
              ) : (
                <SkeletonTheme baseColor="#202020" highlightColor="#444">
                  <S.Skeleton_displayNo />
                </SkeletonTheme>
              )}
            </S.Track_time>
          </S.Playlist__track>
        </S.Playlist__item>
        <S.Playlist__item>
          <S.Playlist__track className="track">
            <S.Track__title>
              <S.Track__titleImage>
                {contentVisible ? (
                  <S.Track__titleSvg alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                    <use href={`${sprite}#icon-note`} />
                  </S.Track__titleSvg>
                ) : (
                  <SkeletonTheme baseColor="#202020" highlightColor="#444">
                    <S.Skeleton_square />
                  </SkeletonTheme>
                )}
              </S.Track__titleImage>
              <S.Track_titleText>
                <S.Track__titleLink href="http://">
                  {contentVisible ? (
                    <span>Knives n Cherries</span>
                  ) : (
                    <SkeletonTheme baseColor="#202020" highlightColor="#444">
                      {" "}
                      <S.Skeleton_line />
                    </SkeletonTheme>
                  )}

                  <S.Track__titleSpan></S.Track__titleSpan>
                </S.Track__titleLink>
              </S.Track_titleText>
            </S.Track__title>
            <S.Track__author>
              <S.Track__authorLink href="http://">
                {contentVisible ? (
                  <span>minthaze</span>
                ) : (
                  <SkeletonTheme baseColor="#202020" highlightColor="#444">
                    <S.Skeleton_line />
                  </SkeletonTheme>
                )}
              </S.Track__authorLink>
            </S.Track__author>
            <S.Track__album>
              <S.Track__albumLink href="http://">
                {contentVisible ? (
                  <span> Captivating</span>
                ) : (
                  <SkeletonTheme baseColor="#202020" highlightColor="#444">
                    <S.Skeleton_line />
                  </SkeletonTheme>
                )}
              </S.Track__albumLink>
            </S.Track__album>
            <S.Track_time>
              {contentVisible ? (
                <S.Track__timeSvg alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                  <use href={`${sprite}#icon-like`} />
                </S.Track__timeSvg>
              ) : (
                <SkeletonTheme baseColor="#202020" highlightColor="#444">
                  <S.Skeleton_lineMini />
                </SkeletonTheme>
              )}

              {contentVisible ? (
                <S.Track__timeText>9:44</S.Track__timeText>
              ) : (
                <SkeletonTheme baseColor="#202020" highlightColor="#444">
                  <S.Skeleton_displayNo />
                </SkeletonTheme>
              )}
            </S.Track_time>
          </S.Playlist__track>
        </S.Playlist__item>
        <S.Playlist__item>
          <S.Playlist__track className="track">
            <S.Track__title>
              <S.Track__titleImage>
                {contentVisible ? (
                  <S.Track__titleSvg alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                    <use href={`${sprite}#icon-note`} />
                  </S.Track__titleSvg>
                ) : (
                  <SkeletonTheme baseColor="#202020" highlightColor="#444">
                    <S.Skeleton_square />
                  </SkeletonTheme>
                )}
              </S.Track__titleImage>
              <S.Track_titleText>
                <S.Track__titleLink href="http://">
                  {contentVisible ? (
                    <span>Knives n Cherries</span>
                  ) : (
                    <SkeletonTheme baseColor="#202020" highlightColor="#444">
                      <S.Skeleton_line />
                    </SkeletonTheme>
                  )}

                  <S.Track__titleSpan></S.Track__titleSpan>
                </S.Track__titleLink>
              </S.Track_titleText>
            </S.Track__title>
            <S.Track__author>
              <S.Track__authorLink href="http://">
                {contentVisible ? (
                  <span>minthaze</span>
                ) : (
                  <SkeletonTheme baseColor="#202020" highlightColor="#444">
                    <S.Skeleton_line />
                  </SkeletonTheme>
                )}
              </S.Track__authorLink>
            </S.Track__author>
            <S.Track__album>
              <S.Track__albumLink href="http://">
                {contentVisible ? (
                  <span>Captivating</span>
                ) : (
                  <SkeletonTheme baseColor="#202020" highlightColor="#444">
                    <S.Skeleton_line />
                  </SkeletonTheme>
                )}
              </S.Track__albumLink>
            </S.Track__album>
            <S.Track_time>
              {contentVisible ? (
                <S.Track__timeSvg alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                  <use href={`${sprite}#icon-like`} />
                </S.Track__timeSvg>
              ) : (
                <SkeletonTheme baseColor="#202020" highlightColor="#444">
                  <S.Skeleton_lineMini />
                </SkeletonTheme>
              )}

              {contentVisible ? (
                <S.Track__timeText>2:40</S.Track__timeText>
              ) : (
                <SkeletonTheme baseColor="#202020" highlightColor="#444">
                  <S.Skeleton_displayNo />
                </SkeletonTheme>
              )}
            </S.Track_time>
          </S.Playlist__track>
        </S.Playlist__item>
        <S.Playlist__item>
          <S.Playlist__track className="track">
            <S.Track__title>
              <S.Track__titleImage>
                {contentVisible ? (
                  <S.Track__titleSvg alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                    <use href={`${sprite}#icon-note`} />
                  </S.Track__titleSvg>
                ) : (
                  <SkeletonTheme baseColor="#202020" highlightColor="#444">
                    <S.Skeleton_square />
                  </SkeletonTheme>
                )}
              </S.Track__titleImage>
              <S.Track_titleText>
                <S.Track__titleLink href="http://">
                  {contentVisible ? (
                    <span>Knives n Cherries</span>
                  ) : (
                    <SkeletonTheme baseColor="#202020" highlightColor="#444">
                      {" "}
                      <S.Skeleton_line />
                    </SkeletonTheme>
                  )}

                  <S.Track__titleSpan></S.Track__titleSpan>
                </S.Track__titleLink>
              </S.Track_titleText>
            </S.Track__title>
            <S.Track__author>
              <S.Track__authorLink href="http://">
                {contentVisible ? (
                  <span>minthaze</span>
                ) : (
                  <SkeletonTheme baseColor="#202020" highlightColor="#444">
                    {" "}
                    <S.Skeleton_line />
                  </SkeletonTheme>
                )}
              </S.Track__authorLink>
            </S.Track__author>
            <S.Track__album>
              <S.Track__albumLink href="http://">
                {contentVisible ? (
                  <span>Captivating</span>
                ) : (
                  <SkeletonTheme baseColor="#202020" highlightColor="#444">
                    {" "}
                    <S.Skeleton_line />
                  </SkeletonTheme>
                )}
              </S.Track__albumLink>
            </S.Track__album>
            <S.Track_time>
              {contentVisible ? (
                <S.Track__timeSvg alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                  <use href={`${sprite}#icon-like`} />
                </S.Track__timeSvg>
              ) : (
                <SkeletonTheme baseColor="#202020" highlightColor="#444">
                  <S.Skeleton_lineMini />
                </SkeletonTheme>
              )}

              {contentVisible ? (
                <S.Track__timeText>4:44</S.Track__timeText>
              ) : (
                <SkeletonTheme baseColor="#202020" highlightColor="#444">
                  {" "}
                  <S.Skeleton_displayNo />
                </SkeletonTheme>
              )}
            </S.Track_time>
          </S.Playlist__track>
        </S.Playlist__item>
        <S.Playlist__item>
          <S.Playlist__track className="track">
            <S.Track__title>
              <S.Track__titleImage>
                {contentVisible ? (
                  <S.Track__titleSvg alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                    <use href={`${sprite}#icon-note`} />
                  </S.Track__titleSvg>
                ) : (
                  <SkeletonTheme baseColor="#202020" highlightColor="#444">
                    <S.Skeleton_square />
                  </SkeletonTheme>
                )}
              </S.Track__titleImage>
              <S.Track_titleText>
                <S.Track__titleLink href="http://">
                  {contentVisible ? (
                    <span>Knives n Cherries</span>
                  ) : (
                    <SkeletonTheme baseColor="#202020" highlightColor="#444">
                      {" "}
                      <S.Skeleton_line />
                    </SkeletonTheme>
                  )}

                  <S.Track__titleSpan></S.Track__titleSpan>
                </S.Track__titleLink>
              </S.Track_titleText>
            </S.Track__title>
            <S.Track__author>
              <S.Track__authorLink href="http://">
                {contentVisible ? (
                  <span>minthaze</span>
                ) : (
                  <SkeletonTheme baseColor="#202020" highlightColor="#444">
                    {" "}
                    <S.Skeleton_line />
                  </SkeletonTheme>
                )}
              </S.Track__authorLink>
            </S.Track__author>
            <S.Track__album>
              <S.Track__albumLink href="http://">
                {contentVisible ? (
                  <span>Captivating</span>
                ) : (
                  <SkeletonTheme baseColor="#202020" highlightColor="#444">
                    {" "}
                    <S.Skeleton_line />
                  </SkeletonTheme>
                )}
              </S.Track__albumLink>
            </S.Track__album>
            <S.Track_time>
              {contentVisible ? (
                <S.Track__timeSvg alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                  <use href={`${sprite}#icon-like`} />
                </S.Track__timeSvg>
              ) : (
                <SkeletonTheme baseColor="#202020" highlightColor="#444">
                  <S.Skeleton_lineMini />
                </SkeletonTheme>
              )}

              {contentVisible ? (
                <S.Track__timeText>4:54</S.Track__timeText>
              ) : (
                <SkeletonTheme baseColor="#202020" highlightColor="#444">
                  {" "}
                  <S.Skeleton_displayNo />
                </SkeletonTheme>
              )}
            </S.Track_time>
          </S.Playlist__track>
        </S.Playlist__item>

        <S.Playlist__item>
          <S.Playlist__track className="track">
            <S.Track__title>
              <S.Track__titleImage>
                {contentVisible ? (
                  <S.Track__titleSvg alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                    <use href={`${sprite}#icon-note`} />
                  </S.Track__titleSvg>
                ) : (
                  <SkeletonTheme baseColor="#202020" highlightColor="#444">
                    {" "}
                    <S.Skeleton_square />
                  </SkeletonTheme>
                )}
              </S.Track__titleImage>
              <S.Track_titleText>
                <S.Track__titleLink href="http://">
                  {contentVisible ? (
                    <span>How Deep Is Your Love</span>
                  ) : (
                    <SkeletonTheme baseColor="#202020" highlightColor="#444">
                      {" "}
                      <S.Skeleton_line />
                    </SkeletonTheme>
                  )}

                  <S.Track__titleSpan></S.Track__titleSpan>
                </S.Track__titleLink>
              </S.Track_titleText>
            </S.Track__title>
            <S.Track__author>
              <S.Track__authorLink href="http://">
                {contentVisible ? (
                  <span>Calvin Harris, Disciples</span>
                ) : (
                  <SkeletonTheme baseColor="#202020" highlightColor="#444">
                    {" "}
                    <S.Skeleton_line />
                  </SkeletonTheme>
                )}
              </S.Track__authorLink>
            </S.Track__author>
            <S.Track__album>
              <S.Track__albumLink href="http://">
                {contentVisible ? (
                  <span>How Deep Is Your Love</span>
                ) : (
                  <SkeletonTheme baseColor="#202020" highlightColor="#444">
                    {" "}
                    <S.Skeleton_line />
                  </SkeletonTheme>
                )}
              </S.Track__albumLink>
            </S.Track__album>
            <S.Track_time>
              <S.Track__timeSvg alt="time">
                <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                <use href={`${sprite}#icon-like`} />
              </S.Track__timeSvg>
              <S.Track__timeText>3:32</S.Track__timeText>
            </S.Track_time>
          </S.Playlist__track>
        </S.Playlist__item>

        <S.Playlist__item>
          <S.Playlist__track className="track">
            <S.Track__title>
              <S.Track__titleImage>
                {contentVisible ? (
                  <S.Track__titleSvg alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                    <use href={`${sprite}#icon-note`} />
                  </S.Track__titleSvg>
                ) : (
                  <SkeletonTheme baseColor="#202020" highlightColor="#444">
                    <S.Skeleton_square />
                  </SkeletonTheme>
                )}
              </S.Track__titleImage>
              <S.Track_titleText>
                <S.Track__titleLink href="http://">
                  {contentVisible ? (
                    <span>Morena</span>
                  ) : (
                    <SkeletonTheme baseColor="#202020" highlightColor="#444">
                      <S.Skeleton_line />
                    </SkeletonTheme>
                  )}
                  <S.Track__titleSpan></S.Track__titleSpan>
                </S.Track__titleLink>
              </S.Track_titleText>
            </S.Track__title>
            <S.Track__author>
              <S.Track__authorLink href="http://">
                {contentVisible ? (
                  <span>Tom Boxer</span>
                ) : (
                  <SkeletonTheme baseColor="#202020" highlightColor="#444">
                    <S.Skeleton_line />
                  </SkeletonTheme>
                )}
              </S.Track__authorLink>
            </S.Track__author>
            <S.Track__album>
              <S.Track__albumLink href="http://">
                {contentVisible ? (
                  <span>Soundz Made in Romania</span>
                ) : (
                  <SkeletonTheme baseColor="#202020" highlightColor="#444">
                    {" "}
                    <S.Skeleton_line />
                  </SkeletonTheme>
                )}
              </S.Track__albumLink>
            </S.Track__album>
            <S.Track_time>
              <S.Track__timeSvg alt="time">
                <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                <use href={`${sprite}#icon-like`} />
              </S.Track__timeSvg>
              <S.Track__timeText>3:36</S.Track__timeText>
            </S.Track_time>
          </S.Playlist__track>
        </S.Playlist__item>

        <S.Playlist__item>
          <S.Playlist__track className="track">
            <S.Track__title>
              <S.Track__titleImage>
                <S.Track__titleSvg alt="music">
                  <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                  <use href={`${sprite}#icon-note`} />
                </S.Track__titleSvg>
              </S.Track__titleImage>
              <S.Track_titleText>
                <S.Track__titleLink href="http://">
                  <S.Track__titleSpan></S.Track__titleSpan>
                </S.Track__titleLink>
              </S.Track_titleText>
            </S.Track__title>
            <S.Track__author>
              <S.Track__authorLink href="http://"></S.Track__authorLink>
            </S.Track__author>
            <S.Track__album>
              <S.Track__albumLink href="http://"></S.Track__albumLink>
            </S.Track__album>
            <S.Track_time>
              <S.Track__timeSvg alt="time">
                <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                <use href={`${sprite}#icon-like`} />
              </S.Track__timeSvg>
              <S.Track__timeText></S.Track__timeText>
            </S.Track_time>
          </S.Playlist__track>
        </S.Playlist__item>
      </S.CentralBlockContentPlaylist>
      {/* </div> */}
    </S.CentralBlockContent>
  );
}
