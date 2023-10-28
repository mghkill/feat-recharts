import React from 'react';
import { Ul } from './styles';

const DataCard = ({ element, listValue }) => {
  return (
    <div className="data-card">
      <h2>{listValue.name}</h2>
      <p>Max: {listValue.max}</p>
      <p>Min: {listValue.min}</p>
      <Ul>
          <li>
            <strong>Time:</strong> {new Date(element.time).toLocaleString()} 
            <strong>Value:</strong> {element.value}
          </li>
      </Ul>
    </div>
  );
};

export default DataCard;
