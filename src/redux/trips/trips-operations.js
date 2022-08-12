import { createAsyncThunk, createAction } from '@reduxjs/toolkit';

import { GET_TRIPS, FILTER_TRIPS, LEVEL_TRIPS, DURATION_TRIPS } from './trips-types';
import { getTrips } from '../../utils/fetchApi';

const getAllTrips = createAsyncThunk(GET_TRIPS, (_, {rejectWithValue}) => {
    return getTrips().then(data => data).catch(data => rejectWithValue(data.message));
});

const filterTrip = createAction(FILTER_TRIPS);
const levelTrip = createAction(LEVEL_TRIPS);
const durationTrip = createAction(DURATION_TRIPS);

export {getAllTrips, filterTrip, levelTrip, durationTrip};