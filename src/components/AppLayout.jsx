import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Sidebar from "./Sidebar";

const StyledAppLayout = styled.div`
  display: flex;
  min-height: 100vh;
`;

const Main = styled.main`
  background-color: lightcoral;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Sidebar />
      <Main></Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
