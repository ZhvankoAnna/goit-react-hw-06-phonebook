import { ADD_CONTACT, REMOVE_CONTACT, SET_FILTER } from './types';

const INITIAL_STATE = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};

const reducer = (state = INITIAL_STATE, {type, payload}) => {
  switch (type) {
    case ADD_CONTACT:
      const newContacts = [...state.contacts, payload];
      return { ...state, contacts: newContacts };
    case REMOVE_CONTACT:
      const updatedContacts = state.contacts.filter(
        ({ id }) => id !== payload
      );
      return { ...state, contacts: updatedContacts };
    case SET_FILTER:
      return { ...state, filter: payload };
    default:
      return state;
  }
};

export default reducer;
