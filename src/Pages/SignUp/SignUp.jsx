import React from "react";
import * as S from "./styled";
import Button from "../../Components/Button/Button";

export default function SignUp() {
  return (
    <S.SignUpWrapper>
      <S.PrimaryText>Welcome to CodeLeap network!</S.PrimaryText>
      <S.InputBox>
        <S.Text>Please enter your username</S.Text>
        <S.Input></S.Input>
      </S.InputBox>
      <S.ButtonContainer>
        <Button>ENTER</Button>
      </S.ButtonContainer>
    </S.SignUpWrapper>
  );
}
