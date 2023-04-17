import React, { useCallback, useEffect, useRef, useState } from "react";
import uniqid from 'uniqid';

import * as S from "./styled";
import Button from "../../Components/Button/Button";
import { useSelector } from "react-redux";
import { getUserPosts } from "../../Actions/axios";

const CreateCard = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const {username} = useSelector(state => state.user);
  const [isInputChanged, setIsInputChanged] = useState(false);

  useEffect(() => {

    setIsInputChanged(title && content !== '');
  }, [content, title]);

  const titleRef = useRef(null);
  const contentRef = useRef(null);

  async function handleTitle(){
    const value = titleRef.current.value;
    await setTitle(value);
  }
  async function handleContent(){
    const value = contentRef.current.value;
    await setContent(value);
  }

  async function generateNewCard () {
    let payload;

    payload = {
      "id": Number(uniqid()),
      "username": username,
      "created_datetime": new Date().toLocaleString(),
      "title": title,
      "content": content
    }

    await createPost(payload);

    setTitle('');
    setContent('');

    await getUserPosts();
    
    return;
  }

  return (
    <S.CardWrapper>
      <S.BlackText>What's on your mind?</S.BlackText>
      <S.InputContainer>
        <p>Title</p>
        <S.TitleInput name="input" placeholder="Hello World" type="text" ref={titleRef} onChange={handleTitle}/>
      </S.InputContainer>
      <S.InputContainer>
        <p>Content</p>
        <S.ContentInput name="content" type="text" placeholder="Content here" ref={contentRef} onChange={handleContent}/>
      </S.InputContainer>
      <S.ButtonContainer>
        <Button onClick={generateNewCard} disabled={!isInputChanged}>Create</Button>
      </S.ButtonContainer>
    </S.CardWrapper>
  );
}

export default CreateCard