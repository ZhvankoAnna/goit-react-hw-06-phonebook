import { useSelector, useDispatch } from 'react-redux';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import css from 'components/app.module.css';
import { addContact, removeContact } from 'redux/contacts-slice';
import { setFilter } from 'redux/filter-slice';


const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(store => store.contacts);
  const filter = useSelector(store => store.filter);
  const filteredContacts = useSelector(store => {
    const { contacts, filter } = store;
    if (!filter) {
      return contacts;
    }
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  });

  const getFormData = data => {
    const newName = data.name;
    const isDublicate = contacts.find(item => item.name === newName);
    if (isDublicate) {
      return Notify.failure(`${newName} is already in contacts`);
    }
    dispatch(addContact(data));
  };

  const onDeleteContact = id => {
    const action = removeContact(id);
    dispatch(action);
  };

  const handleFilterChange = ({ target }) => {
    dispatch(setFilter(target.value));
  };

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm onSubmit={getFormData} />

      <h2 className={css.title}>Contacts</h2>
      <Filter value={filter} onChange={handleFilterChange} />
      {contacts.length !== 0 && (
        <ContactList arr={filteredContacts} onDeleteContact={onDeleteContact} />
      )}
    </div>
  );
};

export default App;
