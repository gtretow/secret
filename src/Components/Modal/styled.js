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
  width: 45%;
  display: flex;
  flex-direction: column;
`;

export const ModalHeader = styled.h2`
  font-size: 22px;
  margin-bottom: 30px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const TitleInput = styled.input`
  width: 100%;
  border-radius: 8px;
  border: 1px solid ${COLORS.transparentGray75};
`;

export const ContentInput = styled.textarea`
  width: 100%;
  height: 150px;
  border-radius: 8px;
  border: 1px solid ${COLORS.transparentGray75};
`;

export const InputContainer = styled.div`
  max-height: 100px;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;
