import * as S from './Playlist.style'
import { useGetAllMusicQuery } from '../../apiServece';
import PlaylistArray from '../Array/PlaylistArray';
import { useDispatch, useSelector } from 'react-redux';
import { setSortTrackFilter, setTrackList } from '../../store/redux/playerSlice';
import { selectFilterAuthors, selectFilterGenres, selectFilterSort, selectorSearchTrack } from '../../store/selectors/selectors';
import { useEffect } from 'react';

function Playlist({ handleTodoClick }) {
   const dispatch = useDispatch();
  const { data } = useGetAllMusicQuery();
  const searchTrackTitle = useSelector(selectorSearchTrack);
  const authorTrackFilter = useSelector(selectFilterAuthors)
  const genreTrackFilter = useSelector(selectFilterGenres)
  const sortTrackFilter = useSelector(selectFilterSort)

   useEffect(() => {
    dispatch(setTrackList(data));
  }, [searchTrackTitle]);

  const searchTrack = data?.filter((todo) => {
      const matchesTitle = todo.name.toLowerCase().includes(searchTrackTitle.toLowerCase());
      const sortFilterAuthor = !authorTrackFilter.length
      ? todo
      : todo.author.includes(
        authorTrackFilter.find((author) => author === todo.author)
      )
    const sortFilterGenre = !genreTrackFilter.length
      ? todo
      : todo.genre.includes(
        genreTrackFilter.find((genre) => genre === todo.genre)
      )
    return matchesTitle && sortFilterGenre && sortFilterAuthor
  });

  const filteredAndSortTracks = () => {
    if (sortTrackFilter.sort === "Сначала новые") {
      return searchTrack
        .sort((a, b) => parseFloat(a.release_date) - parseFloat(b.release_date))
        .reverse()
    }
    if (sortTrackFilter.sort === "Сначала старые") {
      return searchTrack
        .sort((a, b) => parseFloat(a.release_date) - parseFloat(b.release_date))
    }
    if (sortTrackFilter.sort === "По умолчанию" || !setSortTrackFilter.sort) {
      return searchTrack
    }
  }
   
  return (
    <S.ContentPlaylist>
      <S.PlaylistItem>
            {filteredAndSortTracks()?.map((todo) => (
              <PlaylistArray 
              key={todo.id}
              todo={todo}
              handleTodoClick={handleTodoClick}
               />
              ))}
      </S.PlaylistItem>
    </S.ContentPlaylist>
  )
}

export default Playlist;