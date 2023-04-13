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
  box-shadow: 1px 1px ${COLORS.transparentGray15};
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  background: ${COLORS.primary};
  height: 4em;
  margin-bottom: 3%;
  display: flex;
  align-items: center;
  padding-left: 1.5em;
`;

export const WhiteText = styled.h2`
  color: ${COLORS.white};
  font-size: 18px;
`;
