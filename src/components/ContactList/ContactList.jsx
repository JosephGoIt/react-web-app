import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/tasks/contactSlice';
import { selectContacts, selectFilter } from '../../redux/tasks/selectors';
import ContactListItem from './ContactListItem';

export const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);
    const filter = useSelector(selectFilter);
  
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  
    return (
      <>
        {/* {isLoading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>} */}
        <ul>
          {filteredContacts.map(contact => (
            <ContactListItem key={contact.id} contact={contact} deleteContact={() => dispatch(deleteContact(contact.id))} />
          ))}
        </ul>
      </>
    );
  };
  
  