import React from 'react';
import styles from './SearchForm.module.css';

const SearchForm = ({ value, onSubmit, onChange }) => {
  return (
    <form className={styles.searchForm} onSubmit={onSubmit}>
      <input
        type="text"
        autoComplete="off"
        placeholder="Search images..."
        value={value === '' ? '' : value}
        onChange={onChange}
      />
    </form>
  );
};

export default SearchForm;
