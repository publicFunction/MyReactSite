import initialState from './state';
import * as SC from './types';

const scOrganisationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SC.SET_SC_ORGANISATION:
      return {
        ...state,
        organisation: action.payload.response.data
      };
    case SC.GET_SC_ORGANISATION:
      return state.organisation;
    case SC.SET_SC_PERSON:
      return {
        ...state,
        person: action.payload.response.data
      };
    case SC.GET_SC_PERSON:
      return state.person;
    default:
      return state;
  }
};
export default scOrganisationReducer;
