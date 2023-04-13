import styled from "styled-components";
import { COLORS } from "../../styles/Constants";

export const SignUpWrapper = styled.div`
  width: 550px;
  height: 220px;
  position: fixed;
  top: 50%;
  left: 50%;
  background: ${COLORS.white};
  transform: translate(-50%, -50%);
  border: 1px solid ${COLORS.offwhite};
  border-radius: 7px;
  box-shadow: 1px 1px ${COLORS.transparentGray15};
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0 2% 0 2%;
`;

export const PrimaryText = styled.h1`
  margin-bottom: 0.7rem;
`;

export const InputBox = styled.div`
  margin-bottom: 1.2rem;
`;

export const Input = styled.input`
  border-radius: 7px;
  color: transparent;
  width: 100%;
  border: 1px solid ${COLORS.black};
`;

export const Text = styled.p`
  font-size: 18px;
  margin-bottom: 0.3rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;
`;