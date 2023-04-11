import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import SignUp from "./Pages/SignUp/SignUp.jsx";
import MainScreen from "./Pages/MainScreen/MainScreen.jsx";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainScreen />} path="/mainScreen" />
        <Route element={<SignUp />} exact path="/" />
        <Route path="*" element={<SignUp to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
