import styled from "styled-components";
import Row from "./Row";

const StyledFormRowVertical = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const Label = styled.label`
  font-size: 1.4rem;
  font-weight: 500;
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;

function FormRowVertical({ label, subLabel, children, error }) {
  return (
    <StyledFormRowVertical>
      {label && (
        <Row>
          <Label htmlFor={children.props.id}>{label}</Label>
          {subLabel}
        </Row>
      )}
      {children}
      {error && <Error>{error}</Error>}
    </StyledFormRowVertical>
  );
}

export default FormRowVertical;
