import { styled, css, keyframes } from 'styled-components'

export const fade = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

export const Blinking = css`
  animation: ${fade} 1s infinite alternate;
  transition: opacity 0.1s ease-out;
`;

export const PlaylistTrack = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
`;

export const TrackTitle = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: 447px;
`;

export const TrackTitleImage = styled.div`
    width: 51px;
    height: 51px;
    margin: 6px;
    background: #313131;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    margin-right: 17px;
`;

export const TrackTitleSvg = styled.svg`
    width: 18px;
    height: 17px;
    fill: transparent;
    stroke: #4e4e4e;
`;

export const TrackTitleSvgLoading = styled.svg`
    width: 18px;
    height: 17px;
    fill: transparent;
    stroke: #4e4e4e;
    ${Blinking};
`;

export const TrackTitleLink = styled.a`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #ffffff;
    &:hover {
        border-color: #d9b6ff;
        color: #d9b6ff;
        cursor: pointer;
      }
      
      &:active {
        border-color: #ad61ff;
        color: #ad61ff;
        cursor: pointer;
      }
`;

export const TrackTitleLinkLoading = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #ffffff;
    ${Blinking};
`;

export const TrackTitleSpan = styled.span`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #4e4e4e;
`;

export const TrackAuthor = styled.div`
    width: 321px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
`;

export const TrackAuthorLink = styled.a`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #ffffff;
    text-align: left;
`;

export const TrackAuthorLinkLoading = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #ffffff;
    text-align: left;
    ${Blinking};
`;

export const TrackAlbum = styled.div`
    width: 245px;
`;

export const TrackAlbumLink = styled.a`
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: #696969;
`;

export const TrackAlbumLinkLoading = styled.div`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #696969;
${Blinking};
`;

export const TrackTimeSvg = styled.svg`
    width: 14px;
    height: 12px;
    margin-right: 17px;
    fill: transparent;
    stroke: #696969;
    cursor: pointer;
`;

export const TrackTimeSvgLoading = styled.svg`
    width: 14px;
    height: 12px;
    margin-right: 17px;
    fill: transparent;
    stroke: #696969;
    ${Blinking};
`;

export const TrackTimeText = styled.span`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    text-align: right;
    color: #696969;
`;

export const TrackTimeTextLoading = styled.span`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    text-align: right;
    color: #696969;
    ${Blinking};
`;

export const ContentPlaylist = styled.div`
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
`;

export const PlaylistItem = styled.div`
  width: 100%;
  display: block;
  margin-bottom: 12px;
    height: 900px;
      overflow-y: auto;
      &::-webkit-scrollbar {
        width: 1px;
      }
      &::-webkit-scrollbar-track {
        background-color: rgba(75, 73, 73, 1); 
        border-radius: 10px;
      }
      &::-webkit-scrollbar-thumb {
        background-color: rgba(255, 255, 255, 1);
        border-radius: 10px;
    }
`;

export const animation = keyframes`{
    from {
      opacity: 1;
    }
  
    to {
      opacity: 0.2;
    }
  }`;
  
  const animationPointPulse = () => css`
    animation: pulse 0.6s ease-in-out infinite both;
  
    @keyframes pulse {
      0%,
      to {
        transform: scale(0.5);
      }
      50% {
        transform: scale(1);
      }
    }
  `;
    export const PointPlaying = styled.div`
    position: relative; 
    text-align: center;
    padding: 8px;
    width: 16px;
    height: 16px;
    background-color: #b672ff;
    border-radius: 50%;
    ${(props) => (props.$playing ? animationPointPulse : "")};
  `;