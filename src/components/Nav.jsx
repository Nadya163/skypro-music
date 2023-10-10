import { useState } from 'react';
import '../App.css';

function Logo() {
    return (
        <div className="nav__logo logo">
            <img className="logo__image" src="img/logo.png" alt="logo" />
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
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleKeyDown = (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          setIsOpen(!isOpen);
        }
      };
  
  return (
    <nav className="main__nav nav">
      <div className='header'>  
      <Logo />
        <div
        className={`nav__burger burger ${isOpen ? 'open' : ''}`}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex="0"
      >
        <span className="burger__line" />
        <span className="burger__line" />
        <span className="burger__line" />
      </div>
      <div className={`nav__menu menu ${isOpen ? 'open' : ''}`}>
        <ul className="menu__list">
          <MenuItem link="/" text="Главное" />
          <MenuItem link="/" text="Мой плейлист" />
          <MenuItem link="Signin.js" text="Войти" />
        </ul>
      </div>      
      </div>
    </nav>
  );
}

export default Nav;