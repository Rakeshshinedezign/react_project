import React, {useCallback, useState} from 'react';
import {TextField} from '@shopify/polaris';

export default function Phone() {
  const [value, setValue] = useState('');

  const handleChange = useCallback((newValue) => setValue(newValue), []);

  return  <TextField label="Phone No" value={value} onChange={handleChange} />  ;
}
