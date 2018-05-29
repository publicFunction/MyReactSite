import initialState from './state';
import { LIST_ORGANISATIONS, LIST_ORGANISATIONS_WITH_PROJECTS } from './types';

const organisationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LIST_ORGANISATIONS:
      return Object.assign(state.organisations, action.payload.response);
    case LIST_ORGANISATIONS_WITH_PROJECTS:
      return Object.assign(
        state.organisationsProjects,
        action.payload.response
      );
    default:
      return state;
  }
};
export default organisationsReducer;
