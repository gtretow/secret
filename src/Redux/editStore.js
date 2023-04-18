import { configureStore } from "@reduxjs/toolkit";
import editReducer from "./editSlice";

export default configureStore({
  reducer: {
    edit: editReducer,
  },
});
