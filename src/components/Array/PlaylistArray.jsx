import { Link } from 'react-router-dom';
import * as S from '../Playlist/Playlist.style'
import { useSelector } from 'react-redux';
import { selectPulsatingPoint, selectorCurrentTrack } from '../../store/selectors/selectors';
import { formatTime } from '../../store/redux/timeSlice';
import { selectorTimeInSeconds } from '../../store/selectors/selectors';
import { useAddFavoriteTrackIDMutation, useDeleteFavoriteTrackIDMutation } from '../../apiServece';
import { useContext } from 'react';
import UserContext from '../../context';

function PlaylistArray({ todo, handleTodoClick }) { 
  const { userData } = useContext(UserContext);
  const pulsarPointer = useSelector(selectPulsatingPoint);
  const currentTrack = useSelector(selectorCurrentTrack);
  const timeInSeconds = useSelector(selectorTimeInSeconds);
  formatTime(timeInSeconds);
  const [addFavoriteTrackID] = useAddFavoriteTrackIDMutation();
  const [deleteFavoriteTrackID] = useDeleteFavoriteTrackIDMutation();

  const handleFavoriteClick = (todo) => {
      if (location.pathname === "/myplaylist" || todo?.stared_user?.find((user) => user.id === userData.id)) {
      deleteFavoriteTrackID(todo.id)
    } else {
      addFavoriteTrackID(todo.id)
    }
  }
 
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
                  <S.TrackTimeSvg alt="time" onClick={() => handleFavoriteClick(todo)}>
                  {location.pathname === "/myplaylist" ||
              todo?.stared_user?.find((user) => user.id === userData.id) ? (
              <use xlinkHref="/img/icon/sprite.svg#icon-like.act" />
            ) : (
              <use xlinkHref="/img/icon/sprite.svg#icon-like" />
            )}
                  </S.TrackTimeSvg>
                  <S.TrackTimeText>{formatTime(todo.duration_in_seconds)}</S.TrackTimeText>
                </div>
              </S.PlaylistTrack>
            )
}

export default PlaylistArray;

