import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { Icon } from '@components/presentationals';
import './style.scss';

const Field = ({ status, input }) => {
  const error = status === 'error';
  const valid = status === 'success';

  return (
    <div className={cn({ Field: true, Field_error: error, Field_valid: valid })}>
      <input {...input} />
      {error && <Icon name="cross" />}
      {valid && <Icon name="check" width={12} height={12} />}
    </div>
  );
};

Field.propTypes = {
  input: PropTypes.object,
  status: PropTypes.string,
};

export default Field;
