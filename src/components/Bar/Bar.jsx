import { useState,  useRef, useEffect } from 'react';
import * as S from './Bar.style'
import { useDispatch, useSelector } from 'react-redux';
import {
  playNextTrack,
  playPreviousTrack,
  selectorCurrentTrack,
  selectorCurrentTrackIndex,
  selectorIsShaffling,
  selectorTrackList, setPulsatingPoint, toggleIsShaffling
} from '../../store/redux/playerSlice';

function Bar({ formatTime }) {
  const dispatch = useDispatch();
  const audioRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(true);
  const [volume, setVolume] = useState(100);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isLoop, setIsLoop] = useState(false);

  const trackList = useSelector(selectorTrackList);
  const currentTrack = useSelector(selectorCurrentTrack);
  const currentTrackIndex = useSelector(selectorCurrentTrackIndex);
  const isSuffle = useSelector(selectorIsShaffling);

  const handleNextClick = () => {
    dispatch(playNextTrack());
  };

  const handleBackClick = () => {
    dispatch(playPreviousTrack());
  };

  // console.log(currentTrack);

  const handleStart = () => {
    audioRef.current?.play();
    setIsPlaying(true);
    dispatch(setPulsatingPoint(true))
  };

  const handleStop = () => {
    audioRef.current?.pause();
    setIsPlaying(false);
    dispatch(setPulsatingPoint(false))
  };

  const handleVolumeChange = (event) => {
    setVolume(event.target.value);
    audioRef.current.volume = event.target.value / 100;
  };

  const togglePlay = isPlaying ? handleStop : handleStart;

  useEffect(() => {
    handleStart();
    if (!currentTime) {
      audioRef.current?.addEventListener('loadedmetadata', () => {
        setDuration(audioRef.current?.duration);
      });
      audioRef.current?.addEventListener('timeupdate', () => {
        setCurrentTime(audioRef.current?.currentTime);
      });
      return () => {
        audioRef.current?.removeEventListener('loadedmetadata', () => {
          setDuration(audioRef.current?.duration);
        });
        audioRef.current?.removeEventListener('timeupdate', () => {
          setCurrentTime(audioRef.current?.currentTime);
        })
      }
    };

  }, [currentTrack.track_file]);

  return (
    <>
    <S.Audio controls ref={audioRef} loop={isLoop} src={currentTrack.track_file} />
    <S.Bar>
      <S.BarContent>
        <S.TimeTrack>{formatTime(currentTime)} / {formatTime(duration)}</S.TimeTrack>
      <S.ProgressInput
              type="range"
              min={0}
              max={duration}
              value={currentTime}
              step={0.01}
              onChange={(event) => {
              audioRef.current.currentTime=event.target.value
              setCurrentTime(event.target.value)
            }}
              $color="#b672ff"
        />
        <S.Column>
          <S.BarPlayerBlock>
            <S.BarPlayer>
              <S.PlayerControls>
                <S.PlayerBtnPrev type='button' onClick={handleBackClick}>
                  <S.PlayerBtnPrevSvg alt="prev">
                    <use xlinkHref="img/icon/sprite.svg#icon-prev" />
                  </S.PlayerBtnPrevSvg>
                </S.PlayerBtnPrev>
                <S.PlayerBtnPlay  onClick={togglePlay}>
                  <S.PlayerBtnPlaySvg alt="play">
                  {isPlaying ? 
                  (<use xlinkHref="img/icon/sprite.svg#icon-pause" />) : (<use xlinkHref="img/icon/sprite.svg#icon-play" />)}
                  </S.PlayerBtnPlaySvg>
                </S.PlayerBtnPlay>
                <S.PlayerBtnNext  type='button' onClick={handleNextClick} disabled={currentTrackIndex === trackList.length - 1}>
                  <S.PlayerBtnNextSvg alt="next">
                    <use xlinkHref="img/icon/sprite.svg#icon-next" />
                  </S.PlayerBtnNextSvg>
                </S.PlayerBtnNext>
                <S.PlayerBtnRepeat onClick={() => setIsLoop(!isLoop)}>
                  <S.PlayerBtnRepeatSvg alt="repeat">
                    {isLoop ? 
                    (<use xlinkHref="img/icon/sprite.svg#icon-repeat.act" />) : (<use xlinkHref="img/icon/sprite.svg#icon-repeat" />)}
                    </S.PlayerBtnRepeatSvg>
                </S.PlayerBtnRepeat>
                <S.PlayerBtnShuffle>
                  <S.PlayerBtnShuffleSvg alt="shuffle" onClick={() => {
                    dispatch(toggleIsShaffling());
                  }}>
                    {isSuffle ? (<use xlinkHref="img/icon/sprite.svg#icon-shuffle.act" />) : (<use xlinkHref="img/icon/sprite.svg#icon-shuffle" />)}
                   </S.PlayerBtnShuffleSvg>
                </S.PlayerBtnShuffle>
              </S.PlayerControls>
              <S.PlayerTrackPlay>
                <S.TrackPlayContain>
                  <S.TrackPlayImage>
                    <S.TrackPlaySvg alt="music">
                      <use xlinkHref="img/icon/sprite.svg#icon-note" />
                    </S.TrackPlaySvg>
                  </S.TrackPlayImage>
                  <S.TrackPlayAlbum >
                    <S.TrackPlayAlbumLink href="http://">
                      {currentTrack.name}
                    </S.TrackPlayAlbumLink>
                    <S.TrackPlayAuthor>
                      <S.TrackPlayAuthorLink href="http://">
                        {currentTrack.author}
                      </S.TrackPlayAuthorLink>
                    </S.TrackPlayAuthor>
                  </S.TrackPlayAlbum>
                </S.TrackPlayContain>
              </S.PlayerTrackPlay>
              <S.TrackPlayLikeDis>
                <S.TrackPlayLike>
                  <S.TrackPlayLikeSvg alt="like">
                    <use xlinkHref="img/icon/sprite.svg#icon-like" />
                  </S.TrackPlayLikeSvg>
                </S.TrackPlayLike>
                <S.TrackPlayDislike>
                  <S.TrackPlayDislikeSvg alt="dislike">
                    <use xlinkHref="img/icon/sprite.svg#icon-dislike" />
                  </S.TrackPlayDislikeSvg>
                </S.TrackPlayDislike>
              </S.TrackPlayLikeDis>
            </S.BarPlayer>
          </S.BarPlayerBlock>
          <S.BarVolumeBlock>
            <S.VolumeContent>
              <S.VolumeImage>
                <S.VolumeSvg alt="volume">
                  <use xlinkHref="img/icon/sprite.svg#icon-volume" />
                </S.VolumeSvg>
              </S.VolumeImage>
              <S.VolumeProgress>
                <S.VolumeProgressLine type="range" name="range" 
                        min="0"
                        max="100"
                        value={volume}
                        onChange={handleVolumeChange}
                /> 
              </S.VolumeProgress>
            </S.VolumeContent>
          </S.BarVolumeBlock>
        </S.Column>
      </S.BarContent>
    </S.Bar>
    </>
  )
}

export default Bar;
