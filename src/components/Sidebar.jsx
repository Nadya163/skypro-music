function Personal({ text }) {
    return (
        <div className="sidebar__personal">
        <p className="sidebar__personal-name">{text}</p>
        <div className="sidebar__icon">
          <svg alt="logout">
            <use xlinkHref="img/icon/sprite.svg#logout" />
          </svg>
        </div>
      </div>
    )
}

function SidebarBlock({ img }) {
    return (
        <div className="sidebar__item">
        <a className="sidebar__link" href="/">
          <img
            className="sidebar__img"
            src={img}
            alt="day's playlist"
          />
        </a>
      </div>
    )
}

function Sidebar() {
    return (
        <div className="main__sidebar sidebar">
            <Personal text="Sergey.Ivanov" />
            <div className="sidebar__block">
              <div className="sidebar__list">
                <SidebarBlock img="img/playlist01.png" />
                <SidebarBlock img="img/playlist02.png" />
                <SidebarBlock img="img/playlist03.png" />
              </div>
            </div>
        </div>
    )
}

export default Sidebar;