import './App.css'
import Nav from './components/Nav'
import Search from './components/Search'
import FilterComponents from './components/FilterComponents'
import PlaylistTitle from './components/PlaylistTitle'
import Playlist from './components/Playlist'
import Sidebar from './components/Sidebar'
import Bar from './components/Bar'

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <main className="main">
          <Nav />
          <div className="main__centerblock centerblock">
            <Search />
            <h2 className="centerblock__h2">Треки</h2>
            <FilterComponents />
            <div className="centerblock__content">
              <PlaylistTitle />
              <Playlist />
            </div>
          </div>
          <Sidebar />
        </main>
        <Bar />
        <footer className="footer" />
      </div>
    </div>
  )
}

export default App
