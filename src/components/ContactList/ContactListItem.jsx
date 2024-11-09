import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactListItem.module.css';

const ContactListItem = ({ contact, deleteContact }) => {
  const handleDelete = () => {
    deleteContact(contact.id);
  };

  return (
    <li className={css.contactListItem}>
      <div className={css.contactAlign}> 
        <div className={css.contcon}>{contact.name}</div>
        <div className={css.contcon}>{contact.phone}</div>
      </div>
      <div className={css.btncon}>
      <button onClick={handleDelete}>Delete</button>
      </div>
    </li>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactListItem;