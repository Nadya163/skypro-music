import { useState } from 'react';
import * as S from '../../App.style';
import Nav from '../../components/Nav/Nav';
import Search from '../../components/Search/Search';
import FilterComponents from '../../components/FilterComponents/FilterComponents';
import PlaylistTitle from '../../components/PlaylistTitle/PlaylistTitle';
import Playlist from '../../components/Playlist/Playlist';
import Sidebar from '../../components/Sidebar/Sidebar';
import Bar from '../../components/Bar/Bar';


export default function Main() {
  const [user, setUser] = useState(null);

  const handleLogin = () => setUser({ login: "taradam" });

  const handleLogout = () => setUser(null);
    return (
      <>
          <S.Main>
          <Nav
          user={user}
          onAuthButtonClick={user ? handleLogout : handleLogin}
          />
          <S.MainCenterblock>
            <Search />
            <S.CenterblockH2>Треки</S.CenterblockH2>
            <FilterComponents />
            <S.CenterblockContent>
              <PlaylistTitle />
              <Playlist />
            </S.CenterblockContent>
          </S.MainCenterblock>
          <Sidebar />
        </S.Main>
        <Bar />
        <footer className="footer" />
      </>
    );
  };
