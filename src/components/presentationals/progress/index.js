import React from 'react';
import PropTypes from 'prop-types';
import { Progress as ProgressStrap } from 'reactstrap';

const Progress = ({ data: { current, all } }) => (
  <div>
    <h3>{`Шаг ${current} из ${all}`}</h3>
    <ProgressStrap value={current} max={all} color="secondary" />
  </div>
);

Progress.propTypes = {
  data: PropTypes.shape({
    current: PropTypes.number,
    all: PropTypes.number,
  }).isRequired,
};

export default Progress;
