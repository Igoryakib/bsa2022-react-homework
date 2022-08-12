import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./HomePage.module.css";
import tripStyles from "../../components/TripItem/TripItem.module.css";

import Input from "../../components/Input/Input";
import Select from "../../components/Select/Select";
import TripItem from "../../components/TripItem/TripItem";
import ListItems from "../../components/ListItems/ListItems";
import { getTrips } from "../../redux/trips/trips-selectors";
import { getAllTrips } from "../../redux/trips/trips-operations";
import {
  getFilter,
  getLevel,
  getDuration,
} from "../../redux/trips/trips-selectors";
import {
  filterTrip,
  levelTrip,
  durationTrip,
} from "../../redux/trips/trips-operations";

const HomePage = () => {
  const dispatch = useDispatch();
  const trips = useSelector(getTrips);
  const filter = useSelector(getFilter);
  const level = useSelector(getLevel);
  const duration = useSelector(getDuration);
  const setFilter = (value) => {
    dispatch(levelTrip(""));
    dispatch(durationTrip(""));
    dispatch(filterTrip(value));
  };
  const setLevel = (value) => {
    dispatch(durationTrip(""));
    dispatch(filterTrip(""));
    dispatch(levelTrip(value));
  };
  const setDuration = (value) => {
    dispatch(filterTrip(""));
    dispatch(levelTrip(""));
    dispatch(durationTrip(value));
  };
  useEffect(() => {
    dispatch(getAllTrips());
  }, []);
  return (
    <main>
      <section className={styles["trips-filter"]}>
        <form className={styles["trips-filter__form"]} autoComplete="off">
          <Input
            style={styles["trips-filter__search"]}
            setValue={setFilter}
            value={filter}
            hidden="visually-hidden"
            placeholder="search by name"
            name="search"
            type="search"
            text="Search by name"
          />
          <Select
            valueChange={duration}
            setChange={setDuration}
            text="Search by duration"
            additionalProps={[
              {
                value: "",
                textOption: "duration",
              },
              {
                value: "0_x_5",
                textOption: "< 5 days",
              },
              {
                value: "5_x_10",
                textOption: "< 10 days",
              },
              {
                value: "10_x",
                textOption: "≥ 10 days",
              },
            ]}
          />
          <Select
            valueChange={level}
            setChange={setLevel}
            text="Search by level"
            additionalProps={[
              {
                value: "",
                textOption: "level",
              },
              {
                value: "easy",
                textOption: "easy",
              },
              {
                value: "moderate",
                textOption: "moderate",
              },
              {
                value: "difficult",
                textOption: "difficult",
              },
            ]}
          />
        </form>
      </section>
      <section className={styles.trips}>
        <ListItems
          ArrayItem={TripItem}
          style={tripStyles["trip-list"]}
          arrayItems={trips}
        />
      </section>
    </main>
  );
};

export default HomePage;
