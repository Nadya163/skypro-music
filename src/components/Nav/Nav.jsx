import { useState } from 'react';
import * as S from './Nav.style'

function Logo() {
    return (
        <S.NavLogo>
            <S.LogoImage src="img/logo.png" alt="logo" />
        </S.NavLogo>
    );
}

function MenuItem({ link, text }) {
    return (
    <S.MenuItem>
    <S.MenuLink href={link}>
      {text}
    </S.MenuLink>
  </S.MenuItem>
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
            <MenuItem link="/" text="Мой плейлист" />
            <MenuItem link="Signin.js" text="Войти" />
          </S.MenuList>
        </S.NavMenu>
      )}      
      </S.Header>
    </S.MainNav>
  );
}

export default Nav;