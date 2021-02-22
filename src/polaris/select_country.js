import React, {useCallback, useState} from 'react';
import {Select} from '@shopify/polaris';

export default function SelectCountry() {
  const [selected, setSelected] = useState('today');

  const handleSelectChange = useCallback((value) => setSelected(value), []);

  const options = [
    {label: 'India', value: 'India'},
    {label: 'Usa', value: 'Usa'},
    {label: 'Candana', value: 'Candana'},
    {label: '2', value: '2'},
    {label: '3', value: '3'},
    {label: '4', value: '4'},
    
  ];

  return (
    <Select
      label="Select Couuntry"
      options={options}
      onChange={handleSelectChange}
      value={selected}
    />
  );
}