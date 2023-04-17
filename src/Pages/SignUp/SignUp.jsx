import React, {useState} from "react";
import * as S from "./styled";
import Button from "../../Components/Button/Button";
import { useDispatch } from "react-redux";
import { changeUser } from "../../Redux/userSlice";



const SignUp = () => {
  const [username, setUsername] = useState('')
  const dispatch = useDispatch()

  const handleLogin = () => {
    dispatch(changeUser(username))
  }

  return (
    <S.SignUpWrapper>
      <S.PrimaryText>Welcome to CodeLeap network!</S.PrimaryText>
      <S.InputBox>
        <S.Text>Please enter your username</S.Text>
        <S.Input 
          type="text" 
          placeholder="username" 
          onChange={(e)=> setUsername(e.target.value)}/>
      </S.InputBox>
      <S.ButtonContainer>
        <Button onClick={handleLogin}>ENTER</Button>
      </S.ButtonContainer>
    </S.SignUpWrapper>
  );
}

export default SignUp