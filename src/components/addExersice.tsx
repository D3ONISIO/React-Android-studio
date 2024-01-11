// AddExercise.js
import React, { useState } from 'react';
import SuccessComponent from './SuccessComponent';

interface Input {
  name: string;
  value: string;
}

const Validate: React.FC<{ inputs: Input[]; onValidationSuccess: () => void }> = ({
  inputs,
  onValidationSuccess,
}) => {
  const validateInputs = () => {
    // Перевірка, чи всі інпути мають значення
    const allInputsFilled = inputs.every((input) => input.value.trim() !== '');

    if (allInputsFilled) {
      // Перевірка, чи години є правильними
      const startTime = new Date(`2000-01-01T${inputs[1].value}`);
      const endTime = new Date(`2000-01-01T${inputs[2].value}`);

      if (!isNaN(startTime.getTime()) && !isNaN(endTime.getTime()) && startTime < endTime) {
        // Всі перевірки пройдені, викликаємо колбек для успішної валідації
        onValidationSuccess();
      } else {
        alert('Неправильний формат годин або порядок годин');
      }
    } else {
      alert('Будь ласка, заповніть всі поля');
    }
  }

  return (
    <input
      style={{ margin: '5px', ...buttonStyles }}
      type="button"
      value="Dodaj"
      onClick={validateInputs}
    />
  );
};

const AddExercise = () => {
  const [inputs, setInputs] = useState([
    { name: 'text', value: '' },
    { name: 'startTime', value: '' },
    { name: 'endTime', value: '' },
  ]);

  const [formattedValues, setFormattedValues] = useState<string[]>([]);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (index: number, value: string) => {
    const newInputs = [...inputs];
    newInputs[index].value = value;
    setInputs(newInputs);
    setShowSuccess(false);
  };

  const handleValidationSuccess = () => {
    const newFormattedValues = [...formattedValues];
    newFormattedValues.push(formatInputValues());
    setFormattedValues(newFormattedValues);
    setShowSuccess(true);
    // Додайте код для обробки успішної валідації (наприклад, відправлення форми)
  };

  const formatInputValues = () => {
    return inputs.map((input, index) => (
      index === 0 ? `(${input.value}` : ` ${input.value}`
    )).join('');
  };

  return (
    <div style={divStyles}>
      {inputs.map((input, index) => (
        <input
          key={index}
          style={inputStyles}
          type={input.name === 'text' ? 'text' : 'time'}
          value={input.value}
          onChange={(e) => handleInputChange(index, e.target.value)}
        />
      ))}
      <Validate inputs={inputs} onValidationSuccess={handleValidationSuccess} />
      {showSuccess && <SuccessComponent formattedValues={formattedValues} />}
    </div>
  );
};

const inputStyles = {
  margin: '5px',
};

const buttonStyles = {
  backgroundColor: 'blue',
  color: 'white',
  padding: '10px 15px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

const divStyles = {
  backgroundColor: '#f0f0f0',
  padding: '20px',
  borderRadius: '10px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  margin: '20px',
};

export default AddExercise;
