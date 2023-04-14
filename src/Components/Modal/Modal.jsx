import React from "react";
import * as S from "./styled";
import Button from "../Button/Button";

const Modal = ({ isOpen, onClose, onClick }) => {
  if (!isOpen) return null;

  return (
    <S.ModalWrapper onClick={onClose}>
      <S.ModalContent onClick={(e) => e.stopPropagation()}>
        {/*   <S.ModalHeader>
          Are you sure you want to delete this item?
        </S.ModalHeader>
        <S.ButtonWrapper>
          <Button>Cancel</Button>
          <Button color="cancel">Delete</Button>
        </S.ButtonWrapper> */}

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
          <Button variant="outline" color="cancel">
            Cancel
          </Button>
          <Button color="confirm">Save</Button>
        </S.ButtonWrapper>
      </S.ModalContent>
    </S.ModalWrapper>
  );
};

export default Modal;
