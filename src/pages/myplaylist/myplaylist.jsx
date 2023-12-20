import { useGetFavoriteTracksAllQuery } from '../../apiServece';
import PlaylistArray from '../../components/Array/PlaylistArray';
import PlaylistTitle from '../../components/PlaylistTitle/PlaylistTitle';

import * as S from './myplaylist.style';


export default function FavoriteTrack({ addTodoError, handleTodoClick }) {
  const { data=[] } = useGetFavoriteTracksAllQuery();
  console.log(data);
  
    return (
      <>
            <S.CenterblockH2>Мои треки</S.CenterblockH2>
            <S.CenterblockContent>
              <PlaylistTitle />
              {addTodoError && <p>Не удалось загрузить плейлист, попробуйте позже: {addTodoError}.</p>}
              {data?.length === 0 && location.pathname === "/myplaylist" ?
              (<S.SpanNotTracksFavorite>В этом плейлисте пока нет Ваших любимых треков</S.SpanNotTracksFavorite>)
              : ( 
                <div>
                {data?.map((todo) => (
                  <PlaylistArray
                  key={todo.id}
                  todo={todo}
                  handleTodoClick={handleTodoClick}
              />
              ))
              }
              </div>)
            }  
            </S.CenterblockContent>
      </>
    );

}
