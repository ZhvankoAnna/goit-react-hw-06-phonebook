import { ADD_CONTACT, REMOVE_CONTACT, FILTER_CONTACTS } from './types';

export const addContact = payload => {
  return { type: ADD_CONTACT, payload };
};

export const removeContact = payload => {
  return { type: REMOVE_CONTACT, payload };
};

export const filterContacts = payload => {
  return { type: FILTER_CONTACTS, payload };
};
