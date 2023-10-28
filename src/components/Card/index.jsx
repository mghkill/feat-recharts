import React from 'react';

const DataCard = ({ name, max, min, serie }) => {
  return (
    <div className="data-card">
      <h2>{name}</h2>
      <p>Max: {max}</p>
      <p>Min: {min}</p>
      <ul>
        {serie.map(dataPoint => (
          <li key={dataPoint.time}>
            <strong>Time:</strong> {new Date(dataPoint.time).toLocaleString()} |
            <strong>Value:</strong> {dataPoint.value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DataCard;
