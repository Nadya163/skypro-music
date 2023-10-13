import { useState } from "react";
import trackArray from "./TrackArray";


// function ListAuthor({ link, author }) {
//   return (
//     <li className="list__author">
//       <a href={link} className="list__author_link">
//         {author}
//       </a>
//     </li>
//   )
// }

function FilterComponents() {
  const [isMenuOpen, setIsMenuOpen] = useState(null);
  const toggleVisibleFilter = (filter) => {
    setIsMenuOpen(isMenuOpen===filter ? null : filter)
  } 
  // const handleOutsideClick = () => {
  //   setIsMenuOpen(false);
  // };

  // useEffect(() => {
  //   document.addEventListener('mousedown', handleOutsideClick);
  //   return () => {
  //     document.removeEventListener('mousedown', handleOutsideClick);
  //   };
  // }, []);

      return (
        <div className="centerblock__filter filter">
              <div className="filter__title">Искать по:</div>
              <div className="button__box">
              <button className=" filter__button button-author _btn-text" 
              onClick={() => toggleVisibleFilter("author")} type="button">
                исполнителю
              </button>
              {isMenuOpen === "author" && (   
                <>   
                <div className="filter__length">
                  {trackArray.length}
                  </div>                        
                <div className="menu__author">
                    <ul className="author__list">
                      {trackArray.map((item) => (
                        <li key={item.id} className="list__author">
                          <a href="/" className="list__author_link">{item.author}</a>
                        </li>
                      ))}
                    </ul>
              </div>
              </>
      )}
      </div>
      <div className="button__box">
              <button className="filter__button button-year _btn-text"
                            onClick={() => toggleVisibleFilter("year")}
                            type="button">
                году выпуска
              </button>
              {isMenuOpen === "year" && (    
                <>    
                <div className="filter__length">
                  {trackArray.length}
                  </div>                    
                <div className="menu__author">
                    <ul className="author__list">
                      {trackArray.map((item) => (
                        <li key={item.id} className="list__author">
                          <a href="/" className="list__author_link">{item.year}</a>
                        </li>
                      ))}
                    </ul>
              </div>
              </>   
      )}
      </div>
      <div className="button__box">
              <button className="filter__button button-genre _btn-text"
                            onClick={() => toggleVisibleFilter("genre")}
                            type="button">жанру</button>
              {isMenuOpen === "genre" && (       
                <>            
                <div className="filter__length">
                  {trackArray.length}
                  </div>           
                <div className="menu__author">
                    <ul className="author__list">
                      {trackArray.map((item) => (
                        <li key={item.id} className="list__author">
                          <a href="/" className="list__author_link">{item.genre}</a>
                        </li>
                      ))}
                    </ul>
              </div>
              </>   
      )}
      </div>
          </div>
    );
}

export default FilterComponents;