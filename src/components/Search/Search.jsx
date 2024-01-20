import { useDispatch, useSelector } from 'react-redux';
import * as S from './Search.style'
import { selectorSearchTrack } from '../../store/selectors/selectors';
import { setSearchTrack } from '../../store/redux/playerSlice';

function Search() {

  const dispatch = useDispatch();
  const searchTrackTitle = useSelector(selectorSearchTrack);

  const handleSearchTrackTitle = (e) => {
      dispatch(setSearchTrack(e.target.value))
  };

    return (
        <S.CenterblockSearch>
        <S.SearchSvg>
          <use href="img/icon/sprite.svg#icon-search" />
        </S.SearchSvg>
        <S.SearchText
          type="search"
          value={searchTrackTitle}
          placeholder="Поиск"
          name="search"
          onChange={handleSearchTrackTitle}
        />
      </S.CenterblockSearch>
    );
}

export default Search;