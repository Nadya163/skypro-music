import { useState, useEffect } from 'react'
import * as S from './Playlist.style'
import trackArray from '../TrackArray'

function PlaylistItem({ track, together, author, album, time }) {
  return (
    <S.PlaylistTrack>
      <S.TrackTitle>
        <S.TrackTitleImage>
          <S.TratrackTitleSvg alt="music">
            <use xlinkHref="img/icon/sprite.svg#icon-note" />
          </S.TratrackTitleSvg>
        </S.TrackTitleImage>
        <div>
          <S.TrackTitleLink href="http://">
            {track} <S.TrackTitleSpan> {together} </S.TrackTitleSpan>
          </S.TrackTitleLink>
        </div>
      </S.TrackTitle>
      <S.TrackAuthor>
        <S.TrackAuthorLink href="http://">
          {author}
        </S.TrackAuthorLink>
      </S.TrackAuthor>
      <S.TrackAlbum>
        <S.TrackAlbumLink href="http://">
          {album}
        </S.TrackAlbumLink>
      </S.TrackAlbum>
      <div>
        <S.TrackTimeSvg alt="time">
          <use xlinkHref="img/icon/sprite.svg#icon-like" />
        </S.TrackTimeSvg>
        <S.TrackTimeText>{time}</S.TrackTimeText>
      </div>
    </S.PlaylistTrack>
  )
}

function Loading() {
  return (
    <S.PlaylistTrack>
      <S.TrackTitle>
        <S.TrackTitleImage>
          <S.TratrackTitleSvgLoading alt="music">
            <use xlinkHref="img/icon/sprite.svg" />
          </S.TratrackTitleSvgLoading>
        </S.TrackTitleImage>
        <div>
          <S.TrackTitleLinkLoading>
            <img src="img/icon/track.svg" alt="" />
          </S.TrackTitleLinkLoading>
        </div>
      </S.TrackTitle>
      <S.TrackAuthor>
        <S.TrackAuthorLinkLoading>
          <img src="img/icon/album.svg" alt="" />
        </S.TrackAuthorLinkLoading>
      </S.TrackAuthor>
      <S.TrackAlbum>
        <S.TrackAlbumLinkLoading>
          <img src="img/icon/author.svg" alt="" />
        </S.TrackAlbumLinkLoading>
      </S.TrackAlbum>
      <div>
        <S.TrackTimeSvgLoading alt="time">
          <use xlinkHref="img/icon/sprite.svg#icon-like" />
        </S.TrackTimeSvgLoading>
        <S.TrackTimeTextLoading>0:00</S.TrackTimeTextLoading>
      </div>
    </S.PlaylistTrack>
  )
}

function Playlist() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <S.ContentPlaylist>
      <S.PlaylistItem>
        {isLoading ? (
          <>
            {trackArray.map((index) => (
              <Loading key={index} />
            ))}
          </>
        ) : (
          <div>
            {trackArray.map((track) => (
              <PlaylistItem
                key={track.id}
                track={track.track}
                together={track.together}
                author={track.author}
                album={track.album}
                time={track.time}
              />
            ))}
          </div>
        )}
      </S.PlaylistItem>
    </S.ContentPlaylist>
  )
}

export default Playlist
