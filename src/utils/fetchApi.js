import axios from "axios";

axios.defaults.baseURL = 'https://travel-app-api.glitch.me/api/v1';

const register = (credentials) => {
    return axios.post('/auth/sign-up', credentials).then(res => res.data).catch(error => {
        throw error;
    });
};
 
const login = (credentials) => {
    return axios.post('/auth/sign-in', credentials).then(res => res.data).catch(error => {
        throw error;
    });
};
 
const getCurrent = () => {
    return axios.get('/auth/authenticated-user').then(res => res.data).catch(error => {
        throw error;
    });
};

const getTrips = () => {
    return axios.get('/trips').then(res => res.data).catch(error => {
        throw error;
    })
};

const getTripById = (tripId) => {
    return axios.get(`/trips/${tripId}`).then(res => res.data).catch(error => {
        throw error;
    })
};

const getBookings = () => {
    return axios.get('/bookings').then(res => res.data).catch(error => {
        throw error;
    })
};

const createBooking = (requestData) => {
    return axios.post('/bookings', requestData).then(res => res.data).catch(error => {
        throw error;
    })
};

const deleteBooking = (bookingId) => {
    return axios.delete(`/bookings/${bookingId}`).then(res => res.data).catch(error => {
        throw error;
    })
};

export {register, login, getCurrent, getTrips, getTripById, getBookings, createBooking, deleteBooking};