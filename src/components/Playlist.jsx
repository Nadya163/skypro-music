import { useState, useEffect } from "react";

function PlaylistItem({ track, together, author, album, time }) {
    return (
        <div className="playlist__track track">
          <div className="track__title">
            <div className="track__title-image">
              <svg className="track__title-svg" alt="music">
                <use xlinkHref="img/icon/sprite.svg#icon-note" />
              </svg>
            </div>
            <div className="track__title-text">
              <a className="track__title-link" href="http://">
                {track} <span className="track__title-span"> {together} </span>
              </a>
            </div>
          </div>
          <div className="track__author">
            <a className="track__author-link" href="http://">
              {author}
            </a>
          </div>
          <div className="track__album">
            <a className="track__album-link" href="http://">
              {album}
            </a>
          </div>
          <div className="track__time">
            <svg className="track__time-svg" alt="time">
              <use xlinkHref="img/icon/sprite.svg#icon-like" />
            </svg>
            <span className="track__time-text">{time}</span>
          </div>
        </div>
    )
}

function Loading() {
  return (
    <div className="playlist__track track">
      <div className="track__title">
      <div className="track__title-image">
            <svg className="track__title-svg" alt="music">
              <use xlinkHref="img/icon/sprite.svg" />
            </svg>
          </div>
        <div className="track__title-text">
          <div className="track__title-link">
            <img src="img/icon/track.svg" alt="" /></div>
        </div>
      </div>
      <div className="track__author">
        <div className="track__author-link">
          <img src="img/icon/album.svg" alt="" /></div>
      </div>
      <div className="track__album">
        <div className="track__album-link">
          <img src="img/icon/author.svg" alt="" /></div>
      </div>
      <div className="track__time">
        <svg className="track__time-svg" alt="time">
          <use xlinkHref="img/icon/sprite.svg#icon-like" />
        </svg>
        <span className="track__time-text">0:00</span>
      </div>
    </div>
)
}

function Playlist() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="content__playlist playlist">
      <div className="playlist__item">
        {isLoading ? (
          <>
              <Loading />
              <Loading />
              <Loading />
              <Loading />
              <Loading />
              <Loading />
              <Loading />
              <Loading />
              <Loading />
              <Loading />
          </>
        ) : (
          <>
                <PlaylistItem track="Guilt" author="Nero" album="Welcome Reality" time="4:44" />
                <PlaylistItem track="Elektro" author="Dynoro, Outwork, Mr. Gee" album="Elektro" time="2:22" />
                <PlaylistItem track="I’m Fire" author="Ali Bakgor" album="I’m Fire" time="2:22" />
                <PlaylistItem track="Non Stop" author="Стоункат, Psychopath" album="Non Stop" time="4:12" />
                <PlaylistItem track="Run Run" together="(feat. AR/CO)" author="Jaded, Will Clarke, AR/CO" album="Run Run" time="2:54" />
                <PlaylistItem track="Eyes on Fire" together="(Zeds Dead Remix)" author="Blue Foundation, Zeds Dead" album="Eyes on Fire" time="5:20" />
                <PlaylistItem track="Mucho Bien" together="(Hi Profile Remix)" author="HYBIT, Mr. Black, Offer Nissim, Hi Profile" album="Mucho Bien" time="3:41" />
                <PlaylistItem track="Knives n Cherries" author="minthaze" album="Captivating" time="1:48" />
                <PlaylistItem track="How Deep Is Your Love" author="Calvin Harris, Disciples" album="How Deep Is Your Love" time="3:32" />
                <PlaylistItem track="Morena" author="Tom Boxer" album="Soundz Made in Romania" time="3:36" />
          </>
        )}
      </div>
    </div>
  );
}

export default Playlist;