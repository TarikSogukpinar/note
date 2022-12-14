import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./Main";
import ProfilePrivateRoutes from "../constants/ProfilePrivateRoute";
import NotesPrivateRoutes from "../constants/NotesPrivateRoutes";
import LoginPrivateRoutes from "../constants/LoginPrivateRoutes";
import RegisterPrivateRoutes from "../constants/RegisterPrivateRoutes";
import CreateNotePrivateRoutes from "../constants/CreateNotesPrivateRoutes";
import NotFound from "./NotFound";
import EditNote from "./EditNote";
import Contact from "./Contact";
import ForgetPassword from "./ForgetPassword";
import Faq from "./Faq";
import PasswordReset from "./PasswordReset";
import EmailVerify from "./EmailVerify";
import EditUserInfoPrivateRoutes from "../constants/EditUserInfoPrivateRoutes";

export default function Dashboard() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main></Main>}></Route>
        <Route path="/faq" element={<Faq></Faq>}></Route>
        <Route
          path="/forget-password"
          element={<ForgetPassword></ForgetPassword>}
        ></Route>
        <Route
          path="/password-reset/:id/:token"
          element={<PasswordReset></PasswordReset>}
        ></Route>
        <Route
          path="/user/:id/verify/:token"
          element={<EmailVerify></EmailVerify>}
        ></Route>
        <Route
          exact
          path="/login"
          element={<LoginPrivateRoutes></LoginPrivateRoutes>}
        ></Route>
        <Route
          exact
          path="/register"
          element={<RegisterPrivateRoutes></RegisterPrivateRoutes>}
        ></Route>
        <Route
          exact
          path="/profile"
          element={<ProfilePrivateRoutes></ProfilePrivateRoutes>}
        ></Route>
        <Route
          exact
          path="/editUserInfo/:id"
          element={<EditUserInfoPrivateRoutes></EditUserInfoPrivateRoutes>}
        ></Route>
        <Route
          exact
          path="/notes"
          element={<NotesPrivateRoutes></NotesPrivateRoutes>}
        ></Route>
        <Route
          exact
          path="/createnote"
          element={<CreateNotePrivateRoutes></CreateNotePrivateRoutes>}
        ></Route>
        <Route exact path="*" element={<NotFound></NotFound>}></Route>
        <Route path="/edit/:id" element={<EditNote></EditNote>}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
}
