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
import Button from "../../Components/Button/Button";
import { useNavigate } from "react-router-dom";

const MainScreen = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [posts, setPosts] = useState([]);
  const [postToBeEdited, setPostToBeEdited] = useState({});
  const [typeOfModal, setTypeOfModal] = useState("");
  const { username } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      refreshPage();
    } catch (e) {
      console.error(e);
    }
  }, []);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  function handleTypeOfModal(type) {
    setTypeOfModal(type);
  }

  async function handleChildData(data) {
    setPostToBeEdited(data);
  }

  async function refreshPage() {
    const response = await getUserPosts(username);
    setPosts(response);
  }

  return (
    <S.MainScreen>
      <S.Header>
        <S.WhiteText>CodeLeap Network</S.WhiteText>
        <Button onClick={handleLogout}>Logout</Button>
      </S.Header>
      <CreateCard refreshContent={refreshPage} />
      {posts.map((item) => {
        return (
          <PostedCard
            key={item.id}
            post={item}
            openModal={handleModalOpen}
            changeTypeOfModal={handleTypeOfModal}
            onData={handleChildData}
          />
        );
      })}
      {createPortal(
        <Modal
          type={typeOfModal}
          isOpen={modalOpen}
          onClose={handleModalClose}
          username={username}
          data={postToBeEdited}
          refreshContent={refreshPage}
        ></Modal>,
        document.body
      )}
    </S.MainScreen>
  );
};

export default MainScreen;
