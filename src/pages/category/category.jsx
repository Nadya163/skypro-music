import * as S from '../../App.style'
import { useParams } from 'react-router-dom'
import { styled } from 'styled-components'
import sidebarArray from '../../components/Array/SidebarArray'
import FilterComponents from '../../components/FilterComponents/FilterComponents'
import PlaylistTitle from '../../components/PlaylistTitle/PlaylistTitle'
import Skeletone from '../../components/Skeletone/Skeletone'
import { useGetSelectionsQuery } from '../../apiServece'
import { useDispatch, useSelector } from 'react-redux'
import { setCategoryTrackId } from '../../store/redux/playerSlice'
import PlaylistArray from '../../components/Array/PlaylistArray'
import { selectorSearchTrack } from '../../store/selectors/selectors'

export const StyledSidebar = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`

export default function Category({ handleTodoClick }) {
  const dispatch = useDispatch()
  const params = useParams()
  const { addTodoError, isLoading, data } = useGetSelectionsQuery(params.id);
  const sidebar = sidebarArray.find((item) => item.id === Number(params.id));
  const searchTrackTitle = useSelector(selectorSearchTrack);

  setTimeout(() => {
    dispatch(setCategoryTrackId(searchTrack))
  }, 500);

  const searchTrack = data?.items?.filter((todo) => {
    const matchesTitle = todo.name.toLowerCase().
      includes(searchTrackTitle.toLowerCase())
    return matchesTitle
  });
  
  return (
    <>
      <S.CenterblockH2>{sidebar.name}</S.CenterblockH2>
      <FilterComponents />
      <S.CenterblockContent>
        <PlaylistTitle />
        {addTodoError && (
          <p>
            Не удалось загрузить плейлист, попробуйте позже: {addTodoError}.
          </p>
        )}
        {isLoading ? (
          <Skeletone />
        ) : (
          searchTrack.map((todo) => (
            <PlaylistArray
              key={todo.id}
              data={data?.items}
              todo={todo}
              handleTodoClick={handleTodoClick}
            />
          ))
        )}
      </S.CenterblockContent>
    </>
  )
}
