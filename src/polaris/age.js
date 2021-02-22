import React, {useCallback, useState} from 'react';
import {TextField} from '@shopify/polaris';

export default function Age() {
  const [value, setValue] = useState('');

  const handleChange = useCallback((newValue) => setValue(newValue), []);

  return  <TextField label="Age" value={value} onChange={handleChange} />  ;
}
