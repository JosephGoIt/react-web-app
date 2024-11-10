import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactListItem.module.css';

const ContactListItem = ({ contact, deleteContact }) => {
  return (
    <li className={css.contactListItem}>
      <div className={css.contactAlign}>
        <span>{contact.name}</span>
        <span>{contact.email}</span>
        <span>{contact.phone}</span>
        <span>{contact.favorite}</span>
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
    phone: PropTypes.string.isRequired,
  }).isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactListItem;