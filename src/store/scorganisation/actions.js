import { SET_SC_ORGANISATION, GET_SC_ORGANISATION } from './types';

export const setSCOrganisation = organisation => ({
  type: SET_SC_ORGANISATION,
  payload: organisation
});

export const getSCOrganisation = () => ({
  type: GET_SC_ORGANISATION
});
