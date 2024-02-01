import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './App.style';
import { GlobalStyles } from './GlobalStyles';
import AppRoutes from './routes';
import UserContext from './context'
import { useDispatch, useSelector } from 'react-redux';
import { 
  setCurrentTrack, 
  setCurrentTrackList } from './store/redux/playerSlice';
import { resetAuth } from './store/redux/authSlice';
import { selectorCategoryTrackId, selectorFavorites, selectorTrackList } from './store/selectors/selectors';

function App() {
  const dispatch = useDispatch();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  const [currentTodo, setCurrentTodo] = useState(null);
  const favoritesTrack = useSelector(selectorFavorites);
    const categoryTrackId = useSelector(selectorCategoryTrackId);
    const trackList = useSelector(selectorTrackList);

    console.log(currentTodo);

  const handleTodoClick = (todo) => {
    setCurrentTodo(todo);
    dispatch(setCurrentTrack(todo))
    if (location.pathname === "/") {
      dispatch(setCurrentTrackList(trackList))
      console.log(trackList, "треклист");
    }
    if (location.pathname === "/myplaylist") {
      dispatch(setCurrentTrackList(favoritesTrack));
      console.log(favoritesTrack);
    }
    if (
      location.pathname === `/category/1` ||
      location.pathname === `/category/2` ||
      location.pathname === `/category/3`
    ) {
      dispatch(setCurrentTrackList(categoryTrackId))
    }
  }

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    resetAuth();
    navigate('/login');
    setCurrentTodo(null);
  };

return (
  <>
  <UserContext.Provider value={{ userData: user, changingUserData: setUser }}>
    <GlobalStyles />
    <S.Wrapper>
      <S.Container>
            <AppRoutes
              user={user}
              onClick={() => {
                handleLogout();
              }} 
              handleLogout={handleLogout}
              setUser={setUser}
              currentTodo={currentTodo}
              handleTodoClick={handleTodoClick}
            />
        </S.Container>
      </S.Wrapper>
  </UserContext.Provider>
  </>
);
}

export default App;
