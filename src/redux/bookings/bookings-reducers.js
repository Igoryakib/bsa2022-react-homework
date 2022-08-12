import { createReducer } from '@reduxjs/toolkit';

import { addBooking, removeBooking, getAllBookings } from './bookings-operations';


const bookings = createReducer([], {
    [getAllBookings.fulfilled]: (_, action) => action.payload,
    [addBooking.fulfilled]: (state, action) => [action.payload, ...state],
    [removeBooking.fulfilled]: (state, action) =>  state.filter(item => item.id !== action.payload),
});

export {bookings};