import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import PropTypes from 'prop-types';

import Navigation from '../Navigation/Navigation';

import routes from '../../utils/routes';
import styles from './Header.module.css';

const Header = () => {
  const {pathname} = useLocation();
    return(
        <header className={styles.header}>
        <div className={styles.header__inner}>
        <Link className={styles.header__logo} to={routes.homePage}>
        <h1 className={styles.header__logo}>Travel App</h1>
        </Link>
        {pathname === routes.registerPage || pathname === routes.loginPage ? <></> : <Navigation/>}
        </div>
      </header>
    );
};

export default Header;