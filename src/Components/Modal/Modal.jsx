import React from "react";
import * as S from "./styled";
import Button from "../Button/Button";
import { deletePost } from "../../Actions/axios";
import { useState } from "react";

const Modal = ({ isOpen, onClose, type, username }) => {

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  if (!isOpen) return null;

  async function handleEditPost(id){
    let payload;
    payload = {
      username: username,
      title: title,
      content: content
    }
    await handleEditPost(id,payload);
  }

  function handleNewTitle(){}
  function handleNewContent(){}

  async function handleDeletePost(id){
    await deletePost(id);
  }

  return (
    <S.ModalWrapper onClick={onClose}>
      <S.ModalContent onClick={(e) => e.stopPropagation()}>
      {type=="edit" && (
        <>
          <S.ModalHeader>Edit item</S.ModalHeader>
          <S.InputContainer>
            <p>Title</p>
            <S.TitleInput />
          </S.InputContainer>
          <S.InputContainer>
            <p>Content</p>
            <S.ContentInput />
          </S.InputContainer>
          <S.ButtonWrapper>
            <Button variant="outline" color="cancel" onClick={onClose()}>
              Cancel
            </Button>
            <Button color="confirm" onClick={handleEditPost}>Save</Button>
          </S.ButtonWrapper>
        </>
      )}
      
      {type=="delete" && (
        <>
          <S.ModalHeader>
            Are you sure you want to delete this item?
          </S.ModalHeader>
          <S.ButtonWrapper>
            <Button onClick={onClose}>Cancel</Button>
            <Button color="cancel" onClick={handleDeletePost}>Delete</Button>
          </S.ButtonWrapper>
        </>
      )}
      </S.ModalContent>
    </S.ModalWrapper>
  );
};

export default Modal;
