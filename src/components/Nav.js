function Logo() {
    return (
        <div className="nav__logo logo">
            <img className="logo__image" src="img/logo.png" alt="logo" />
        </div>
    )
}

function Burger() {
    return (
        <div className="nav__burger burger">
        <span className="burger__line" />
        <span className="burger__line" />
        <span className="burger__line" />
      </div>
    )
}

function MenuItem({ link, text }) {
    <li className="menu__item">
    <a href={link} className="menu__link">
      {text}
    </a>
  </li>
}

function Nav() {
    <nav className="main__nav nav">
    <Logo />
    <Burger />
    <div className="nav__menu menu">
      <ul className="menu__list">
        <MenuItem link="/" text="Главное" />
        <MenuItem link="/" text="Мой плейлист" />
        <MenuItem link="../signin.html" text="Войти" />
      </ul>
    </div>
  </nav>
}

export default Nav;