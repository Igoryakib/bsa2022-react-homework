import React from "react";
import PropTypes from "prop-types";
import styles from "./Select.module.css";

import Option from "../Option/Option";
const shortid = require('shortid');

const Select = ({valueChange, setChange, text, additionalProps}) => {
  return (
    <label className={styles["select"]}>
      <span className="visually-hidden">{text}</span>
      <select value={valueChange} onChange={(event) => setChange(event.target.value)} name="duration">
      {additionalProps.map(item => {
        return(
          <Option key={shortid.generate()} value={item.value} text={item.textOption}/>
        );
      })}
      </select>
    </label>
  );
};

Select.propTypes = {
    text: PropTypes.string.isRequired,
    additionalProps: PropTypes.array.isRequired,
    setChange: PropTypes.func.isRequired,
    valueChange: PropTypes.string.isRequired,
};

export default Select;
