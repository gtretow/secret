import React from "react";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

import * as S from "./styled";
import PostedCard from "../../Components/PostedCard/PostedCard";
import CreateCard from "../../Components/CreateCard/CreateCard";
import Modal from "../../Components/Modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Redux/userSlice";
import { getUserPosts } from "../../Actions/axios";

const MainScreen = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [posts, setPosts] = useState(false);
  const [typeOfModal, setTypeOfModal] = useState("");
  const { username } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await getUserPosts();
      setPosts(response.data);
    };

    fetchPosts();

    return () => {
      console.log("posts =>", posts);
    };
  }, []);

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  function handleTypeOfModal(type) {
    setTypeOfModal(type);
  }

  return (
    <S.MainScreen>
      <S.Header>
        <S.WhiteText>CodeLeap Network</S.WhiteText>
      </S.Header>
      <CreateCard />
      {posts.map((item) => {
        return (
          <PostedCard
            key={item.id}
            post={item}
            openModal={handleModalOpen}
            changeTypeOfModal={handleTypeOfModal}
          />
        );
      })}

      <>
        {createPortal(
          <Modal
            type={typeOfModal}
            isOpen={modalOpen}
            onClose={handleModalClose}
            onClick={handleModalClose}
            username={username}
          ></Modal>,
          document.body
        )}
      </>
    </S.MainScreen>
  );
};

export default MainScreen;
