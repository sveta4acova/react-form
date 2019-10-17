import { types } from './actions.js';

const initState = {
  currentStep: 1,
  allSteps: 3,
  client: null,
  profile: null,
  legalInfoIndivid: null,
  legalInfoOrganization: null,
};

const registrationReducer = (state = initState, action) => {
  switch (action.type) {
    case types.UPDATE:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default registrationReducer;
