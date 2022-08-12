import { createAsyncThunk, createAction } from "@reduxjs/toolkit";
import { NotificationManager } from "react-notifications";
import axios from "axios";

import {
  USER_LOGIN,
  USER_REGISTER,
  USER_LOGOUT,
  USER_REFRESH,
} from "./auth-types";

import { register, login, getCurrent } from "../../utils/fetchApi";

const token = {
  setToken(token) {
    axios.defaults.headers.common.authorization = `Bearer ${token}`;
  },
  unSetToken() {
    axios.defaults.headers.common.authorization = "";
  },
};

const registerUser = createAsyncThunk(
  USER_REGISTER,
  (data, { rejectWithValue }) => {
    return register(data)
      .then((data) => {
        NotificationManager.success(
          `Great, user ${data.user.fullName} has successfully registered :)`
        );
        token.setToken(data.token);
        return data;
      })
      .catch((data) => {
        NotificationManager.error(
          `We have a problem ${data.message}, please try again`
        );
        return rejectWithValue(data.message);
      });
  }
);

const loginUser = createAsyncThunk(USER_LOGIN, (data, { rejectWithValue }) => {
  return login(data)
    .then((data) => {
      NotificationManager.success(
        `Great, user ${data.user.fullName} has successfully authorized :)`
      );
      token.setToken(data.token);
      return data;
    })
    .catch((data) => {
      NotificationManager.error(
        `We have a problem ${data.message}, please try again`
      );
      return rejectWithValue(data.message);
    });
});

const getCurrentUser = createAsyncThunk(
  USER_REFRESH,
  (_, { rejectWithValue, getState }) => {
    const {
      auth: { token: persistedToken },
    } = getState();
    if (!persistedToken) return rejectWithValue("Non authorized 401");
    token.setToken(persistedToken);
    return getCurrent()
      .then((data) => {
        NotificationManager.success(`User ${data.fullName} authorized :)`);
        return data;
      })
      .catch((data) => {
        NotificationManager.error(
          `We have a problem ${data.message}, please try again`
        );
        return rejectWithValue(data.message);
      });
  }
);

const logoutUser = createAction(USER_LOGOUT, () => {
  token.unSetToken();
  return {
    payload: null,
  };
});

export { registerUser, loginUser, getCurrentUser, logoutUser };
