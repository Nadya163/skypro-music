import { styled, css } from 'styled-components'

export const BtnText = css`
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

export const CenterblockFilter = styled.div`
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
    margin-bottom: 51px;
`;

export const FilterTitle = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    margin-right: 15px;
`;

export const ButtonBox = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    row-gap: 10px;
`;

export const FilterButton = styled.button`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    border: 1px solid #ffffff;
    border-radius: 60px;
    padding: 6px 20px;
    background-color: #181818;
    color: #ffffff;
    margin-right: 10px;
    &:not(:last-child) {
      margin-right: 10px;
    }
    ${BtnText};
`;

export const FilterLength = styled.div`
    position: absolute;
    width: 26px;
    height: 26px;
    color: #fff;
    background-color: #ab61ff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    top: -13px;
    right: 8px;
`;

export const MenuAuthor = styled.div`
    height: 305px;
    width: 248px;
    display: inline-flex;
    padding: 34px;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    border-radius: 12px;
    background: rgba(49, 49, 49, 1);
    position: absolute;
    top: 50px;
`;

export const AuthorList = styled.ul`
    overflow-y: scroll;
    width: 100%;
    &::-webkit-scrollbar {
      width: 4px;
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

export const ListAuthor = styled.li`
    margin-bottom: 28px;
`;

export const ListAuthorLink = styled.a`
    color: #FFF;
    font-variant-numeric: lining-nums proportional-nums;
    font-family: StratosSkyeng;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0.016px;
    color: ${props => props.$isActive ? 'rgba(182, 114, 255, 1)' : '#FFF'};
    &:hover {
      color: rgba(182, 114, 255, 1);
      text-decoration: underline;
    }
`;

export const MenuFilterSort = styled.div`
    height: 200px;
    width: 248px;
    display: inline-flex;
    padding: 34px;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    border-radius: 12px;
    background: rgba(49, 49, 49, 1);
    position: absolute;
    top: 50px;
`;
