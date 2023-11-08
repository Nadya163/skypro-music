import { useState } from 'react'
import * as S from './FilterComponents.style'

function FilterComponents({ todos }) {
  const [isMenuOpen, setIsMenuOpen] = useState(null);

  const toggleVisibleFilter = (filter) => {
    setIsMenuOpen(isMenuOpen === filter ? null : filter)
  }

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
        {isMenuOpen === 'author' && (
          <>
            <S.FilterLength>{todos.length}</S.FilterLength>
            <S.MenuAuthor>
              <S.AuthorList>
                {todos.map((item) => (
                  <S.ListAuthor key={item.id}>
                    <S.ListAuthorLink href="/">
                      {item.author}
                    </S.ListAuthorLink>
                  </S.ListAuthor>
                ))}
              </S.AuthorList>
            </S.MenuAuthor>
          </>
        )}
      </S.ButtonBox>
      <S.ButtonBox>
        <S.FilterButton
          onClick={() => toggleVisibleFilter('year')}
          type="button"
        >
          году выпуска
        </S.FilterButton>
        {isMenuOpen === 'year' && (
          <>
            <S.FilterLength>{todos.length}</S.FilterLength>
            <S.MenuAuthor>
              <S.AuthorList>
                {todos.map((item) => (
                  <S.ListAuthor key={item.id}>
                    <S.ListAuthorLink href="/">
                      {item.release_date}
                    </S.ListAuthorLink>
                  </S.ListAuthor>
                ))}
              </S.AuthorList>
            </S.MenuAuthor>
          </>
        )}
      </S.ButtonBox>
      <S.ButtonBox>
        <S.FilterButton
          onClick={() => toggleVisibleFilter('genre')}
          type="button"
        >
          жанру
        </S.FilterButton>
        {isMenuOpen === 'genre' && (
          <>
            <S.FilterLength>{todos.length}</S.FilterLength>
            <S.MenuAuthor>
              <S.AuthorList>
                {todos.map((item) => (
                  <S.ListAuthor key={item.id}>
                    <S.ListAuthorLink href="/">
                      {item.genre}
                    </S.ListAuthorLink>
                  </S.ListAuthor>
                ))}
              </S.AuthorList>
            </S.MenuAuthor>
          </>
        )}
      </S.ButtonBox>
    </S.CenterblockFilter>
  )
}

export default FilterComponents
