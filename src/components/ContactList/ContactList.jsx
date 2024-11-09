import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ContactListItem from './ContactListItem';
import { selectContacts, selectFilter} from '../../redux/tasks/selectors';
import { deleteContact } from '../../redux/tasks/slicelice';

export const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);
    const filter = useSelector(selectFilter);
    // const isLoading = useSelector(selectIsLoading);
    // const error = useSelector(selectError);
  
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
  
  