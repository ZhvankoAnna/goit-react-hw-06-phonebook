import { ADD_CONTACT, REMOVE_CONTACT } from './types';

const INITIAL_STATE = {
  contacts: [],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      const newContacts = [...state.contacts, action.payloader];
      return { ...state, contacts: newContacts };
      case REMOVE_CONTACT:
        const updatedContacts = state.contacts.filter(({id})=>id!== action.payloader);
        return {...state, contacts: updatedContacts};
    default:
      return state;
  }
};

export default reducer;
