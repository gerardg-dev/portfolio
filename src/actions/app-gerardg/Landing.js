import {
  SHOW_LOADER,
  HIDE_LOADER,
  LANDING_DATA,
  LANDING_ERROR,
  LANDING_ERROR_CLEAR
} from "constants/app-gerardg/ActionTypes";

export const showLoader = () => {
  return {
    type: SHOW_LOADER
  };
};

export const hideLoader = () => {
  return {
    type: HIDE_LOADER
  };
};

export const setLandingData = data => {
  return {
    type: LANDING_DATA,
    payload: data
  };
};

export const setLandingError = error => {
  return {
    type: LANDING_ERROR,
    payload: error
  };
};

export const clearLandingError = () => {
  return {
    type: LANDING_ERROR_CLEAR
  };
};
