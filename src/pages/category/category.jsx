import { useParams } from "react-router-dom";
import { styled } from 'styled-components';
import sidebarArray from "../../components/SidebarArray";

export const StyledSidebar = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export default function Category() {
    const params = useParams();
    const sidebar = sidebarArray.find((item) => item.id === Number(params.id));
    return (
      <StyledSidebar>
        <h1>Подборки</h1>
        <h1>Подборкa {sidebar.name}</h1>
      </StyledSidebar>
    );
  }