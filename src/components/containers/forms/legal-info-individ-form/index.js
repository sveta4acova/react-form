import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import { Field as CustomField } from '@components/presentationals';
import validation from '@utils/validation';
import data from '../data.json';
import '../common-style.scss';

const fieldsValidate = [
  [validation.required, validation.onlyNumber, validation.exactLength(13)],
  [validation.required, validation.onlyNumber, validation.exactLength(11)],
  [validation.required, validation.onlyNumber, validation.exactLength(12)],
  [validation.required, validation.email],
];

const renderField = ({ input, type, meta: { touched, error, valid } }) => {
  const status = touched && error ? 'error' : valid && touched ? 'success' : '';
  return <CustomField status={status} input={{ ...input, type }} />;
};

let LegalInfoIndividFrom = () => {
  return (
    <form className="Form">
      <Container className="Form__container">
        {data.individual_organization.map((item, index) => (
          <Row className="Form__group" key={item.id}>
            <Col xs={4}>
              <p>
                <span>{item.name}</span>
                <sup>*</sup>
              </p>
            </Col>
            <Col xs={8}>
              <Field
                name={item.id}
                component={renderField}
                type="text"
                validate={fieldsValidate[index]}
              />
            </Col>
          </Row>
        ))}
      </Container>
    </form>
  );
};

LegalInfoIndividFrom = reduxForm({
  form: 'legalInfoIndivid',
})(LegalInfoIndividFrom);

export default connect(state => ({
  initialValues: state.registration.legalInfoIndivid || {},
}))(LegalInfoIndividFrom);
