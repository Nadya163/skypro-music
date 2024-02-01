import { useEffect, useState } from 'react'
import * as S from './FilterComponents.style'
import { useDispatch, useSelector } from 'react-redux';
import { useGetAllMusicQuery } from '../../apiServece'
import { 
  selectActiveLinkOnFilters, 
  selectFilterAuthors, 
  selectFilterGenres, 
  selectFilterSort 
  } from '../../store/selectors/selectors';
import { 
  setDeleteFilterAuthors,
   setDeleteFilterGenres,
   setFilterAuthors,
   setFilterGenres,
   setFilterSort
   } from '../../store/redux/playerSlice';

function FilterComponents() {
  const { data } = useGetAllMusicQuery()
  const dispatch = useDispatch()
  const [activeFilter, setActiveFilter] = useState();
  const [genreArray, setGenreArray] = useState([])
  const [authorArray, setAuthorArray] = useState([])
  const [releaseArray, setReleaseArray] = useState([])
  const authorTrackFilter = useSelector(selectFilterAuthors)
  const genreTrackFilter = useSelector(selectFilterGenres)
  const sortTrackFilter = useSelector(selectFilterSort)
  const activeLinkOnFilters = useSelector(selectActiveLinkOnFilters)
  const [activeAuthor, setActiveAuthor] = useState(null);

  const handleAuthorTrackFilter = (authorTrack) => {
    if (authorTrackFilter.includes(authorTrack)) {
      dispatch(setDeleteFilterAuthors(authorTrack));
      if (activeAuthor === authorTrack) {
        setActiveAuthor(null);
      }
    } else {
      dispatch(setFilterAuthors(authorTrack));
      setActiveAuthor(authorTrack);
    }
  }

  const handleGenreTrackFilter = (authorTrack) => {
    if (genreTrackFilter.includes(authorTrack)) {
      dispatch(setDeleteFilterGenres(authorTrack))
    } else {
      dispatch(setFilterGenres(authorTrack))
    }
  }

  const toggleVisibleFilter = (filter) => {
    setActiveFilter(activeFilter === filter ? null : filter)
  };

  useEffect(() => {
    if (data?.length > 0) {
      let newArr = []
      let arr = data.map(elem => elem.genre)
      for (let i = 0; i < arr.length; i++) {
        if (newArr.includes(arr[i])) continue
        newArr.push(arr[i])
      }
      setGenreArray(newArr)
      setAuthorArray(data.map(elem => elem.author))
      setReleaseArray(
        ["По умолчанию", "Сначала новые", "Сначала старые"]
          .map(elem => elem))
    }
  }, [data, activeFilter])

  return (
    <S.CenterblockFilter>
      <S.FilterTitle>Искать по:</S.FilterTitle>
      <S.ButtonBox>
        <S.FilterButton
          onClick={() => toggleVisibleFilter('author')}
          type="button"
        >
          исполнителю
        </S.FilterButton>
        {activeFilter === "author" &&
            <>
              {authorTrackFilter.length ? (
            <S.FilterLength>{authorTrackFilter.length}</S.FilterLength>
            ) : (
                ''
              )}
            <S.MenuAuthor>
              <S.AuthorList>
              {authorArray.map((author, index) => (
                  <S.ListAuthor key={`item-${index}`}>
                    <S.ListAuthorLink href='#'
                        $isSelected={
                          authorTrackFilter.includes(author) ?
                            !activeLinkOnFilters :
                            activeLinkOnFilters
                        }
                        $isActive={author === activeAuthor}
                        onClick={() => handleAuthorTrackFilter(author)}
                      >{author}</S.ListAuthorLink>
                  </S.ListAuthor>
                ))}
              </S.AuthorList>
            </S.MenuAuthor>
          </>
        }
      </S.ButtonBox>
      <S.ButtonBox>
        <S.FilterButton
          onClick={() => toggleVisibleFilter('genre')}
          type="button"
        >
          жанру
        </S.FilterButton>
        {activeFilter === "genre" &&
            <>
              {genreTrackFilter.length ? (
            <S.FilterLength>{genreTrackFilter.length}</S.FilterLength>
            ) : (
                ''
              )}
            <S.MenuFilterSort>
              <S.AuthorList>
              {genreArray.map((genre) => (
                  <S.ListAuthor key={genre}>
                    <S.ListAuthorLink href='#'
                        $isSelected={
                          genreTrackFilter.includes(genre) ?
                            !activeLinkOnFilters :
                            activeLinkOnFilters
                        }
                        onClick={() => handleGenreTrackFilter(genre)}
                      >{genre}</S.ListAuthorLink>
                  </S.ListAuthor>
                ))}
              </S.AuthorList>
            </S.MenuFilterSort>
          </>
        }
      </S.ButtonBox>
      <S.FilterTitle>Сортировка:</S.FilterTitle>
      <S.ButtonBox>
        <S.FilterButton
          onClick={() => toggleVisibleFilter("sorting")}
          type="button"
        >
        По умолчанию
        </S.FilterButton>
        {activeFilter === "sorting" &&
            <>
              {sortTrackFilter.sort !== '' &&
                sortTrackFilter.sort !== 'По умолчанию' ? (
            <S.FilterLength>1</S.FilterLength>
            ) : (
                ''
              )}
            <S.MenuFilterSort>
              <S.AuthorList>
              {releaseArray.map((release) => (
                  <S.ListAuthor key={release}>
                    <S.ListAuthorLink href='#'
                        $isSelected={
                          sortTrackFilter.sort.includes(release) ?
                            !activeLinkOnFilters :
                            activeLinkOnFilters
                        }
                        onClick={() => dispatch(setFilterSort(release))}>
                        {release}</S.ListAuthorLink>
                  </S.ListAuthor>
                ))}
              </S.AuthorList>
            </S.MenuFilterSort>
          </>
        }
      </S.ButtonBox>
    </S.CenterblockFilter>
  )
}

export default FilterComponents
