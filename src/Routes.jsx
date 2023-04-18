import React from "react";
import { Route, BrowserRouter, Routes, redirect } from "react-router-dom";
import SignUp from "./Pages/SignUp/SignUp.jsx";
import MainScreen from "./Pages/MainScreen/MainScreen.jsx";
import { useSelector } from "react-redux";

const AppRoutes = ({}) => {
  const { isLogged } = useSelector((state) => state.user);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/mainScreen"
          element={isLogged === true ? <MainScreen /> : redirect("/login")}
        />
        <Route element={<SignUp />} exact path="/login" />
        <Route path="*" element={<SignUp to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
