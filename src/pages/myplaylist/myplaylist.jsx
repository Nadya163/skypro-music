import * as S from '../../App.style';
import { useGetFavoriteTracksAllQuery } from '../../apiServece';
import AllFavoritesTrack from '../../components/FavoritesTrack/FavoritesTrack';
import PlaylistTitle from '../../components/PlaylistTitle/PlaylistTitle';



export default function Main({ todos, addTodoError }) {
  const { data=[] } = useGetFavoriteTracksAllQuery()
  // , isError, error, isLoading
  console.log(data);
    return (
      <>
            <S.CenterblockH2>Мои треки</S.CenterblockH2>
            <S.CenterblockContent>
              <PlaylistTitle />
              {addTodoError && <p>Не удалось загрузить плейлист, попробуйте позже: {addTodoError}.</p>}  
              <AllFavoritesTrack 
                todos={todos} 
              />
            </S.CenterblockContent>
      </>
    );

}