import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialState = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: {
      reducer: (state, { payload }) => {
        state.push(payload);
      },
      prepare: data => {
        return {payload: {
          id: nanoid(5),
          ...data,
        }};
      },
    },
    removeContact: {
      reducer: (state, { payload }) => {
        return state.filter(({ id }) => id !== payload);
      },
    },
  },
});

export const {addContact, removeContact} = contactsSlice.actions;
export default contactsSlice.reducer;