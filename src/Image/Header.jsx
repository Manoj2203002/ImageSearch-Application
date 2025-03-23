import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

const Header = ({ setSearch, setPage }) => {
  const inputRef = useRef();
  const navigate = useNavigate(); // Initialize navigate function

  const handleSearch = () => {
    if (inputRef.current && inputRef.current.value.trim() !== "") {
      setSearch(inputRef.current.value);
      setPage(1);
      inputRef.current.value = "";
      navigate('/'); // Redirect to Home page
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <header className="header">
      <Link to='/'>
        <div className="logo">
          <h1>Mk Images</h1>
        </div>
      </Link>
      <div className="search-container">
        <input 
          type="text" 
          placeholder="Search images..." 
          className="search-input" 
          ref={inputRef} 
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    </header>
  );
};

export default Header;
