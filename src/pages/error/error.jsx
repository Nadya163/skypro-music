import { styled } from 'styled-components';

export const StyledError = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export default function Error() {
    return (
      <StyledError>
        <h1>Page is not found :C</h1>
      </StyledError>
    );
  }