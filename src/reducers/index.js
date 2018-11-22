import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import organisationsReducer from './../store/organisations/reducer';
import projectsReducer from './../store/projects/reducer';
import errorReducer from './../store/error/reducer';
import scOrganisationReducer from './../store/scorganisation/reducer';
import twitterReducer from './../store/twitter/reducer';
import twitchReducer from './../store/twitch/reducer';

const initialState = {};
const rootReducer = (state = initialState, action) => state;

const appReducers = combineReducers({
  routing: routerReducer,
  root: rootReducer,
  organisations: organisationsReducer,
  projects: projectsReducer,
  errors: errorReducer,
  scOrganisations: scOrganisationReducer,
  twitter: twitterReducer,
  twitch: twitchReducer,
});

export default appReducers;
