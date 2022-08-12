import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./BookingsPage.module.css";

import { getBookings } from "../../redux/bookings/bookings-selectors";
import { getAllBookings } from "../../redux/bookings/bookings-operations";

import ListItems from "../../components/ListItems/ListItems";
import BookingItem from "../../components/BookingItem/BookingItem";

const BookingsPage = () => {
    const dispatch = useDispatch();
    const bookings = useSelector(getBookings);
    useEffect(() => {
        dispatch(getAllBookings());
    }, []);
    return(
        <main className={styles['bookings-page']}>
        <ListItems ArrayItem={BookingItem} arrayItems={bookings} booking style={styles['bookings__list']} />
        </main>
    );
};


export default BookingsPage;