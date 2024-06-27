import React, { useState, useEffect, useRef } from 'react';
import './SearchBar.css';
import { RiSearchLine } from 'react-icons/ri';

function SearchBar() {
  const [isBorderAdded, setIsBorderAdded] = useState(false);
  const searchBarRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleClick = (e) => {
    if (searchBarRef.current && searchBarRef.current.contains(e.target)) {
      setIsBorderAdded(true);
    } else {
      setIsBorderAdded(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div 
      id='nav-search-div' 
      ref={searchBarRef} 
      className={isBorderAdded ? 'nav-bar-search-form-border' : ''}
    >
      <form id='nav-bar-search-form' onSubmit={handleSubmit}>
        <input 
          type='text' 
          id='search-area' 
          placeholder="Search Amazonia"
        />
        <button type='submit' id='search-button'>
          <RiSearchLine className='search-icon' />
        </button>
      </form>
    </div>
  );
}

export default SearchBar;