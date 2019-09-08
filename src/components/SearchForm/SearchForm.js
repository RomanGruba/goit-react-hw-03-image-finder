import React from 'react';
import PropTypes from 'prop-types';
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

SearchForm.propTypes = {
  value: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchForm;
