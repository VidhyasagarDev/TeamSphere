import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Row from "./Row";
import Logo from "./Logo";

const StyledAuthLayout = styled.div`
  min-height: 100vh;
  background-color: var(--color-grey-100);

  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledAuthentication = styled.div`
  width: 44rem;

  & img {
    padding: 0 10rem;
  }
`;

const Card = styled.div`
  padding: 4rem;
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-200);
  border-radius: var(--border-radius-sm);
`;

function AuthLayout() {
  return (
    <StyledAuthLayout>
      <StyledAuthentication>
        <Row direction="column">
          <Logo />
          <Card>
            <Outlet />
          </Card>
        </Row>
      </StyledAuthentication>
    </StyledAuthLayout>
  );
}

export default AuthLayout;
