import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as S from './Sidebar.style';
import sidebarArray from "../SidebarArray";


function Personal({ text }) {
    return (
        <S.SidebarPersonal>
        <S.SidebarPersonalName>{text}</S.SidebarPersonalName>
        <S.SidebarIcon>
          <svg alt="logout">
            <use xlinkHref="img/icon/sprite.svg#logout" />
          </svg>
        </S.SidebarIcon>
      </S.SidebarPersonal>
    )
}

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

function Sidebar() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

    return (
        <S.MainSidebar>
        {isLoading ? (
          <>
          {/* Скелет пользователя */}
          <LoadingPersonal />

          </>
        ) : (
          <>
          {/* Авторизованный пользователь */}
            <Personal text="Sergey.Ivanov" />
          </>
        )}
            <S.SidebarBlock>
              <S.SidebarList>
              {isLoading ? (
          <>
          <Loading />
          <Loading />
          <Loading />
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

