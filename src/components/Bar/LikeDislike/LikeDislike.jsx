import { useContext } from 'react';
import { useSelector } from 'react-redux';
import * as S from '../Bar.style.js';
import UserContext from '../../../context.jsx';
import { 
    selectTrackInfo, 
    selectorCategoryTrackId, 
    selectorCurrentTrack, 
    selectorFavorites, 
    selectorTrackList
 } from '../../../store/selectors/selectors.jsx';
import { 
    useAddFavoriteTrackIDMutation, 
    useDeleteFavoriteTrackIDMutation
 } from '../../../apiServece.jsx';

function LikeAndDislike() {

  const { userData } = useContext(UserContext)
  const [addFavoriteTrackID] = useAddFavoriteTrackIDMutation()
  const [deleteFavoriteTrackID] = useDeleteFavoriteTrackIDMutation()
  const trackInfo = useSelector(selectTrackInfo)
  const trackList = useSelector(selectorTrackList);
  const favoritesTrack = useSelector(selectorFavorites);
  const categoryTrackId = useSelector(selectorCategoryTrackId);
  const currentTrack = useSelector(selectorCurrentTrack)
  const toggleLikedTrack = () => {
    if (trackList || categoryTrackId ||
      !trackInfo?.stared_user?.find((user) => user.id === userData.id)) {
      addFavoriteTrackID(currentTrack.id)
    }
  }

  const toggleDislikedTrack = () => {
    if (trackList || categoryTrackId || favoritesTrack ||
      trackInfo?.stared_user?.find((user) => user.id === userData.id)) {
      deleteFavoriteTrackID(currentTrack.id)
    }
  }

  return (
    <S.TrackPlayLikeDis>
    <S.TrackPlayLike>
      <S.TrackPlayLikeSvg alt="like">
        <use xlinkHref="img/icon/sprite.svg#icon-like" onClick={() => toggleLikedTrack()} />
      </S.TrackPlayLikeSvg>
    </S.TrackPlayLike>
    <S.TrackPlayDislike>
      <S.TrackPlayDislikeSvg alt="dislike">
        <use xlinkHref="img/icon/sprite.svg#icon-dislike" onClick={() => toggleDislikedTrack()}/>
      </S.TrackPlayDislikeSvg>
    </S.TrackPlayDislike>
  </S.TrackPlayLikeDis>
  );
}

export default LikeAndDislike;