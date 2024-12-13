import styled, { css } from "styled-components";

const Heading = styled.h1`
  ${(props) =>
    props.align === "center" &&
    css`
      text-align: center;
    `}

  ${(props) =>
    props.align === "right" &&
    css`
      text-align: end;
    `}

  ${(props) =>
    props.as === "h1" &&
    css`
      font-weight: 600;
      font-size: 3rem;
    `}

  ${(props) =>
    props.as === "h2" &&
    css`
      font-weight: 600;
      font-size: 2rem;
    `}

    ${(props) =>
    props.as === "h3" &&
    css`
      font-weight: 500;
      font-size: 2rem;
    `}

    ${(props) =>
    props.as === "h4" &&
    css`
      font-weight: 600;
      font-size: 2rem;
    `}

    ${(props) =>
    props.as === "h5" &&
    css`
      font-weight: 600;
      font-size: 2rem;
    `}

    ${(props) =>
    props.as === "h6" &&
    css`
      font-weight: 600;
      font-size: 2rem;
    `}
`;

export default Heading;
