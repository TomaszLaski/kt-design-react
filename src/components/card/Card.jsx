import React from 'react';
import './styles.css';

const Card = ({ description }) => {
  return (
    <div className="card">
      <div className="description">{description}</div>
    </div>
  );
};

export default Card;