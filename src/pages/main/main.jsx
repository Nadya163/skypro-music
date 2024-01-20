import * as S from '../../App.style';
import FilterComponents from '../../components/FilterComponents/FilterComponents';
import Playlist from '../../components/Playlist/Playlist';
import PlaylistTitle from '../../components/PlaylistTitle/PlaylistTitle';
import { useGetSelectionsQuery } from '../../apiServece';
import Skeletone from '../../components/Skeletone/Skeletone'


export default function Main({ handleTodoClick }) {
    const { addTodoError, isLoading } = useGetSelectionsQuery();
       
       return (
        <>
            <S.CenterblockH2>Треки</S.CenterblockH2>
            <FilterComponents/>
            <S.CenterblockContent>
                <PlaylistTitle />
                {isLoading ?
                    <Skeletone />
                      :
                      <>
                {addTodoError && <p>Не удалось загрузить плейлист, попробуйте позже: {addTodoError}.</p>}               
                <Playlist
                    handleTodoClick={handleTodoClick}
                     />
                     </>
                }
            </S.CenterblockContent>
        </>
    );
}