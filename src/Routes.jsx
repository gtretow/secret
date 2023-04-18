import React from "react";
import { Route, BrowserRouter, Routes, redirect } from "react-router-dom";
import SignUp from "./Pages/SignUp/SignUp.jsx";
import MainScreen from "./Pages/MainScreen/MainScreen.jsx";

const AppRoutes = ({ isLogged }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          render={() =>
            isLogged === true ? <MainScreen /> : redirect("/login")
          }
        />
        <Route element={<SignUp />} exact path="/login" />
        <Route path="*" element={<SignUp to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
