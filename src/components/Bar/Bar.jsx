import { useState, useEffect } from "react";
import * as S from './Bar.style'

function TrackPlay({ author, album }) {
    return (
    <S.TrackPlayContain>
        <S.TrackPlayImage>
          <S.TrackPlaySvg alt="music">
            <use xlinkHref="img/icon/sprite.svg#icon-note" />
          </S.TrackPlaySvg>
        </S.TrackPlayImage>
        <S.TrackPlayAlbum>
          <S.TrackPlayAlbumLink href="http://">
            {album}
          </S.TrackPlayAlbumLink>
          <S.TrackPlayAuthor>
          <S.TrackPlayAuthorLink href="http://">
            {author}
          </S.TrackPlayAuthorLink>
        </S.TrackPlayAuthor>
        </S.TrackPlayAlbum>
    </S.TrackPlayContain>
    )
}

function Loading() {
  return (
    <S.TrackPlayContain>
        <S.TrackPlayImage>
          <S.TrackPlaySvgLoading alt="music">
            <use xlinkHref="img/icon/sprite.svg" />
          </S.TrackPlaySvgLoading>
        </S.TrackPlayImage>
        <S.TrackPlayAlbum>
          <S.TrackPlayAlbumLinkLoading>
            <img src="img/icon/playlistName.svg" alt="" />
          </S.TrackPlayAlbumLinkLoading>
          <S.TrackPlayAuthor>
          <S.TrackPlayAuthorLinkLoading className="track-play__author-link blinking">
            <img src="img/icon/playlistName.svg" alt="" />
          </S.TrackPlayAuthorLinkLoading>
        </S.TrackPlayAuthor>
        </S.TrackPlayAlbum>
    </S.TrackPlayContain>
    )
}

function Bar({ currentTodo }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);
    return (
      <S.Bar>
      {currentTodo ? (
        <S.BarContent>
          <S.BarPlayerProgress />
          <S.Column>
            <S.BarPlayerBlock>
              <S.BarPlayer>
                <S.PlayerControls>
                <S.PlayerBtnPrev>
                  <S.PlayerBtnPrevSvg alt="prev">
                    <use xlinkHref="img/icon/sprite.svg#icon-prev" />
                  </S.PlayerBtnPrevSvg>
                </S.PlayerBtnPrev>
                <S.PlayerBtnPlay>
                  <S.PlayerBtnPlaySvg alt="play">
                    <use xlinkHref="img/icon/sprite.svg#icon-play" />
                  </S.PlayerBtnPlaySvg>
                </S.PlayerBtnPlay>
                <S.PlayerBtnNext>
                  <S.PlayerBtnNextSvg alt="next">
                    <use xlinkHref="img/icon/sprite.svg#icon-next" />
                  </S.PlayerBtnNextSvg>
                </S.PlayerBtnNext>
                <S.PlayerBtnRepeat>
                  <S.PlayerBtnRepeatSvg alt="repeat">
                    <use xlinkHref="img/icon/sprite.svg#icon-repeat" />
                  </S.PlayerBtnRepeatSvg>
                </S.PlayerBtnRepeat>
                <S.PlayerBtnShuffle>
                  <S.PlayerBtnShuffleSvg alt="shuffle">
                    <use xlinkHref="img/icon/sprite.svg#icon-shuffle" />
                  </S.PlayerBtnShuffleSvg>
                </S.PlayerBtnShuffle>
                </S.PlayerControls>
                <S.PlayerTrackPlay >
                {isLoading ? (
                    <>
                    {/* Скелет */}
                    <Loading />
                  
                    </>
                  ) : (
                    <>
                    {/* Название трека и альбом */}
                        <TrackPlay album={currentTodo.text} author={currentTodo.text} />
                        </>
                )} 
                  </S.PlayerTrackPlay> 
                 <S.TrackPlayLikeDis>
                  <S.TrackPlayLike>
                    <S.TrackPlayLikeSvg alt="like">
                      <use xlinkHref="img/icon/sprite.svg#icon-like" />
                    </S.TrackPlayLikeSvg>
                  </S.TrackPlayLike>
                  <S.TrackPlayDislike>
                    <S.TrackPlayDislikeSvg alt="dislike">
                      <use xlinkHref="img/icon/sprite.svg#icon-dislike" />
                    </S.TrackPlayDislikeSvg>
                  </S.TrackPlayDislike>
                  </S.TrackPlayLikeDis>
              </S.BarPlayer>
            </S.BarPlayerBlock>
            <S.BarVolumeBlock>
              <S.VolumeContent>
                <S.VolumeImage>
                  <S.VolumeSvg alt="volume">
                    <use xlinkHref="img/icon/sprite.svg#icon-volume" />
                  </S.VolumeSvg>
                </S.VolumeImage>
                <S.VolumeProgress>
                  <S.VolumeProgressLine
                    type="range"
                    name="range"
                  />
                </S.VolumeProgress>
              </S.VolumeContent>
            </S.BarVolumeBlock>
          </S.Column>
        </S.BarContent>
              ) : null}
      </S.Bar>

    )
}

export default Bar;