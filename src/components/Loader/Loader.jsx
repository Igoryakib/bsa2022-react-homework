import React from "react";
import { createPortal } from "react-dom";
import styles from './Loader.module.css';

const modalRef = document.querySelector('#root-modal');

const Loader = () => {
    return(
        createPortal(
            <div className={styles.wrapper}>
        <div className={styles.loader}></div>
        </div>
        , 
        modalRef)
    );
};

export default Loader;