import React from "react";
import { useState } from "react";
import { createPortal } from "react-dom";

import * as S from "./styled";
import PostedCard from "../../Components/PostedCard/PostedCard";
import CreateCard from "../../Components/CreateCard/CreateCard";
import Modal from "../../Components/Modal/Modal";

export default function MainScreen() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  return (
    <S.MainScreen>
      <S.Header>
        <S.WhiteText>CodeLeap Network</S.WhiteText>
      </S.Header>
      <CreateCard />
      <PostedCard />
      <>
        <button onClick={handleModalOpen}>Open Modal</button>
        {createPortal(
          <Modal
            isOpen={modalOpen}
            onClose={handleModalClose}
            onClick={handleModalClose}
          ></Modal>,
          document.body
        )}
      </>
    </S.MainScreen>
  );
}
