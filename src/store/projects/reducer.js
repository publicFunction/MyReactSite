import initialState from './state';
import { LIST_PROJECTS } from './types';

const projectsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LIST_PROJECTS:
      return {
        ...state,
        projects: [...state.projects, action.payload]
      };
    default:
      return state;
  }
};
export default projectsReducer;
