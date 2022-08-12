import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import styles from './Footer.module.css';
import heart from '../../static/heart.svg';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <span className={styles.footer__text }>
        <a className={styles.footer__link} href="https://binary-studio.com">
          binary studio
        </a>
        with
        <img
          className={styles.footer__icon}
          src={heart}
          alt="heart icon"
        />
      </span>
    </footer>
  );
};

export default Footer;
