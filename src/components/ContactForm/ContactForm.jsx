import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/tasks/contactSlice';
import { selectContacts } from '../../redux/tasks/selectors';
import css from './ContactForm.module.css';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [favorite, setFavorite] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleFavoriteChange = (e) => {
    setFavorite(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === '' || phone.trim() === '' || email.trim() === '') {
      return;
    }

    const nameExists = contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase());
    if (nameExists) {
      alert(`${name} already exists in contacts!`);
      return;
    }

    dispatch(addContact({ name, phone, email, favorite }));
    setName('');
    setPhone('');
    setEmail('');
    setFavorite('');
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.formField}>
        <p className={css.formLabel}>Name</p>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Za-яА-Я]+(([' \-][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$"
          value={name}
          onChange={handleNameChange}
          required
          placeholder="Enter name"
        />
      </label>

      <label className={css.formField}>
        <p className={css.formLabel}>Email</p>
        <input
          type="email"
          name="email"
          pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
          value={email}
          onChange={handleEmailChange}
          required
          placeholder="Enter email"
        />
      </label>

      <label className={css.formField}>
        <p className={css.formLabel}>Number</p>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
          value={phone}
          onChange={handlePhoneChange}
          required
          placeholder="Enter number"
        />
      </label>

      <label className={css.formField}>
        <p className={css.formLabel}>Favorite</p>
        <input
          type="bolean"
          name="favorite"
          pattern="^[a-zA-Za-яА-Я]+(([' \-][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$"
          value={favorite}
          onChange={handleFavoriteChange}
          required
          placeholder="Enter true or false"
        />
      </label>

      <button className={css.formButton} type="submit">
        Add Contact
      </button>
    </form>
  );
};