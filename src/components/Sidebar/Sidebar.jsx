import { useState, useEffect } from "react";
import * as S from './Sidebar.style'

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

function SidebarBlock({ img }) {
    return (
        <S.SidebarItem>
        <S.SidebarLink href="/">
          <S.SidebarImg
            src={img}
            alt="day's playlist"
          />
        </S.SidebarLink>
      </S.SidebarItem>
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
            <SidebarBlock img="img/playlist01.png" />
            <SidebarBlock img="img/playlist02.png" />
            <SidebarBlock img="img/playlist03.png" />
          </>
        )}
      </S.SidebarList>
    </S.SidebarBlock>
    </S.MainSidebar>
    )
}

export default Sidebar;

