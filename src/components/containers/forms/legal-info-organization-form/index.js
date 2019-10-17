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
    name: 'organization',
    validate: [validation.required, validation.startText, validation.minLength(2)],
  },
  {
    name: 'subdivision',
    validate: [validation.required, validation.startText, validation.minLength(2)],
  },
  {
    name: 'position',
    validate: [validation.required, validation.startText, validation.minLength(2)],
  },
  {
    name: 'ogrn',
    validate: [validation.required, validation.onlyNumber, validation.exactLength(13)],
  },
  {
    name: 'snils',
    validate: [validation.required, validation.onlyNumber, validation.exactLength(11)],
  },
  {
    name: 'inn',
    validate: [validation.required, validation.onlyNumber, validation.exactLength(12)],
  },
  {
    name: 'email',
    validate: [validation.required, validation.email],
  },
];

const renderField = ({ input, type, meta: { touched, error, valid } }) => {
  const status = touched && error ? 'error' : valid && touched ? 'success' : '';
  return <CustomField status={status} input={{ ...input, type }} />;
};

let LegalInfoOrganizationForm = () => {
  return (
    <form className="Form">
      <Container className="Form__container">
        {data.organization.map((item, index) => (
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

LegalInfoOrganizationForm = reduxForm({
  form: 'legalInfoOrganization',
})(LegalInfoOrganizationForm);

export default connect(state => ({
  initialValues: state.registration.legalInfoOrganization || {},
}))(LegalInfoOrganizationForm);
