import { useState, useEffect } from "react";

function ListAuthor({ link, author }) {
  return (
    <li className="list__author">
      <a href={link} className="list__author_link">
        {author}
      </a>
    </li>
  )
}

function FilterComponents() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      setIsMenuOpen(!isMenuOpen);
    }
  };

  const handleOutsideClick = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

      return (
        <div className="centerblock__filter filter">
              <div className="filter__title">Искать по:</div>
              <div className="filter__button button-author _btn-text" 
              onClick={toggleMenu}
              onKeyDown={handleKeyDown}
              role="button"
              tabIndex="0" >
                исполнителю
              </div>
              {isMenuOpen && (
                <div className="menu__author">
                  <div className="box__menu">
                    <ul className="author__list">
                      <ListAuthor link="/" author="Nero" /> 
                      <ListAuthor link="/" author="Dynoro, Outwork, Mr. Gee" /> 
                      <ListAuthor link="/" author="Ali Bakgor" /> 
                      <ListAuthor link="/" author="Стоункат, Psychopath" /> 
                      <ListAuthor link="/" author="Jaded, Will Clarke, AR/CO" /> 
                      <ListAuthor link="/" author="Blue Foundation, Zeds Dead" /> 
                      <ListAuthor link="/" author="HYBIT, Mr. Black, Offer Nissim, Hi Profile" /> 
                      <ListAuthor link="/" author="Captivating" /> 
                      <ListAuthor link="/" author="Calvin Harris, Disciples" /> 
                      <ListAuthor link="/" author="Soundz Made in Romania" /> 
                    </ul>
                  </div>
              </div>
      )}
              <div className="filter__button button-year _btn-text">
                году выпуска
              </div>
              <div className="filter__button button-genre _btn-text">жанру</div>
          </div>
    );
}

export default FilterComponents;