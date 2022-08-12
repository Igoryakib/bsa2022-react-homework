import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styles from "./TripDetailPage.module.css";

import { getTripById } from "../../utils/fetchApi";
import { requestError, requestLoading, typeModal } from "../../redux/actions";
import {getModal} from '../../redux/selectors.js';

import Button from "../../components/Button/Button";
import Modal from "../../components/Modal/Modal";

const TripDetailPage = () => {
  const dispatch = useDispatch();
  const isOpenModal = useSelector(getModal);
  const setIsOpenModal = () => {
    dispatch(typeModal(!isOpenModal))
  };
  const { tripId } = useParams();
  // const [isOpenModal, setIsOpenModal] = useState(false);
  const [tripDetail, setTripDetail] = useState({});
  useEffect(() => {
    dispatch(requestLoading(true));
    getTripById(tripId).then(data => setTripDetail(data)).catch(error => requestError(error)).finally(dispatch(requestLoading(false)));
  }, []);
  return (
    <>
      <main className={styles["trip-page"]}>
        <div className={styles["trip"]}>
          <img src={tripDetail.image} className={styles["trip__img"]} alt="trip image" />
          <div className={styles["trip__content"]}>
            <div className={styles["trip-info"]}>
              <h3 className={styles["trip-info__title"]}>{tripDetail.title}</h3>
              <div className={styles["trip-info__content"]}>
                <span className={styles["trip-info__duration"]}>
                  <strong>{tripDetail.duration}</strong> days
                </span>
                <span className={styles["trip-info__level"]}>{tripDetail.level}</span>
              </div>
            </div>
            <div className={styles["trip__description"]}>{tripDetail.description}</div>
            <div className={styles["trip-price"]}>
              <span>Price</span>
              <strong className={styles["trip-price__value"]}>{tripDetail.price} $</strong>
            </div>
            <Button
            onClickFn={() => setIsOpenModal()}
              text="Book a trip"
              style={styles["trip__button"]}
              type="button"
            />
          </div>
        </div>
      </main>
      {isOpenModal && <Modal price={tripDetail.price} onClickFn={() => setIsOpenModal()} title={tripDetail.title} duration={tripDetail.duration} level={tripDetail.level} tripId={tripDetail.id}/>}
    </>
  );
};

export default TripDetailPage;
