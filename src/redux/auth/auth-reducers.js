import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
  registerUser,
  loginUser,
  getCurrentUser,
  logoutUser,
} from "./auth-operations";

const initialState = {
  id: null,
  fullName: null,
  email: null,
  createdAt: null,
};

const user = createReducer(initialState, {
  [registerUser.fulfilled]: (_, action) => action.payload.user,
  [loginUser.fulfilled]: (_, action) => action.payload.user,
  [getCurrentUser.fulfilled]: (_, action) => action.payload,
  [logoutUser]: () => initialState,
});

const token = createReducer("", {
  [registerUser.fulfilled]: (_, action) => action.payload.token,
  [loginUser.fulfilled]: (_, action) => action.payload.token,
  [logoutUser]: () => null,
});

const isAuthenticated = createReducer(false, {
  [registerUser.fulfilled]: () => true,
  [loginUser.fulfilled]: () => true,
  [getCurrentUser.fulfilled]: () => true,
  [logoutUser]: () => false,
  [registerUser.rejected]: () => false,
  [loginUser.rejected]: () => false,
  [getCurrentUser.rejected]: () => false,
});

export default combineReducers({
  user,
  token,
  isAuthenticated,
});
