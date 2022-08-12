import React from "react";
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";
import styles from "./TripItem.module.css";
import buttonStyles from '../../components/Button/Button.module.css';

const TripItem = ({id, title, img, duration, price, level}) => {
  return (
    <li className={styles["trip-card"]}>
      <img className={styles['trip-img']} src={img} alt="trip image" />
      <div className={styles["trip-card__content"]}>
        <div className={styles["trip-info"]}>
          <h3 className={styles["trip-info__title"]}>{title}</h3>
          <div className={styles["trip-info__content"]}>
            <span className={styles["trip-info__duration"]}>
              <strong>{duration}</strong> days
            </span>
            <span className={styles["trip-info__level"]}>{level}</span>
          </div>
        </div>
        <div className={styles["trip-price"]}>
          <span>Price</span>
          <strong className={styles["trip-price__value"]}>{price} $</strong>
        </div>
      </div>
      <Link to={`/trip/${id}`} className={buttonStyles["button"]}>
      Discover a trip
      </Link>
    </li>
  );
};

TripItem.propTypes = {
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    level: PropTypes.string.isRequired,
};

export default TripItem;
