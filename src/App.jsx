import { useState } from 'react';
import * as S from './App.style';
import { GlobalStyles } from './GlobalStyles';
import AppRoutes from './routes';



function App() {
  const [user, setUser] = useState(null);

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
      <AppRoutes user={user} onClick={handleLogin} />
      </S.Container>
    </S.Wrapper>
    </>
  )
}

export default App;
