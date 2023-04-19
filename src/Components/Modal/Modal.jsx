import React, { useRef } from "react";
import * as S from "./styled";
import Button from "../Button/Button";
import { deletePost } from "../../Actions/axios";
import { useState } from "react";
import { editPost } from "../../Actions/axios";

const Modal = ({ isOpen, onClose, type, data, username, refreshContent }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const newTitleRef = useRef(null);
  const newContentRef = useRef(null);

  if (!isOpen) return null;

  async function handleEditPost() {
    let payload;
    payload = {
      username: username,
      title: title,
      content: content,
    };
    await editPost(data.id, payload);
    refreshContent();
    onClose();
  }

  function handleNewTitle() {
    const value = newTitleRef.current.value;
    setTitle(value);
    return;
  }
  function handleNewContent() {
    const value = newContentRef.current.value;
    setContent(value);
    return;
  }

  async function handleDeletePost() {
    deletePost(data.id);
    refreshContent();
    onClose();
    return;
  }

  return (
    <S.ModalWrapper onClick={onClose}>
      <S.ModalContent onClick={(e) => e.stopPropagation()}>
        {type == "edit" && (
          <>
            <S.ModalHeader>Edit item</S.ModalHeader>
            <S.InputContainer>
              <p>Title</p>
              <S.TitleInput
                ref={newTitleRef}
                type="text"
                onChange={handleNewTitle}
              />
            </S.InputContainer>
            <S.InputContainer>
              <p>Content</p>
              <S.ContentInput
                ref={newContentRef}
                type="text"
                onChange={handleNewContent}
              />
            </S.InputContainer>
            <S.ButtonWrapper>
              <Button variant="outline" color="cancel" onClick={onClose}>
                Cancel
              </Button>
              <Button color="confirm" onClick={handleEditPost}>
                Save
              </Button>
            </S.ButtonWrapper>
          </>
        )}

        {type == "delete" && (
          <>
            <S.ModalHeader>
              Are you sure you want to delete this item?
            </S.ModalHeader>
            <S.ButtonWrapper>
              <Button onClick={onClose}>Cancel</Button>
              <Button color="cancel" onClick={handleDeletePost}>
                Delete
              </Button>
            </S.ButtonWrapper>
          </>
        )}
      </S.ModalContent>
    </S.ModalWrapper>
  );
};

export default Modal;
