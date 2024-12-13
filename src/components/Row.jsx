import styled, { css } from "styled-components";

const Row = styled.div.withConfig({
  shouldForwardProp: (prop) => !["direction", "justify"].includes(prop),
})`
  display: flex;
  gap: 2rem;

  ${(props) =>
    props.direction === "column" &&
    css`
      flex-direction: column;
    `}

  ${(props) =>
    props.justify === "space-between" &&
    css`
      justify-content: space-between;
    `}
`;

export default Row;
