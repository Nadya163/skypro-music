import * as S from './App.style'
import { GlobalStyles } from './GlobalStyles'
import Nav from './components/Nav/Nav'
import Search from './components/Search/Search'
import FilterComponents from './components/FilterComponents/FilterComponents'
import PlaylistTitle from './components/PlaylistTitle/PlaylistTitle'
import Playlist from './components/Playlist/Playlist'
import Sidebar from './components/Sidebar/Sidebar'
import Bar from './components/Bar/Bar'

function App() {
  return (
    <>
    <GlobalStyles />
    <S.Wrapper>
      <S.Container>
        <S.Main>
          <Nav />
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
      </S.Container>
    </S.Wrapper>
    </>
  )
}

export default App
