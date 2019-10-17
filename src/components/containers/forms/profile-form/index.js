import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import { Field as CustomField } from '@components/presentationals';
import validation from '@utils/validation';
import data from '../data.json';
import '../common-style.scss';

const fields = [
  {
    name: 'commonName',
    validate: [validation.required, validation.startText, validation.minLength(2)],
  },
  {
    name: 'surname',
    validate: [validation.required, validation.startText, validation.minLength(2)],
  },
  {
    name: 'name',
    validate: [validation.required, validation.startText, validation.minLength(2)],
  },
  {
    name: 'country',
    validate: [validation.required, validation.startText, validation.minLength(2)],
  },
  {
    name: 'area',
    validate: [validation.required, validation.startText, validation.minLength(2)],
  },
  {
    name: 'city',
    validate: [validation.required, validation.startText, validation.minLength(2)],
  },
  {
    name: 'address',
    validate: [validation.required, validation.startText, validation.minLength(2)],
  },
];

const renderField = ({ input, type, meta: { touched, error, valid } }) => {
  const status = touched && error ? 'error' : valid && touched ? 'success' : '';
  return <CustomField status={status} input={{ ...input, type }} />;
};

let ProfileForm = () => {
  return (
    <form className="Form">
      <Container className="Form__container">
        {data.personal.map((item, index) => (
          <Row className="Form__group" key={item.id}>
            <Col xs={4}>
              <p>
                <span>{item.name}</span>
                <sup>*</sup>
              </p>
            </Col>
            <Col xs={8}>
              <Field
                name={fields[index].name}
                component={renderField}
                type="text"
                validate={fields[index].validate}
              />
            </Col>
          </Row>
        ))}
      </Container>
    </form>
  );
};

ProfileForm = reduxForm({
  form: 'profile',
})(ProfileForm);

export default connect(state => ({
  initialValues: state.registration.profile || {},
}))(ProfileForm);
