import React, { useState } from 'react';

import './styles.scss';

const InputField = () => {
  const [value, setValue] = useState('');

  return (
    <input
      type="text"
      value={value}
      placeholder="Enter your query"
      onChange={event => setValue(event.target.value)}
    >
    </input>
  );
};

export default InputField;
