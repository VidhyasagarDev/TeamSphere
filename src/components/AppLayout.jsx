import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import Header from "./Header";

const StyledAppLayout = styled.div`
  display: flex;
  height: 100vh;
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  background-color: var(--color-grey-100);
  flex: 1;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Sidebar />
      <Content>
        <Header />
        <Main>
          <Outlet />
        </Main>
      </Content>
    </StyledAppLayout>
  );
}

export default AppLayout;
