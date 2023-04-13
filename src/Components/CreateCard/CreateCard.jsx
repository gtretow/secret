import React from "react";
import * as S from "./styled";
import Button from "../../Components/Button/Button";

export default function CreateCard() {
  return (
    <S.CardWrapper>
      <S.BlackText>What's on your mind?</S.BlackText>
      <S.InputContainer>
        <p>Title</p>
        <S.TitleInput></S.TitleInput>
      </S.InputContainer>
      <S.InputContainer>
        <p>Content</p>
        <S.ContentInput></S.ContentInput>
      </S.InputContainer>
      <S.ButtonContainer>
        <Button>create</Button>
      </S.ButtonContainer>
    </S.CardWrapper>
  );
}
