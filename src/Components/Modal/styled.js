import styled from "styled-components";
import { COLORS } from "../../styles/Constants";

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${COLORS.transparentGray75};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background-color: ${COLORS.white};
  padding: 20px;
  border-radius: 10px;
`;
