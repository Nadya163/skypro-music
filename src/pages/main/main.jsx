import * as S from '../../App.style';
import Nav from '../../components/Nav/Nav';
import Search from '../../components/Search/Search';
import FilterComponents from '../../components/FilterComponents/FilterComponents';
import PlaylistTitle from '../../components/PlaylistTitle/PlaylistTitle';
import Playlist from '../../components/Playlist/Playlist';
import Sidebar from '../../components/Sidebar/Sidebar';
import Bar from '../../components/Bar/Bar';


export default function Main({ todos, isLoading, setIsLoading, handleTodoClick, currentTodo, addTodoError, handleLogout }) {

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds.toFixed()}`;
  };

    return (
      <>
          <S.Main>
          <Nav
            handleLogout={handleLogout}
          />
          <S.MainCenterblock>
            <Search />
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
                currentTodo={currentTodo}
                formatTime={formatTime}
              />
            </S.CenterblockContent>
          </S.MainCenterblock>
          <Sidebar 
          isLoading={isLoading}
           handleLogout={handleLogout} />
          {currentTodo ? (<Bar currentTodo={currentTodo} formatTime={formatTime} />) : null}
        </S.Main>
        <footer className="footer" />
      </>
    );
}