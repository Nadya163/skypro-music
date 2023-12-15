import { Outlet } from 'react-router-dom';
import * as S from '../App.style';
import Bar from '../components/Bar/Bar';
import Nav from '../components/Nav/Nav';
import Search from '../components/Search/Search.style';
import Sidebar from '../components/Sidebar/Sidebar';

const Layout =({ isLoading, currentTodo, handleLogout }) => {

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
          isLoading={isLoading}
           handleLogout={handleLogout} />
          {currentTodo ? (<Bar currentTodo={currentTodo} />) : null}
        </S.Main>
        <footer className="footer" />
        </>
    )
}

export default Layout;