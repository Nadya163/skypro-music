import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './App.style';
import { GlobalStyles } from './GlobalStyles';
import AppRoutes from './routes';
import getTodos from './api';
import UserContext from './context'

function App() {
  const [user, setUser] = useState(localStorage.getItem('user') || null) 
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentTodo, setCurrentTodo] = useState(null);
  const [addTodoError, setAddTodoError] = useState(null);

  const handleTodoClick = (todo) => {
    setCurrentTodo(todo)
  }

  useEffect(() => {
    getTodos()
      .then((todo) => {
        setTodos(todo);
        setIsLoading(false);
      })
      .catch((error) => {
        setAddTodoError(error.message);
      });
  }, []);

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

return (
  <>
    <GlobalStyles />
    <S.Wrapper>
      <S.Container>
        <div>
          <UserContext.Provider value={{ user, handleLogout }}>
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
              addTodoError={addTodoError}
            />
          </UserContext.Provider>
        </div>
      </S.Container>
    </S.Wrapper>
  </>
);
}

export default App;