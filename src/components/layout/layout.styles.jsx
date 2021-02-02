import styled from "styled-components";

export const StyledLayout = styled.section`
  background: ${({ bgColor }) => bgColor};
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
