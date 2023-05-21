import React, { useState, useCallback } from 'react';

export const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

const handleChange = e => {
  setQuery(e.currentTarget.value.toLowerCase());
};

  const handleSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      alert('Enter something');
      return;
    }
    onSubmit(query);
    setQuery('');
  };

  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={handleSubmit}>
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="searchQuery"
          onChange={handleChange}
          value={query}
        />
      </form>
    </header>
  );
};