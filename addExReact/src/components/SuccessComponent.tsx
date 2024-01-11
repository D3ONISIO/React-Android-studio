// SuccessComponent.js
import React from 'react';

interface SuccessComponentProps {
  formattedValues: string[];
}

const SuccessComponent: React.FC<SuccessComponentProps> = ({ formattedValues }) => {
  return (
    <div style={{ marginTop: '10px' }}>
      {formattedValues.map((value, index) => (
        <div key={index}>{value}</div>
      ))}
    </div>
  );
};

export default SuccessComponent;
