import * as S from '../Playlist/Playlist.style';
import trackArray from './TrackArray';

export default function Skeletone() {
    return (
      <>
      {trackArray.map((todo) => (
        <S.PlaylistTrack key={todo.id}>
        <S.TrackTitle>
          <S.TrackTitleImage>
            <S.TrackTitleSvgLoading alt="music">
              <use xlinkHref="img/icon/sprite.svg" />
            </S.TrackTitleSvgLoading>
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
      ))}
      </>
    )
  }