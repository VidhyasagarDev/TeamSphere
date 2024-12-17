import styled, { css } from "styled-components";

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;

  ${(props) =>
    props.$direction === "column" &&
    css`
      flex-direction: column;
    `}
`;

export default Row;
