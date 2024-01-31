import * as S from './Playlist.style'
import { useGetAllMusicQuery, useGetSelectionsQuery } from '../../apiServece';
import PlaylistArray from '../Array/PlaylistArray';
import { 
  useDispatch, 
  useSelector } from 'react-redux';
import { 
  setSortTrackFilter, 
  setTrackList
 } from '../../store/redux/playerSlice';
import { selectFilterAuthors, selectFilterGenres, selectFilterSort, selectorSearchTrack } from '../../store/selectors/selectors';
import { useEffect } from 'react';
import Skeletone from '../Skeletone/Skeletone';

function Playlist({ handleTodoClick }) {
   const dispatch = useDispatch();
  const { data } = useGetAllMusicQuery();
  const searchTrackTitle = useSelector(selectorSearchTrack);
  const authorTrackFilter = useSelector(selectFilterAuthors)
  const genreTrackFilter = useSelector(selectFilterGenres)
  const sortTrackFilter = useSelector(selectFilterSort)
  const { addTodoError, isLoading } = useGetSelectionsQuery();

   useEffect(() => {
    if(data) {
      dispatch(setTrackList(data));
    }
  }, [data]);

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
      {isLoading ? (
        <Skeletone />
      ) : (
        <>
          {addTodoError && <p>Не удалось загрузить плейлист, попробуйте позже: {addTodoError}.</p>}
          <S.PlaylistItem>
            {filteredAndSortTracks()?.map((todo) => (
              <PlaylistArray
                key={todo.id}
                todo={todo}
                handleTodoClick={handleTodoClick}
              />
            ))}
          </S.PlaylistItem>
        </>
      )}
    </S.ContentPlaylist>
  );
}

export default Playlist;