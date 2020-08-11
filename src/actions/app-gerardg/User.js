import {
  SET_USER,
  SET_USER_STACKS,
  SET_USER_PROJECTS,
  SET_USER_TOOLS,
  SET_USER_EXPERIENCE,
  SET_USER_LANGUAGES
} from "constants/app-gerardg/ActionTypes";

export const setUser = payload => {
  return {
    type: SET_USER,
    payload: payload
  };
};

export const setUserStacks = payload => {
  return {
    type: SET_USER_STACKS,
    payload: payload
  };
};

export const setUserProjects = payload => {
  return {
    type: SET_USER_PROJECTS,
    payload: payload
  };
};

export const setUserTools = payload => {
  return {
    type: SET_USER_TOOLS,
    payload: payload
  };
};

export const setUserExperience = payload => {
  return {
    type: SET_USER_EXPERIENCE,
    payload: payload
  };
};

export const setUserLanguages = payload => {
  return {
    type: SET_USER_LANGUAGES,
    payload: payload
  };
};
