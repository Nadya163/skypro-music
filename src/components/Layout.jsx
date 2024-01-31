import { Outlet } from 'react-router-dom';
import * as S from '../App.style';
import Bar from '../components/Bar/Bar';
import Nav from '../components/Nav/Nav';
import Search from '../components/Search/Search';
import Sidebar from '../components/Sidebar/Sidebar';

const Layout =({ currentTodo, handleLogout }) => {

    return (
      <>
        <S.Main>
          <Nav
            handleLogout={handleLogout}
          />
          <S.MainCenterblock>
            <Search />
            <Outlet />
          </S.MainCenterblock>
          <Sidebar 
           handleLogout={handleLogout} />
          {currentTodo ? (<Bar  />) : null}
        </S.Main>
        <footer className="footer" />
      </>
    )
}

export default Layout;