import React from "react";
import PropTypes from "prop-types";


const Option = ({value, text}) => {
    return(
        <option value={value}>{text}</option>
    );
};

Option.propTypes = {
    value: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

export default Option;