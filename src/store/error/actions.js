import { LAST_ERROR } from './types';

export const lastError = error => ({
  type: LAST_ERROR,
  payload: error
});
