import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "edit",
  initialState: {
    title: "",
    content: "",
    id: "",
  },
  reducers: {
    editPost(state, { payload }) {
      console.log("payload", payload);
      console.log("state", state);
      return {
        ...state,
        content: payload.title,
        username: payload.content,
        id: payload.id,
      };
    },
  },
});

export const { editPost } = slice.actions;

export const editUserPost = (state) => state.user;

export default slice.reducer;
