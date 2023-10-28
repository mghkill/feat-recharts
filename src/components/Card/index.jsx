import React from 'react';
import { Li } from './styles';

const DataCard = ({ element, listValue }) => {
  return (
    <Li>
      <div className="data-card">
        <h2>{listValue.name}</h2>
        <p>Max: {listValue.max}</p>
        <p>Min: {listValue.min}</p>
        <p>
          <strong>Time:</strong> {new Date(element.time).toLocaleString()}
        </p>
        <p>
          <strong>Value:</strong> {element.value}
        </p>
      </div>
    </Li>
  );
};

export default DataCard;
