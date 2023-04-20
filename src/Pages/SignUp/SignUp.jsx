import React, { useState, useRef, useEffect } from "react";
import * as S from "./styled";
import Button from "../../Components/Button/Button";
import { useDispatch } from "react-redux";
import { changeUser } from "../../Redux/userSlice";
import { useNavigate } from "react-router-dom";
import { Circles } from "react-loader-spinner";
import { COLORS } from "../../styles/Constants";
const SignUp = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [showSpinner, setShowSpinner] = useState(false);
  const dispatch = useDispatch();
  const usernameRef = useRef(null);
  async function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  const handleLogin = async () => {
    setShowSpinner(true);
    await sleep(3000);
    setShowSpinner(false);
    dispatch(changeUser(username));
    navigate("/mainScreen");
  };

  async function handleUsername() {
    const value = usernameRef.current.value;
    await setUsername(value);
  }

  return (
    <>
      {showSpinner == 1 ? (
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
        <S.SignUpWrapper>
          <S.PrimaryText>Welcome to CodeLeap network!</S.PrimaryText>
          <S.InputBox>
            <S.Text>Please enter your username</S.Text>
            <S.Input
              type="text"
              placeholder="username"
              onChange={handleUsername}
              ref={usernameRef}
            />
          </S.InputBox>
          <S.ButtonContainer>
            <Button onClick={handleLogin}>ENTER</Button>
          </S.ButtonContainer>
        </S.SignUpWrapper>
      )}
      ;
    </>
  );
};

export default SignUp;
