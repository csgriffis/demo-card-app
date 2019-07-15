import React from 'react';
import { FaSpinner } from 'react-icons/fa';
import './Spinner.scss';

export function Spinner() {
  return (
    <div className="spinner-container">
      <FaSpinner className="spinner" size='5em' />
    </div>
  )
}
