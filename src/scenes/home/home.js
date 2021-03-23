import React, { Fragment } from 'react';

import { SearchPanel, ResultPanel } from 'Container';

import './styles.scss';

const Home = () => {
  return (
    <Fragment>
      <SearchPanel/>
      <div className="result-panel">
        <ResultPanel/>
      </div>
    </Fragment>
  );
};

export default Home;
