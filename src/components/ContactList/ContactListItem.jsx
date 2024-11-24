import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactListItem.module.css';

const ContactListItem = ({ contact, deleteContact }) => {
  console.log('Contact in ContactListItem:', contact); // Log the contact prop
  return (
    <li className={css.contactListItem}>
      <div className={css.contactAlign}>
        <span>{contact.name}</span>
        <span>{contact.email}</span>
        <span>{contact.phone}</span>
        <span>{contact.favorite?.toString()}</span>
      </div>
      <button className={css.deleteButton} onClick={deleteContact}>
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    favorite: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
  }).isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactListItem;
