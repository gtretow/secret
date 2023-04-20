import styled from "styled-components";
import { COLORS } from "../../styles/Constants";

export const MainScreen = styled.main`
  width: 50vw;
  height: 100vh;
  position: fixed;
  top: 50%;
  left: 50%;
  background: ${COLORS.white};
  transform: translate(-50%, -50%);
  box-shadow: 1px 1px ${COLORS.borderbox};
  display: flex;
  flex-direction: column;

  @media (max-width: 767px) {
    max-width: 100%;
    width: 100%;
  }
`;

export const Header = styled.header`
  background: ${COLORS.primary};
  height: 4em;
  margin-bottom: 3%;
  display: flex;
  align-items: center;
  padding-left: 1.5em;
  justify-content: space-between;
`;

export const WhiteText = styled.h2`
  color: ${COLORS.white};
  font-size: 18px;
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;

export const ScrolContainer = styled.section`
  height: 100vh;
  overflow-y: scroll;
  scrollbar-width: thin;
  scrollbar-color: ${COLORS.primary} ${COLORS.white};
`;
