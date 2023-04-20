import React, { useRef, useEffect } from "react";
import * as S from "./styled";
import Button from "../Button/Button";
import { useState } from "react";
import { editPost, deletePost } from "../../Actions/axios";

const Modal = ({ isOpen, onClose, type, data, refreshContent }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isInputChanged, setIsInputChanged] = useState(false);

  useEffect(() => {
    setIsInputChanged(title && content !== "");
  }, [content, title]);

  const newTitleRef = useRef(null);
  const newContentRef = useRef(null);

  if (!isOpen) return null;

  async function handleEditPost() {
    let payload;
    payload = {
      title: String(title),
      content: String(content),
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
                placeholder="Hello World"
                defaultValue={data.title}
              />
            </S.InputContainer>
            <S.InputContainer>
              <p>Content</p>
              <S.ContentInput
                ref={newContentRef}
                type="text"
                onChange={handleNewContent}
                placeholder="Content"
                defaultValue={data.content}
              />
            </S.InputContainer>
            <S.ButtonWrapper>
              <Button variant="outline" color="cancel" onClick={onClose}>
                Cancel
              </Button>
              <Button
                color="confirm"
                onClick={handleEditPost}
                disabled={!isInputChanged}
              >
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
              <Button onClick={onClose} variant="outline">
                Cancel
              </Button>
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
