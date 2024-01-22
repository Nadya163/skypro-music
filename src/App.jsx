import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './App.style';
import { GlobalStyles } from './GlobalStyles';
import AppRoutes from './routes';
import UserContext from './context'
import { useDispatch } from 'react-redux';
import { setCurrentTrack } from './store/redux/playerSlice';
import { resetAuth } from './store/redux/authSlice';

function App() {
  const dispatch = useDispatch();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  const [currentTodo, setCurrentTodo] = useState(null);

  const handleTodoClick = (todo) => {
    setCurrentTodo(todo);
    dispatch(setCurrentTrack(todo))
  }

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    resetAuth();
    navigate('/login');
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
