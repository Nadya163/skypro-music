import * as S from '../../App.style';
import FilterComponents from '../../components/FilterComponents/FilterComponents';
import Playlist from '../../components/Playlist/Playlist';
import PlaylistTitle from '../../components/PlaylistTitle/PlaylistTitle';


export default function Main({ handleTodoClick }) {
       return (
        <>
            <S.CenterblockH2>Треки</S.CenterblockH2>
            <FilterComponents/>
            <S.CenterblockContent>
                <PlaylistTitle />
                <Playlist
                    handleTodoClick={handleTodoClick}
                     />
            </S.CenterblockContent>
        </>
    );
}