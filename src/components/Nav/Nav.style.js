import styled from 'styled-components'

export const MainNav = styled.div`
    width: 244px;
    height: 1002px;
    flex-shrink: 0;
    background: #181818;
    padding-left: 36px;
`;

export const Header = styled.div`
    height: 144px;
    width: 144px;
    position: fixed;
    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background: #181818;
      z-index: 2;
    }
`;

export const NavBurger = styled.div`
    width: 20px;
    height: 36px;
    padding: 13px 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    cursor: pointer;
    text-align: center;
    position: relative;
    z-index: 2;
`;

export const BurgerLine = styled.span`
    display: inline-block;
    width: 100%;
    height: 1px;
    background-color: #d3d3d3;
    transition: all 0.3s ease-in-out;
    
    ${NavBurger}.open & {
        &:nth-child(1) { 
          transform: translateY(5px) rotate(45deg);
        }

        &:nth-child(2) { 
          opacity: 0; 
        }
    
        &:nth-child(3) { 
          transform: translateY(-5px) rotate(-45deg); 
        }
    } 
`;

export const NavMenu = styled.div`
  transform: translateY(-100%);
  transition: transform 0.5s ease;
  height: 100%;
  width: 100%;
  z-index: 1;
  
  &.open {
    transform: translateY(0);
  }
`;

export const MenuList = styled.ul`
    padding: 18px 0 10px 0;
`;

export const NavLogo = styled.div`
    width: 113.33px;
    height: 43px;
    padding-bottom: 46px;
    background-color: transparent;
    margin-bottom: 20px;
    padding-top: 36px;
    position: relative;
    z-index: 2;
`;

export const LogoImage = styled.img`
    width: 113.33px;
    height: 17px;
    color: #181818;
`;

export const MenuItem = styled.li`
    padding: 5px 0;
    margin-bottom: 16px;
`;

export const MenuLink = styled.a`
    color: #ffffff;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
`;
