import React from "react";
import * as S from "./styled";
import PostedCard from "../../Components/PostedCard/PostedCard";
import CreateCard from "../../Components/CreateCard/CreateCard";

export default function MainScreen() {
  return (
    <S.MainScreen>
      <S.Header>
        <S.WhiteText>CodeLeap Network</S.WhiteText>
      </S.Header>
      <CreateCard />
      <PostedCard />
    </S.MainScreen>
  );
}
