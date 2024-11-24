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

  const handleNameChange = (e) => setName(e.target.value);
  const handlePhoneChange = (e) => setPhone(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleFavoriteChange = (e) => setFavorite(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === '' || phone.trim() === '' || email.trim() === '') {
      alert('Please fill in all required fields.');
      return;
    }

    const nameExists = contacts.find(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );
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
          value={name}
          onChange={handleNameChange}
          required
          placeholder="Enter name"
          className={css.input}
        />
      </label>

      <label className={css.formField}>
        <p className={css.formLabel}>Email</p>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
          required
          placeholder="Enter email"
          className={css.input}
        />
      </label>

      <label className={css.formField}>
        <p className={css.formLabel}>Number</p>
        <input
          type="tel"
          name="number"
          value={phone}
          onChange={handlePhoneChange}
          required
          placeholder="Enter number"
          className={css.input}
        />
      </label>

      <label className={css.formField}>
        <p className={css.formLabel}>Favorite</p>
        <input
          type="text"
          name="favorite"
          value={favorite}
          onChange={handleFavoriteChange}
          required
          placeholder="Enter true or false"
          className={css.input}
        />
      </label>

      <button className={css.formButton} type="submit">
        Add Contact
      </button>
    </form>
  );
};