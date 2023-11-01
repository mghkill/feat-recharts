import React from 'react';
import { Li } from './styles';
import { Box } from '@mui/material';

const DataCard = ({ element, listValue }) => {
  const formatNumber = (number) => {
    return number.toFixed(2);
  };
  return (
    <Li>
      <Box>
      <h2>{listValue.name}</h2>
        <p>Max: {formatNumber(listValue.max)}</p>
        <p>Min: {formatNumber(listValue.min)}</p>
        <p>
          <strong>Time:</strong> {new Date(element.time).toLocaleString()}
        </p>
        <p>
          <strong>Value:</strong> {formatNumber(element.value)}
        </p>
      </Box>
    </Li>
  );
};

export default DataCard;
