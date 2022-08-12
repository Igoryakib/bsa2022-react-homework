import React from "react";
import PropTypes from "prop-types";
import classNames from 'classnames';

import styles from './Button.module.css';

const Button = ({style, text, type, onClickFn}) => {
    return(
        <button onClick={onClickFn} className={classNames(styles.button, style)} type={type}>{text}</button>
    );
};

Button.propTypes = {
    style: PropTypes.string,
    text: PropTypes.string.isRequired,
    type: PropTypes.string,
    onClickFn: PropTypes.func
};

Button.defaultProps = {
    style: '',
    type: 'button',
    onClickFn: null
};

export default Button;