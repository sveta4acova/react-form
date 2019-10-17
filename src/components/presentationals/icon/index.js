import React from 'react';
import PropTypes from 'prop-types';
import images from './images';

const Icon = ({ name, width = 10, height = 10 }) => (
  <img src={images[name]} width={width} height={height} />
);

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

Icon.defaultTypes = {
  width: 10,
  height: 10,
};

export default Icon;
