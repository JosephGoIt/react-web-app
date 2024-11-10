import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import css from './Filter.module.css';
import { setFilter } from '../../redux/tasks/filterSlice';
import { selectFilter } from '../../redux/tasks/selectors';

export const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(selectFilter);
  
    const onFilterChange = (e) => {
      dispatch(setFilter(e.target.value));
    };
  
    return (
      <div className={css.container}>
        <p>Find Contacts by Name</p>
        <input
          type="text"
          name="filter"
          placeholder="Search by name"
          value={filter}
          onChange={onFilterChange}
        />
      </div>
    );
  };