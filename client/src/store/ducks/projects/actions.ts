import createActionCreator from '../../util/createActionCreator';
import { CreateProjectPayload } from '../../../types/project/payloads';
import Project from '../../../types/project';

export const CREATE_PROJECT = 'PROJECT_CREATE_PROJECT';
export const ADD_PROJECT = 'PROJECT_ADD_PROJECT';
export const GET_MY_PROJECTS = 'PROJECT_GET_MY_PROJECTS';
export const GET_PROJECT_BY_ID = 'PROJECT_GET_PROJECT_BY_ID';
export const SET_PROJECTS = 'PROJECT_SET_PROJECTS';
export const SET_ERROR = 'PROJECT_SET_ERROR';
export const SET_OPENED_PROJECT = 'PROJECT_SET_OPENED_PROJECT';
export const RESET = 'PROJECT_RESET';

export const createProject = createActionCreator<typeof CREATE_PROJECT, CreateProjectPayload>(
  CREATE_PROJECT
);

export const addProject = createActionCreator<typeof ADD_PROJECT, Project>(ADD_PROJECT);

export const getMyProjects = createActionCreator<typeof GET_MY_PROJECTS, void>(GET_MY_PROJECTS);

export const getProjectById = createActionCreator<typeof GET_PROJECT_BY_ID, number>(
  GET_PROJECT_BY_ID
);

export const setProjects = createActionCreator<typeof SET_PROJECTS, Project[]>(SET_PROJECTS);

export const setOpenedProject = createActionCreator<typeof SET_OPENED_PROJECT, Project>(
  SET_OPENED_PROJECT
);

export const setError = createActionCreator<typeof SET_ERROR, string | null>(SET_ERROR);

export const reset = createActionCreator<typeof RESET, void>(RESET);
