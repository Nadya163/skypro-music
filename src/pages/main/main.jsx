import * as S from '../../App.style';
import FilterComponents from '../../components/FilterComponents/FilterComponents';
import Playlist from '../../components/Playlist/Playlist';
import PlaylistTitle from '../../components/PlaylistTitle/PlaylistTitle';


export default function Main({ todos, isLoading, setIsLoading, handleTodoClick, addTodoError }) {

 // console.log(user);

//   console.log(addTodoError);
    return (
        <>
            <S.CenterblockH2>Треки</S.CenterblockH2>
            <FilterComponents todos={todos} />
            <S.CenterblockContent>
                <PlaylistTitle />
                {addTodoError && <p>Не удалось загрузить плейлист, попробуйте позже: {addTodoError}.</p>}               
                <Playlist
                    todos={todos}
                    handleTodoClick={handleTodoClick}
                    isLoading={isLoading}
                    setIsLoading={setIsLoading}
                />
            </S.CenterblockContent>
        </>
    );
}