import { Link } from 'react-router-dom';
import * as S from './FavoritesTrack.style'
import trackArray from '../TrackArray';
import { useSelector } from 'react-redux';
import { formatTime  } from '../../store/redux/timeSlice';
import { 
  selectorFavorites,
  selectorTimeInSeconds,
  selectPulsatingPoint,
  selectorCurrentTrack } from '../../store/selectors/selectors';
// import { useGetFavoriteTracksAllQuery } from '../../apiServece';

function Loading() {
  return (
    <S.PlaylistTrack>
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
  )
}

function AllFavoritesTrack({ todos, handleTodoClick, isLoading, setIsLoading }) {
  const pulsarPointer = useSelector(selectPulsatingPoint);
  const currentTrack = useSelector(selectorCurrentTrack);
  const timeInSeconds = useSelector(selectorTimeInSeconds);
  formatTime(timeInSeconds);
  const favoritesTrack = useSelector(selectorFavorites);
  // const FavoriteTracksList = () => {
  //   const { data: favoriteTracks, isLoading } = useGetFavoriteTracksAllQuery();
   
  return (
    <S.ContentPlaylist>
      <S.PlaylistItem>
        {isLoading ? (
            <>
            {trackArray.map((todo) => (
              <Loading 
                key={todo.id}
                setIsLoading={setIsLoading}
              />
            ))}
          </>
        ) : (
          <div>
            {favoritesTrack.map((todoId) => {
              const todo = todos.find((todo) => todo.id === todoId);
              return (
              <S.PlaylistTrack key={todo.id}>
                <S.TrackTitle>
                  <S.TrackTitleImage>
                  {currentTrack && currentTrack.id === todo.id ? (
                      <S.PointPlaying $playing={pulsarPointer} />
                    ) : (
                      <S.TrackTitleSvg alt="music">
                        <use xlinkHref="img/icon/sprite.svg#icon-note" />
                      </S.TrackTitleSvg>
                    )
                    }
                  </S.TrackTitleImage>

                  <div>
                    <S.TrackTitleLink as={Link} onClick={() => handleTodoClick(todo)}>
                      {todo.name} <S.TrackTitleSpan> {todo.together} </S.TrackTitleSpan>
                    </S.TrackTitleLink>
                  </div>
                </S.TrackTitle>
                <S.TrackAuthor>
                  <S.TrackAuthorLink href="http://">
                    {todo.author}
                  </S.TrackAuthorLink>
                </S.TrackAuthor>
                <S.TrackAlbum>
                  <S.TrackAlbumLink href="http://">
                    {todo.album}
                  </S.TrackAlbumLink>
                </S.TrackAlbum>
                <div>
                  <S.TrackTimeSvg alt="time">
                    <use xlinkHref="img/icon/sprite.svg#icon-like" />
                  </S.TrackTimeSvg>
                  <S.TrackTimeText>{formatTime(todo.duration_in_seconds)}</S.TrackTimeText>
                </div>
              </S.PlaylistTrack>
            )
            })}
          </div>
        )}
      </S.PlaylistItem>
    </S.ContentPlaylist>
  )
}

export default AllFavoritesTrack;

