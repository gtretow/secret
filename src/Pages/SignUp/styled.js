import styled from "styled-components";
import { COLORS } from "../../styles/Constants";

export const SignUpWrapper = styled.div`
  width: 550px;
  min-height: 220px;
  position: fixed;
  top: 50%;
  left: 50%;
  background: ${COLORS.white};
  transform: translate(-50%, -50%);
  border: 1px solid ${COLORS.transparentGray15};
  border-radius: 7px;
  box-shadow: 1px 1px ${COLORS.borderbox};
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0 2% 0 2%;
`;

export const PrimaryText = styled.h1`
  margin-bottom: 0.7rem;
  font-size: 22px;
`;

export const InputBox = styled.div`
  margin-bottom: 1.2rem;
`;

export const Input = styled.input`
  border-radius: 7px;
  width: 100%;
  border: 1px solid ${COLORS.gray};
`;

export const Text = styled.p`
  font-size: 16px;
  margin-bottom: 0.3rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;
