import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { registration as registrationActions } from '@store/actions';
import { formsByStep, clientTypes } from '@utils/constants';
import { ClientForm, ProfileForm, LegalInfoIndividForm, LegalInfoOrganizationForm } from '../forms';
import Content from './content';

class Registration extends React.Component {
  static propTypes = {
    registration: PropTypes.object,
    form: PropTypes.object,
  };

  static defaultProps = {
    disabled: false,
  };

  defineDisabled = () => {
    const {
      form: { client, profile, legalInfoIndivid, legalInfoOrganization },
      registration: { currentStep },
    } = this.props;

    return (
      (currentStep === 1 && !Object.keys((client || {}).values || {}).length) ||
      (currentStep === 2 && !!Object.keys((profile || {}).syncErrors || {}).length) ||
      (currentStep === 3 &&
        !!(
          Object.keys((legalInfoIndivid || {}).syncErrors || {}).length ||
          Object.keys((legalInfoOrganization || {}).syncErrors || {}).length
        ))
    );
  };

  renderBody = () => {
    const {
      registration: { currentStep, client },
    } = this.props;

    switch (currentStep) {
      case 1:
        return <ClientForm />;
      case 2:
        return <ProfileForm />;
      case 3:
        if (client.ownership === clientTypes.entrepreneur) {
          return <LegalInfoIndividForm />;
        } else {
          return <LegalInfoOrganizationForm />;
        }
    }
  };

  onContinue = () => {
    const {
      dispatch,
      form,
      registration: { currentStep, client, profile, legalInfoIndivid, legalInfoOrganization },
    } = this.props;
    const lastStep = currentStep === 3;
    const currentForm =
      formsByStep[
        lastStep && client.ownership === clientTypes.legalEntity ? currentStep + 1 : currentStep
      ];
    let updatedData = {
      currentStep: lastStep ? currentStep : currentStep + 1,
      [currentForm]: form[currentForm].values,
    };

    if (
      currentStep === 1 &&
      client &&
      client.ownership !== form.client.values.ownership &&
      (profile || legalInfoIndivid || legalInfoOrganization)
    ) {
      updatedData.profile = null;
      updatedData.legalInfoIndivid = null;
      updatedData.legalInfoOrganization = null;
    }

    dispatch(registrationActions.update(updatedData));
  };

  onBack = () => {
    const {
      dispatch,
      registration: { currentStep },
    } = this.props;

    dispatch(registrationActions.update({ currentStep: currentStep - 1 }));
  };

  render() {
    const {
      registration: { currentStep, allSteps },
    } = this.props;

    return (
      <Content
        body={this.renderBody()}
        progress={{ current: currentStep, all: allSteps }}
        disabled={this.defineDisabled()}
        onContinue={this.onContinue}
        onBack={this.onBack}
      />
    );
  }
}

export default connect(state => ({
  form: state.form,
  registration: state.registration,
}))(Registration);
