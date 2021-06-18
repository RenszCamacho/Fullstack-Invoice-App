import React from 'react';
import { Link } from 'react-router-dom';
import './goBack.scss';

function GoBack() {
  return (
    <Link className="go-back" to="/">
      <em className="fas fa-chevron-left" />
      <span>Go Back</span>
    </Link>
  );
}

export default GoBack;
