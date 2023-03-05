import { ADD_CONTACT, REMOVE_CONTACT, SET_FILTER } from './types';

export const addContact = payload => {
  return { type: ADD_CONTACT, payload };
};

export const removeContact = payload => {
  return { type: REMOVE_CONTACT, payload };
};

export const setFilter = payload => {
  return { type: SET_FILTER, payload };
};
