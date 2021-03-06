import { useHref } from "react-router";
import { login, logout } from "../actions/user";

import {
  postRegister,
  postLogin,
  postLogout,
  getConfirmation,
  resendConfirmation,
  resetRegister,
  sendResetPasswordLink,
  resetPassword,
} from "../../api/index";

export const attemptLogin = (user) => (dispatch) =>
  postLogin(user).then(({ data }) => {
    dispatch(login(data.user));
    dispatch(useHref("/home"));
  });

export const attemptSendResetPasswordLink = (email) => (dispatch) =>
  sendResetPasswordLink(email).then(() => {
    dispatch(useHref("/login/forgot"));
  });

export const attemptResetPassword = (password, token) => (dispatch) =>
  resetPassword(password, token)
    .then(() => {
      dispatch(useHref("/login"));
    })
    .catch(() => {
      dispatch(useHref(`/login/reset/${token}`));
    });

export const attemptLogout = () => (dispatch) =>
  postLogout()
    .then(() => {
      dispatch(logout());
    })
    .finally(() => {
      dispatch(useHref("/login"));
    });

export const attemptRegister = (newUser) => () => postRegister(newUser);

export const attemptGetConfirmation = (token) => (dispatch) =>
  getConfirmation(token).then(() => {
    dispatch(useHref("/login"));
  });

export const attemptResendConfirmation = (email) => (dispatch) =>
  resendConfirmation(email).catch(() => {
    dispatch(useHref("/register"));
  });

export const attemptResetRegister = (email) => (dispatch) =>
  resetRegister(email).catch(() => {
    dispatch(useHref("/register"));
  });
