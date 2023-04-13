import styled from "styled-components";
import { COLORS } from "../../styles/Constants";

export const MainScreen = styled.div`
  width: 50vw;
  height: 100vh;
  position: fixed;
  top: 50%;
  left: 50%;
  background: ${COLORS.white};
  transform: translate(-50%, -50%);
  border: 1px solid ${COLORS.offwhite};
  box-shadow: 1px 1px ${COLORS.transparentGray15};
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0 2% 0 2%;
`;
