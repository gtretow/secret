import React from "react";
import * as S from "./styled";

const Modal = ({ isOpen, onClose, children="text" }) => {
  if (!isOpen) return null;

  return (
    <S.ModalWrapper onClick={onClose}>
      <S.ModalContent onClick={(e) => e.stopPropagation()}>
        {children}
      </S.ModalContent>
    </S.ModalWrapper>
  );
};

export default Modal;
