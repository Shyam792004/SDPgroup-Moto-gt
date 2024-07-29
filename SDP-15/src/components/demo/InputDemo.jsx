import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '@/components/ui/input';

export function InputDemo() {
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && inputValue.toLowerCase() === 'tata') {
      navigate('/target');
    }
  };

  return (
    <Input
      type="text"
      placeholder="What is your car model?"
      value={inputValue}
      onChange={handleChange}
      onKeyPress={handleKeyPress}
      className="w-full"
    />
  );
}
