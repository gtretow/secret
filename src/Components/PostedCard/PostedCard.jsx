import React from "react";
import * as S from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";

export default function PostedCard({ openModal, changeTypeOfModal, post }) {
  function handleOnClick(type) {
    openModal(true);
    changeTypeOfModal(type);
  }

  return (
    <S.PostWrapper>
      <S.HeaderWrapper>
        <S.WhiteText>My first post at CodeLeap Network</S.WhiteText>
        <S.IconWrapper>
          <FontAwesomeIcon
            icon={faTrash}
            onClick={() => handleOnClick("delete")}
          />
          <FontAwesomeIcon
            icon={faPenToSquare}
            onClick={() => handleOnClick("edit")}
          />
        </S.IconWrapper>
      </S.HeaderWrapper>
      <S.ContentWrapper>
        <S.NameWrapper>
          <p>{post.username}</p> <p>{post.created_datetime} minutes ago</p>
        </S.NameWrapper>
        <S.TextWrapper>
          <p>{post.content}</p>
        </S.TextWrapper>
      </S.ContentWrapper>
    </S.PostWrapper>
  );
}
