import React, { useEffect, useRef, useState } from "react";

import * as S from "./styled";
import Button from "../../Components/Button/Button";
import { useSelector } from "react-redux";
import { createPost, getUserPosts } from "../../Actions/axios";

function CreateCard() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { username } = useSelector((state) => state.user);
  const [isInputChanged, setIsInputChanged] = useState(false);

  useEffect(() => {
    setIsInputChanged(title && content !== "");
  }, [content, title]);

  const titleRef = useRef(null);
  const contentRef = useRef(null);

  async function handleTitle() {
    const value = titleRef.current.value;
    await setTitle(value);
  }
  async function handleContent() {
    const value = contentRef.current.value;
    await setContent(value);
  }

  async function generateNewCard() {
    let payload;

    payload = {
      username: username,
      title: title,
      content: content,
    };

    createPost(payload);

    clearInput();
    getUserPosts(username);

    return;
  }

  async function clearInput() {
    await setTitle("");
    await setContent("");
  }

  return (
    <S.CardWrapper>
      <S.BlackText>What's on your mind?</S.BlackText>
      <S.InputContainer>
        <p>Title</p>
        <S.TitleInput
          name="input"
          placeholder="Hello World"
          type="text"
          ref={titleRef}
          onChange={handleTitle}
        />
      </S.InputContainer>
      <S.InputContainer>
        <p>Content</p>
        <S.ContentInput
          name="content"
          type="text"
          placeholder="Content here"
          ref={contentRef}
          onChange={handleContent}
        />
      </S.InputContainer>
      <S.ButtonContainer>
        <Button onClick={generateNewCard} disabled={!isInputChanged}>
          Create
        </Button>
      </S.ButtonContainer>
    </S.CardWrapper>
  );
}

export default CreateCard;
