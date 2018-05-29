import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import organisationsReducer from './../store/organisations/reducer';
import projectsReducer from './../store/projects/reducer';
import errorReducer from './../store/error/reducer';

const initialState = {};
const rootReducer = (state = initialState, action) => state;

const appReducers = combineReducers({
  routing: routerReducer,
  root: rootReducer,
  organisations: organisationsReducer,
  projects: projectsReducer,
  errors: errorReducer
});

export default appReducers;
