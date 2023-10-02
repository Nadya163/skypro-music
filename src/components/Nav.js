import '../App.css';

function Logo() {
    return (
        <div className="nav__logo logo">
            <img className="logo__image" src="img/logo.png" alt="logo" />
        </div>
    );
}

function Burger() {
    return (
        <div className="nav__burger burger">
        <span className="burger__line" />
        <span className="burger__line" />
        <span className="burger__line" />
      </div>
    );
}

function MenuItem({ link, text }) {
    return (
    <li className="menu__item">
    <a href={link} className="menu__link">
      {text}
    </a>
  </li>
    );
}

function Nav() {
    return (
    <nav className="main__nav nav">
    <Logo />
    <Burger />
    <div className="nav__menu menu">
      <ul className="menu__list">
        <MenuItem link="/" text="Главное" />
        <MenuItem link="/" text="Мой плейлист" />
        <MenuItem link="Signin.js" text="Войти" />
      </ul>
    </div>
  </nav>
    );
}

export default Nav;