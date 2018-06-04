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
    default:
      return state;
  }
};
export default scOrganisationReducer;
