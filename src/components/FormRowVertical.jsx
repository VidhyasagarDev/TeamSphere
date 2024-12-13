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

function FormRowVertical({ label, subLabel, children, error }) {
  return (
    <StyledFormRowVertical>
      {label && (
        <Row justify="space-between">
          <Label htmlFor={children.props.id}>{label}</Label>
          {subLabel}
        </Row>
      )}
      {children}
      {error && { error }}
    </StyledFormRowVertical>
  );
}

export default FormRowVertical;
