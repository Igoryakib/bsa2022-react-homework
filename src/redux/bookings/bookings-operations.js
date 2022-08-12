import { createAsyncThunk } from "@reduxjs/toolkit";
import { NotificationManager } from "react-notifications";

import { GET_BOOKING, DELETE_BOOKING, ADD_BOOKING } from "./bookings-types";
import {
  getBookings,
  createBooking,
  deleteBooking,
} from "../../utils/fetchApi";

const getAllBookings = createAsyncThunk(
  GET_BOOKING,
  (_, { rejectWithValue }) => {
    return getBookings()
      .then((data) => {
        if (data.length === 0) {
          NotificationManager.info(
            "You haven't had bookings yet. You can book a trip on Home page :)"
          );
        }
        return data;
      })
      .catch((data) => rejectWithValue(data.message));
  }
);

const addBooking = createAsyncThunk(
  ADD_BOOKING,
  (credentials, { rejectWithValue }) => {
    return createBooking(credentials)
      .then((data) => {
        NotificationManager.success(`Booking has successfully added :)`);
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

const removeBooking = createAsyncThunk(
  DELETE_BOOKING,
  (bookingId, { rejectWithValue }) => {
    return deleteBooking(bookingId)
      .then((data) => {
        NotificationManager.success(`Booking has successfully deleted :)`);
        return bookingId;
      })
      .catch((data) => {
        NotificationManager.error(
          `We have a problem ${data.message}, please try again`
        );
        return rejectWithValue(data.message);
      });
  }
);

export { getAllBookings, addBooking, removeBooking };
