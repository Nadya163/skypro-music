import { useState } from 'react';
import { Link } from 'react-router-dom';
import * as S from './Nav.style';

function Logo() {
    return (
        <S.NavLogo>
            <S.LogoImage src="../img/logo.png" alt="logo" />
        </S.NavLogo>
    );
}

function MenuItem({ link, text  }) {
    return (
    <S.MenuItem>
    <S.MenuLink as={Link} to={link}>
      {text}
    </S.MenuLink>
  </S.MenuItem>
    );
}

function Nav({ handleLogout }) {
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
    <S.MainNav>
      <S.Header>  
      <Logo />
        <S.NavBurger className={isOpen ? 'open' : ''} 
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex="0"
      >
        <S.BurgerLine />
        <S.BurgerLine />
        <S.BurgerLine />
      </S.NavBurger>
      {isOpen && (
        <S.NavMenu className={isOpen ? 'open' : ''}>
          <S.MenuList>
            <MenuItem link="/" text="Главное" />
            <MenuItem link="/myplaylist" text="Мой плейлист" />
            <S.MenuItem>
            <S.MenuLink as={Link} to="/login" type='button' onClick={handleLogout} >
              Выйти
            </S.MenuLink>
          </S.MenuItem>
            {/* <MenuItem link="/registration" text="Выйти" onClick={handleLogout} /> */}
          </S.MenuList>
        </S.NavMenu>
      )}      
      </S.Header>
    </S.MainNav>
  );
}

export default Nav;