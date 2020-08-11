import {
  SHOW_LOADER,
  HIDE_LOADER,
  LANDING_DATA,
  LANDING_ERROR,
  LANDING_ERROR_CLEAR,
  SET_USER,
  SET_USER_STACKS,
  SET_USER_PROJECTS,
  SET_USER_TOOLS,
  SET_USER_EXPERIENCE,
  SET_USER_LANGUAGES
} from "constants/app-gerardg/ActionTypes";

import dbModels from "../../db-models/app-gerardg";

const INIT_STATE = {
  isLoading: false,
  error: null,
  //
  user: dbModels.user,
  stacks: null,
  projects: null,
  tools: null,
  experience: null,
  languages: null
};

const landing = (state = INIT_STATE, action) => {
  switch (action.type) {
    case SHOW_LOADER:
      return {
        ...state,
        isLoading: true
      };
    case HIDE_LOADER:
      return {
        ...state,
        isLoading: false
      };
    case LANDING_DATA:
      return {
        ...state,
        user: action.payload.user,
        stacks: action.payload.stacks,
        projects: action.payload.projects,
        tools: action.payload.tools,
        experience: action.payload.experience,
        languages: action.payload.languages
      };
    case LANDING_ERROR:
      return {
        ...state,
        error: action.payload
      };
    case LANDING_ERROR_CLEAR:
      return {
        ...state,
        error: null
      };
    case SET_USER:
      return {
        ...state,
        user: action.payload
      };
    case SET_USER_STACKS:
      return {
        ...state,
        stacks: action.payload
      };
    case SET_USER_PROJECTS:
      return {
        ...state,
        projects: action.payload
      };
    case SET_USER_TOOLS:
      return {
        ...state,
        tools: action.payload
      };
    case SET_USER_EXPERIENCE:
      return {
        ...state,
        experience: action.payload
      };
    case SET_USER_LANGUAGES:
      return {
        ...state,
        languages: action.payload
      };
    default:
      return state;
  }
};

export default landing;
