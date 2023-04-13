import React from "react";
import * as S from "./styled";

export default function MainScreen() {
  return (
    <S.MainScreen>
      <header>CodeLeap Network</header>
      <div>
        <h1>Whats on your mind</h1>
        <div>
          <p>Title</p>
          <input></input>
        </div>
        <div>
          <p>Content</p>
          <input></input>
        </div>
        <button>create</button>
      </div>
      <div>
        <div>
          My first post at CodeLeap Network
          <div>
            <img />
            <img />
          </div>
        </div>
        <div>
          <p>@Victor</p> <p>25 minutes ago</p>
        </div>
        <div>
          <p>text</p>
        </div>
      </div>
    </S.MainScreen>
  );
}
