import { useDispatch, useSelector } from 'react-redux';
import { useGetFavoriteTracksAllQuery, useGetSelectionsQuery } from '../../apiServece';
import PlaylistArray from '../../components/Array/PlaylistArray';
import PlaylistTitle from '../../components/PlaylistTitle/PlaylistTitle';

import * as S from './myplaylist.style';
import { setFavoritesTrack } from '../../store/redux/playerSlice';
import Skeletone from '../../components/Skeletone/Skeletone';
import { selectorSearchTrack } from '../../store/selectors/selectors';
import FilterComponents from '../../components/FilterComponents/FilterComponents';


export default function FavoriteTrack({ handleTodoClick }) {
  const { data=[] } = useGetFavoriteTracksAllQuery();
  const dispatch = useDispatch();
  const { addTodoError, isLoading } = useGetSelectionsQuery();
  const searchTrackTitle = useSelector(selectorSearchTrack);

  setTimeout(() => {
    dispatch(setFavoritesTrack(data))
  }, 500);

  const searchTrack = data?.filter((todo) => {
    const matchesTitle = todo.name.toLowerCase().
      includes(searchTrackTitle.toLowerCase())
    return matchesTitle
  });
  
  return (
    <>
      <S.CenterblockH2>Мои треки</S.CenterblockH2>
      <FilterComponents />
      <S.CenterblockContent>
        <PlaylistTitle />
        {isLoading ? (
          <Skeletone />
        ) : (
          <>
            {addTodoError && (
              <p>
                Не удалось загрузить плейлист, попробуйте позже: {addTodoError}.
              </p>
            )}
            {data?.length === 0 && location.pathname === "/myplaylist" ? (
              <S.SpanNotTracksFavorite>
                В этом плейлисте пока нет Ваших любимых треков
              </S.SpanNotTracksFavorite>
            ) : (
              <div>
                {searchTrack?.map((todo) => (
                  <PlaylistArray
                    key={todo.id}
                    todo={todo}
                    handleTodoClick={handleTodoClick}
                  />
                ))}
              </div>
            )}
          </>
        )}
      </S.CenterblockContent>
    </>
  );

}
