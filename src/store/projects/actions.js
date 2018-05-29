import { LIST_PROJECTS } from './types';

export const listProjects = projects => ({
  type: LIST_PROJECTS,
  payload: projects
});
