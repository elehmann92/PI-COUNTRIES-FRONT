import axios from 'axios'

import {
  CLEAN_COUNTRY,
  GET_ACTIVITIES,
  GET_ALL_COUNTRIES,
  GET_COUNTRIES_BY_NAME,
  GET_COUNTRY_BY_ID,
  MARK_ALL_CONTINENTS,
  RESET_SORT_AND_FILTERS,
  SET_ACTIVITY_FILTER,
  SET_CONTINENT_FILTER,
  SET_LOADING,
  SORT_COUNTRIES,
  UNMARK_ALL_CONTINENTS,
} from "./actionTypes";

export const getAllCountries = () => (dispatch) => {
  return axios("http://localhost:3001/countries")
    .then((response) =>
      dispatch({ type: GET_ALL_COUNTRIES, payload: response.data })
    );
};

export const getCountryById = (id) => (dispatch) => {
  return axios(`http://localhost:3001/countries/${id}`)
    .then((response) => dispatch({ type: GET_COUNTRY_BY_ID, payload: response.data }));
};

export const getCountriesByName = (name) => (dispatch) => {
  return axios(`http://localhost:3001/countries?name=${name}`)
    .then((response) =>
      dispatch({ type: GET_COUNTRIES_BY_NAME, payload: response.data })
    );
};

export const sortCountries = (criteria) => ({
  type: SORT_COUNTRIES,
  payload: criteria,
});

export const getActivities = () => (dispatch) => {
  return axios("http://localhost:3001/activities")
    .then((response) =>
      dispatch({ type: GET_ACTIVITIES, payload: response.data })
    );
};

export const setActivityFilter = (activity) => ({
  type: SET_ACTIVITY_FILTER,
  payload: activity,
});

export const setContinentFilter = (continentStatus) => ({
  type: SET_CONTINENT_FILTER,
  payload: continentStatus,
});

export const markAllContinents = () => ({
  type: MARK_ALL_CONTINENTS,
});
export const unmarkAllContinents = () => ({
  type: UNMARK_ALL_CONTINENTS,
});
export const resetSortAndFilters = () => ({
  type: RESET_SORT_AND_FILTERS,
});

export const cleanCountry = () => ({
  type: CLEAN_COUNTRY,
});

export const setLoading = () => ({
  type: SET_LOADING
})
