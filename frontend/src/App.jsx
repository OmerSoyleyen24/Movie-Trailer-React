import React from "react";
import { Route, Routes } from "react-router-dom";
import { UserProvider } from "./context/userContext";
import HomePage from "./pages/HomePage";
import IndexPage from "./pages/indexPage";
import LoginPage from "./pages/LoginPage";
import UpdatePasswordPage from "./pages/UpdatePasswordPage";
import SignupPage from "./pages/SignupPage";
import MovieDescPage from "./pages/MovieDescPage";
import AdminPage from "./pages/AdminPage";
import "./App.css";

const App = () => {
  return (
    <UserProvider>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/updatePassword" element={<UpdatePasswordPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/movieDesc/:movieId" element={<MovieDescPage />} />
        <Route path="/admin/users" element={<AdminPage />} />
      </Routes>
    </UserProvider>
  )
}

export default App;