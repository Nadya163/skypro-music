// import { Link } from 'react-router-dom';
import * as S from './Playlist.style'
// import trackArray from '../Array/TrackArray';
// import { useSelector } from 'react-redux';
// import { selectPulsatingPoint, selectorCurrentTrack } from '../../store/selectors/selectors';
// import { formatTime } from '../../store/redux/timeSlice';
// import { selectorTimeInSeconds } from '../../store/selectors/selectors';
import { useGetAllMusicQuery } from '../../apiServece';
// import { useContext } from 'react';
// import UserContext from '../../context';
import PlaylistArray from '../Array/PlaylistArray';
import { useDispatch } from 'react-redux';
import { setTrackList } from '../../store/redux/playerSlice';
// import { useEffect } from 'react';

// function Loading() {
//   return (
//     <S.PlaylistTrack>
//       <S.TrackTitle>
//         <S.TrackTitleImage>
//           <S.TrackTitleSvgLoading alt="music">
//             <use xlinkHref="img/icon/sprite.svg" />
//           </S.TrackTitleSvgLoading>
//         </S.TrackTitleImage>
//         <div>
//           <S.TrackTitleLinkLoading>
//             <img src="img/icon/track.svg" alt="" />
//           </S.TrackTitleLinkLoading>
//         </div>
//       </S.TrackTitle>
//       <S.TrackAuthor>
//         <S.TrackAuthorLinkLoading>
//           <img src="img/icon/album.svg" alt="" />
//         </S.TrackAuthorLinkLoading>
//       </S.TrackAuthor>
//       <S.TrackAlbum>
//         <S.TrackAlbumLinkLoading>
//           <img src="img/icon/author.svg" alt="" />
//         </S.TrackAlbumLinkLoading>
//       </S.TrackAlbum>
//       <div>
//         <S.TrackTimeSvgLoading alt="time">
//           <use xlinkHref="img/icon/sprite.svg#icon-like" />
//         </S.TrackTimeSvgLoading>
//         <S.TrackTimeTextLoading>0:00</S.TrackTimeTextLoading>
//       </div>
//     </S.PlaylistTrack>
//   )
// }

function Playlist({ handleTodoClick
  // , isLoading, setIsLoading
 }) {
   const dispatch = useDispatch();
  const { data } = useGetAllMusicQuery();

    setTimeout(() => {
      dispatch(setTrackList(data))
    }, 500);

  // console.log(data);
   
  return (
    <S.ContentPlaylist>
      <S.PlaylistItem>
        {/* {isLoading ? (
            <>
            {trackArray.map((todo) => (
              <Loading 
                key={todo.id}
                setIsLoading={setIsLoading}
              />
            ))}
          </>
        ) : ( */}
          {/* <div> */}
            {data?.map((todo) => (
              <PlaylistArray 
              key={todo.id}
              todo={todo}
              handleTodoClick={handleTodoClick}
               />
   
            ))}
          {/* </div> */}
        {/* )} */}
      </S.PlaylistItem>
    </S.ContentPlaylist>
  )
}

export default Playlist;

