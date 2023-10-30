import { styled } from 'styled-components';

export const StyledConteiner = styled.div`
height: 100px;
display: flex;
align-items: center;
justify-content: space-around;
`;

export default function MyPlaylist() {
    return (
      <StyledConteiner>
        <h1>Мой плелист</h1>
      </StyledConteiner>
    );
  }