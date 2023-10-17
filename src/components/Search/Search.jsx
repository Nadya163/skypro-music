import * as S from './Search.style'

function Search() {
    return (
        <S.CenterblockSearch>
        <S.SearchSvg>
          <use href="img/icon/sprite.svg#icon-search" />
        </S.SearchSvg>
        <S.SearchText
          type="search"
          placeholder="Поиск"
          name="search"
        />
      </S.CenterblockSearch>
    );
}

export default Search;