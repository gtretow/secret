import React from "react";
import * as S from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
export default function PostedCard({
  openModal,
  changeTypeOfModal,
  post,
  onData,
}) {
  function handleOnClick(type) {
    let payload = {
      id: post.id,
      content: post.content,
      title: post.title,
    };
    onData(payload);
    changeTypeOfModal(type);
    openModal(true);
  }

  return (
    <S.PostWrapper>
      <S.HeaderWrapper>
        <S.WhiteText>{post.title}</S.WhiteText>
        <S.IconWrapper>
          <FontAwesomeIcon
            icon={faTrash}
            onClick={() => handleOnClick("delete")}
            cursor="pointer"
          />
          <FontAwesomeIcon
            icon={faPenToSquare}
            onClick={() => handleOnClick("edit")}
            cursor="pointer"
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
