import React, { Fragment } from 'react';

import { InputField, Button } from 'Component';

import './styles.scss';

const SearchPanel = () => {
  return (
    <Fragment>
      <div className="input-field">
        <InputField />
      </div>
      <div className="button">
        <Button/>
      </div>
    </Fragment>
  );
};

export default SearchPanel;
