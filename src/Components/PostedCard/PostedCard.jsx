import React, { useState, useEffect } from "react";
import * as S from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
export default function PostedCard({
  openModal,
  changeTypeOfModal,
  post,
  onData,
  loggedUser,
}) {
  const [minutesAgo, setMinutesAgo] = useState(0);
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

  useEffect(() => {
    const now = new Date();
    const createdDate = new Date(post.created_datetime);
    const diff = now - createdDate;
    const minutes = Math.floor(diff / 1000 / 60);
    setMinutesAgo(minutes);
  }, [post.created_datetime]);

  return (
    <S.PostWrapper>
      <S.HeaderWrapper>
        <S.TextBox>
          <S.WhiteText>{post.title}</S.WhiteText>
        </S.TextBox>
        {post.username == loggedUser && (
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
        )}
      </S.HeaderWrapper>
      <S.ContentWrapper>
        <S.NameWrapper>
          <S.NameBox>
            <p>@{post.username}</p>
          </S.NameBox>
          <p>{minutesAgo} minutes ago</p>
        </S.NameWrapper>
        <S.TextWrapper>
          <p>{post.content}</p>
        </S.TextWrapper>
      </S.ContentWrapper>
    </S.PostWrapper>
  );
}
