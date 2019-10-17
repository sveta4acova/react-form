import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { clientTypes } from '@utils/constants';
import './style.scss';

let ClientForm = props => {
  const { handleSubmit } = props;

  return (
    <form className="ClientForm" onSubmit={handleSubmit}>
      <h4 className="ClientForm__caption">Для кого Вы хотите получить сертификат:</h4>
      <div className="ClientForm__group">
        <Field
          name="ownership"
          component="input"
          type="radio"
          value={clientTypes.legalEntity}
          id="legalEntity"
        />
        <label htmlFor="legalEntity">{clientTypes.legalEntity}</label>
      </div>
      <div className="ClientForm__group">
        <Field
          name="ownership"
          component="input"
          type="radio"
          value="Индивидуальный предприниматель"
          id="entrepreneur"
        />
        <label htmlFor="entrepreneur">{clientTypes.entrepreneur}</label>
      </div>
    </form>
  );
};

ClientForm = reduxForm({
  form: 'client',
})(ClientForm);

export default connect(state => ({
  initialValues: state.registration.client || {},
}))(ClientForm);
