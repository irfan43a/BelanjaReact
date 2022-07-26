import React from "react";
import PropTypes from "prop-types";

const Input = ({ label, id, ...props }) => {
  return (
    <div className="mb-3">
      <label className="form-label" htmlFor={id}>
        {label}
      </label>
      <input id={id} className="form-control" {...props} />
    </div>
  );
};
Input.defaultProps = {
  label: "isi form ini",
};
Input.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
};

export default Input;
