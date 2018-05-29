import { LIST_ORGANISATIONS, LIST_ORGANISATIONS_WITH_PROJECTS } from './types';

export const listOrganisations = organisatons => ({
  type: LIST_ORGANISATIONS,
  payload: organisatons
});

export const listOrganisationsWithProjects = organisatons => ({
  type: LIST_ORGANISATIONS_WITH_PROJECTS,
  payload: organisatons
});
