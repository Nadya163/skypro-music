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
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    getTodos()
      .then((todo) => {
        setTodos(todo);
      })
      .catch((error) => {
        setAddTodoError(error.message);
      });
  }, []);

  const handleLogin = () =>  {
    localStorage.setItem('login', 'SetLogin');
    const getuser = localStorage.getItem('login');
    setUser(getuser);
  }

  return (
    <>
    <GlobalStyles />
    <S.Wrapper>
      <S.Container>
      <AppRoutes user={user}
        onClick={() => {
        handleLogin();
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