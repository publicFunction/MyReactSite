import {
  SET_SC_ORGANISATION,
  GET_SC_ORGANISATION,
  SET_SC_PERSON,
  GET_SC_PERSON
} from './types';

export const setSCOrganisation = organisation => ({
  type: SET_SC_ORGANISATION,
  payload: organisation
});

export const setSCPerson = person => ({
  type: SET_SC_PERSON,
  payload: person
});

export const getSCOrganisation = () => ({
  type: GET_SC_ORGANISATION
});

export const getSCPerson = () => ({
  type: GET_SC_PERSON
});
