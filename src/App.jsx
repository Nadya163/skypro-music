import { useState, useEffect } from 'react';
import * as S from './App.style';
import { GlobalStyles } from './GlobalStyles';
import AppRoutes from './routes';
import getTodos from './api';

function App() {
  const [user, setUser] = useState(null);
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentTodo, setCurrentTodo] = useState(null);
  const [addTodoError, setAddTodoError] = useState(null);

  const handleTodoClick = (todo) => {
    setCurrentTodo(todo)
  }

  useEffect(() => {
      const storedLogin = localStorage.getItem('login');
      if (storedLogin) {
        setUser({ login: storedLogin });
      };
    getTodos()
      .then((todo) => {
        setTodos(todo);
        setIsLoading(false);
      })
      .catch((error) => {
        setAddTodoError(error.message);
      });
  }, []);

  const handleLogin = (login) =>  {
    localStorage.setItem('login', login);
  }

  const handleLogout = () => {
    localStorage.removeItem('login');
    setUser(null);
  };

  return (
    <>
    <GlobalStyles />
    <S.Wrapper>
      <S.Container>
      <AppRoutes user={user}
        onClick={() => {
        handleLogin();
        handleLogout();
      }}
         todos={todos}
         setTodos={setTodos}
         isLoading={isLoading}
         setIsLoading={setIsLoading}
         currentTodo={currentTodo}
         handleTodoClick={handleTodoClick}
         addTodoError={addTodoError}
         />
      </S.Container>
    </S.Wrapper>
    </>
  )
}

export default App;