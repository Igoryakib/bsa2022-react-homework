import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import {getAllTrips, filterTrip, levelTrip, durationTrip} from './trips-operations';

const tripsArray = createReducer([], {
    [getAllTrips.fulfilled]: (_, action) => action.payload,
});

const filter = createReducer('', {
    [filterTrip]: (_, action) => action.payload,
});

const level = createReducer('', {
    [levelTrip]: (_, action) => action.payload,
});

const duration = createReducer('', {
    [durationTrip]: (_, action) => action.payload,
});

export default combineReducers({
    tripsArray,
    filter,
    level,
    duration
}); 