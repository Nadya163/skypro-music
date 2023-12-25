import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './App.style';
import { GlobalStyles } from './GlobalStyles';
import AppRoutes from './routes';
// import getTodos from './api';
import UserContext from './context'
import { useDispatch } from 'react-redux';
import { setCurrentTrack } from './store/redux/playerSlice';

function App() {
  const dispatch = useDispatch();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentTodo, setCurrentTodo] = useState(null);
  // const [addTodoError, setAddTodoError] = useState(null);

  const handleTodoClick = (todo) => {
    setCurrentTodo(todo);
    dispatch(setCurrentTrack(todo))
  }

  // useEffect(() => {
  //   getTodos()
  //     .then((todo) => {
  //       setTodos(todo);
  //       dispatch(setTrackList(todo));
  //       setIsLoading(false);
  //     })
  //     .catch((error) => {
  //       setAddTodoError(error.message); 
  //     });
  // }, []);

  // console.log(user);

    const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
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
              todos={todos}
              setTodos={setTodos}
              setUser={setUser}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
              currentTodo={currentTodo}
              handleTodoClick={handleTodoClick}
              // addTodoError={addTodoError}
            />
        </S.Container>
      </S.Wrapper>
  </UserContext.Provider>
  </>
);
}

export default App;
