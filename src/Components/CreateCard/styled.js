import styled from "styled-components";
import { COLORS } from "../../styles/Constants";

export const BlackText = styled.h2`
  color: ${COLORS.black};
  font-size: 22px;
  margin: 3% 0 3% 0;
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${COLORS.gray};
  border-radius: 8px;
  margin: 0 3% 3% 3%;
  padding: 0 3% 0 3%;

  @media (max-width: 767px) {
    align-items: center;
    text-align: center;
  }
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

export const ButtonContainer = styled.div`
  height: 40px;
  display: flex;
  justify-content: end;
  margin-bottom: 20px;
`;

export const InputContainer = styled.div`
  max-height: 100px;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  font-size: 16px;

  @media (max-width: 767px) {
    width: 100%;
  }
`;
