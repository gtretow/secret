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
import { Circles } from "react-loader-spinner";
import { COLORS } from "../../styles/Constants";

const MainScreen = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [posts, setPosts] = useState([]);
  const [postToBeEdited, setPostToBeEdited] = useState({});
  const [typeOfModal, setTypeOfModal] = useState("");
  const { username } = useSelector((state) => state.user);
  const [showSpinner, setShowSpinner] = useState(false);
  const [page, setPage] = useState(1);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  async function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  useEffect(() => {
    refreshPage();
  }, [page]);

  function handleScroll(event) {
    const { scrollTop, clientHeight, scrollHeight } = event.target;
    if (scrollTop + clientHeight >= scrollHeight) {
      setPage((prevPage) => prevPage + 1);
    }
  }

  const handleLogout = async () => {
    setShowSpinner(true);
    await sleep(3000);
    setShowSpinner(false);
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
    <>
      {showSpinner ? (
        <S.LoadingContainer>
          <Circles
            height="80"
            width="80"
            radius="9"
            color={COLORS.primary}
            ariaLabel="loading"
            wrapperStyle
            wrapperClass
          />
        </S.LoadingContainer>
      ) : (
        <S.MainScreen>
          <S.Header>
            <S.WhiteText>CodeLeap Network</S.WhiteText>
            <Button onClick={handleLogout}>Logout</Button>
          </S.Header>
          <CreateCard refreshContent={refreshPage} />
          <S.ScrolContainer
            id="content"
            onScroll={(event) => handleScroll(event)}
          >
            {posts?.map((item) => {
              return (
                <PostedCard
                  key={item.id}
                  post={item}
                  openModal={handleModalOpen}
                  changeTypeOfModal={handleTypeOfModal}
                  onData={handleChildData}
                  loggedUser={username}
                />
              );
            })}
          </S.ScrolContainer>
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
      )}
    </>
  );
};

export default MainScreen;
