import { Link } from "react-router-dom";
import { useContext } from "react";
import * as S from './Sidebar.style';
import sidebarArray from "../Array/SidebarArray";
import UserContext from "../../context";
import { useGetSelectionsQuery } from "../../apiServece";

function LoadingPersonal() {
  return (
    <S.SidebarPersonal>
    <S.SidebarPersonalNameloading>
      <img src="img/icon/playlistName.svg" alt="" />
    </S.SidebarPersonalNameloading>
    <S.SidebarIcon>
      <svg alt="logout">
        <use xlinkHref="img/icon/sprite.svg" />
      </svg>
    </S.SidebarIcon>
  </S.SidebarPersonal>
)
}

function Loading() {
  return (
    <S.SidebarItem>
    <S.SidebarLinkLoading href="/">
      <S.SidebarImg
        src="img/icon/collectionPlaylist.svg"
        alt="day's playlist"
      />
    </S.SidebarLinkLoading>
  </S.SidebarItem>
)
}

function Sidebar({ handleLogout }) {
const {userData} = useContext(UserContext);
const { isLoading } = useGetSelectionsQuery();

    return (
      <S.MainSidebar>
        {isLoading ? (
          <LoadingPersonal />
        ) : (
          <S.SidebarPersonal>
          <S.SidebarPersonalName>{userData.username}</S.SidebarPersonalName>
          <S.SidebarIcon>
            <svg alt="logout" onClick={handleLogout}>
              <use xlinkHref="../img/icon/sprite.svg#logout" />
            </svg>
          </S.SidebarIcon>
        </S.SidebarPersonal>
        )}
            <S.SidebarBlock>
              <S.SidebarList>
              {isLoading ? (
          <>
              {sidebarArray.map((item) => (
                        <Loading key={item.id}
                                
              />
              ))}
              </>
        ) : (
            <>
              {sidebarArray.map((item) => (
                      <S.SidebarItem key={item.id}>
                        <S.SidebarLink as={Link} to={`/category/${item.id}`}>
                          <S.SidebarImg
                            src={item.img}
                            alt={item.name}
                          />
                        </S.SidebarLink>
                      </S.SidebarItem>
              ))}
            </>
        )}
          </S.SidebarList>
        </S.SidebarBlock>
    </S.MainSidebar>
    )
}

export default Sidebar;

