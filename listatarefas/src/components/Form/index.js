import React from 'react';
import PropTypes from 'prop-types';
//Form button icon
import { FaPlus } from 'react-icons/fa';

import './Form.css'; //        vai puxar do props la do main.js
export default function Form({ handleSubmit, handleChange, novaTarefa }) {
  return (
    <form action="#" onSubmit={handleSubmit} className="form">
      <input onChange={handleChange} type="text" value={novaTarefa} />
      <button type="submit">
        <FaPlus />
      </button>
    </form>
  );
}

Form.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  novaTarefa: PropTypes.string.isRequired,
};
