import styled from "styled-components";

const StyledLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

function Logo() {
  return (
    <StyledLogo>
      <Image src="/logo-large.png" alt="Team sphere logo." />
    </StyledLogo>
  );
}

export default Logo;
