import { useState, useEffect } from 'react';
import * as S from './App.style';
import { GlobalStyles } from './GlobalStyles';
import AppRoutes from './routes';
import getTodos from './api';

function App() {
  const [user, setUser] = useState(null);
  const [todos, setTodos] = useState([]);
  const [currentTodo, setCurrentTodo] = useState(null);

    useEffect(() => {
      getTodos().then((todo) => {
        setTodos(todo);
      });
    }, [])


  const handleLogin = () =>  {
    localStorage.setItem('login', 'SetLogin');
    const getuser = localStorage.getItem('login');
    setUser(getuser);
  }

  const handleTodoClick = (todo) => {
    setCurrentTodo(todo);
  }
  return (
    <>
    <GlobalStyles />
    <S.Wrapper>
      <S.Container>
      <AppRoutes user={user}
      onClick={(todo) => {
        handleLogin();
        handleTodoClick(todo);
      }}
         todos={todos}
         setTodos={setTodos}
         currentTodo={currentTodo}
         setCurrentTodo={setCurrentTodo} />
      </S.Container>
    </S.Wrapper>
    </>
  )
}

export default App;