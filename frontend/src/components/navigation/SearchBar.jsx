import { useState, useEffect, useRef } from 'react';
import './SearchBar.css';
import { RiSearchLine } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';

function SearchBar() {
  const [isBorderAdded, setIsBorderAdded] = useState(false);
  const searchBarRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== '') {
      navigate(`/search/${searchTerm}`);
      setSearchTerm('');
    }
  };

  const updateSearch = (e) => {
    setSearchTerm(e.target.value);
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
          onChange={updateSearch}
        />
        <button type='submit' id='search-button'>
          <RiSearchLine className='search-icon' />
        </button>
      </form>
    </div>
  );
}

export default SearchBar;