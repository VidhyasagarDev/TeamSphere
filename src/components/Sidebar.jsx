import styled from "styled-components";
import { NavLink } from "react-router-dom";
import {
  HiOutlineArrowDownOnSquareStack,
  HiOutlineBellAlert,
  HiOutlineClipboardDocumentCheck,
  HiOutlineCog6Tooth,
  HiOutlineDocumentText,
  HiOutlineUserGroup,
} from "react-icons/hi2";
import Logo from "./Logo";

const StyleSidebar = styled.aside`
  width: 24rem;
  padding: 2rem;
  background-color: var(--color-grey-0);
  border-right: 1px solid var(--color-grey-200);

  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Nav = styled.nav``;

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    font-weight: 500;
    padding: 0.8rem 1.4rem;
    border-radius: var(--border-radius-tiny);
    display: flex;
    align-items: center;
    gap: 1rem;
    transition: all 0.3s;
  }

  &:hover,
  &:active,
  &.active {
    background-color: var(--color-brand-100);
    color: var(--color-brand-800);
  }

  & svg {
    width: 2rem;
    height: 2rem;
  }
`;

const LogoContainer = styled.div`
  border: 2px solid var(--color-brand-700);
  border-radius: var(--border-radius-tiny);
`;

function Sidebar() {
  return (
    <StyleSidebar>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <Nav>
        <NavList>
          <li>
            <StyledNavLink to="/">
              <HiOutlineClipboardDocumentCheck />
              <span>Tasks</span>
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/projects">
              <HiOutlineClipboardDocumentCheck />
              <span>Projects</span>
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/">
              <HiOutlineUserGroup />
              <span>Team</span>
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/">
              <HiOutlineArrowDownOnSquareStack />
              <span>Attendance</span>
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/">
              <HiOutlineClipboardDocumentCheck />
              <span>Leaves</span>
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/">
              <HiOutlineDocumentText />
              <span>Documents</span>
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/">
              <HiOutlineBellAlert />
              <span>Notifications</span>
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/">
              <HiOutlineCog6Tooth />
              <span>Settings</span>
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/">
              <HiOutlineUserGroup />
              <span>Admin Panel</span>
            </StyledNavLink>
          </li>
        </NavList>
      </Nav>
    </StyleSidebar>
  );
}

export default Sidebar;
