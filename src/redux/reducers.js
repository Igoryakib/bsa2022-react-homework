import { createReducer } from '@reduxjs/toolkit';
import {registerUser, loginUser, getCurrentUser} from './auth/auth-operations';
import { getAllTrips } from './trips/trips-operations';
import { addBooking, getAllBookings, removeBooking } from './bookings/bookings-operations';
import { requestError, requestLoading, typeModal } from './actions';

const isLoading = createReducer(false, {
    [registerUser.pending]: () => true,
    [loginUser.pending]: () => true,
    [getCurrentUser.pending]: () => true,
    [getAllTrips.pending]: () => true,
    [addBooking.pending]: () => true,
    [getAllBookings.pending]: () => true,
    [removeBooking.pending]: () => true,
    [getAllTrips.rejected]: () => false,
    [registerUser.rejected]: () => false,
    [loginUser.rejected]: () => false,
    [getCurrentUser.rejected]: () => false,
    [addBooking.rejected]: () => false,
    [getAllBookings.rejected]: () => false,
    [removeBooking.rejected]: () => false,
    [registerUser.fulfilled]: () => false,
    [loginUser.fulfilled]: () => false,
    [getCurrentUser.fulfilled]: () => false,
    [getAllTrips.fulfilled]: () => false,
    [addBooking.fulfilled]: () => false,
    [getAllBookings.fulfilled]: () => false,
    [removeBooking.fulfilled]: () => false,
    [requestLoading]: (_, action) => action.payload,
});

const error = createReducer('', {
    [registerUser.rejected]: (_, action) => action.payload,
    [loginUser.rejected]: (_, action) => action.payload,
    [getCurrentUser.rejected]: (_, action) => action.payload,
    [getAllTrips.rejected]: (_, action) => action.payload,
    [requestError]: (_, action) => action.payload,
    [addBooking.rejected]: (_, action) => action.payload,
    [getAllBookings.rejected]: (_, action) => action.payload,
    [removeBooking.rejected]: (_, action) => action.payload,
    [registerUser.pending]: () => '',
    [loginUser.pending]: () => '',
    [getCurrentUser.pending]: () => '',
    [getAllTrips.pending]: () => '',
    [addBooking.pending]: () => '',
    [getAllBookings.pending]: () => '',
    [removeBooking.pending]: () => '',
});

const modal = createReducer(false, {
    [typeModal]: (_, action) => action.payload,
})

export {isLoading, error, modal};