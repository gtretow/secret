import React, { useState, useRef } from "react";
import * as S from "./styled";
import Button from "../../Components/Button/Button";
import { useDispatch } from "react-redux";
import { changeUser } from "../../Redux/userSlice";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const usernameRef = useRef(null);

  const handleLogin = () => {
    dispatch(changeUser(username));
  };

  async function handleUsername() {
    const value = usernameRef.current.value;
    await setUsername(value);
  }

  return (
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
        <Link to="/mainScreen">
          <Button onClick={handleLogin}>ENTER</Button>
        </Link>
      </S.ButtonContainer>
    </S.SignUpWrapper>
  );
};

export default SignUp;
