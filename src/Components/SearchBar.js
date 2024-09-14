import React, { useState } from 'react';
import './SearchBar.css';
import logo from '../assets/logo.png'; 

const SearchBar = ({ countries }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    
    const filtered = countries.filter((country) => {
      const countryName = country.country ? country.country.toLowerCase() : '';
      const capital = country.capital ? country.capital.toLowerCase() : '';
      return countryName.includes(term) || capital.includes(term);
    });
    setFilteredResults(filtered);
    setSelectedCountry(null); 
  };

  const handleCountryClick = (country) => {
    setSelectedCountry(country);
    setSearchTerm(''); 
    setFilteredResults([]); 
  };

  return (
    <div className="search-container">

      <img src={logo} alt="Logo" className="logo" />

      <input
        type="text"
        placeholder="Search by country or capital..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <ul className="results-list">
        {searchTerm.length > 0 && filteredResults.length > 0 ? (
          filteredResults.map((country, index) => (
            <li key={index} onClick={() => handleCountryClick(country)}>
              {country.country} - {country.capital}
            </li>
          ))
        ) : searchTerm.length > 0 ? (
          <li className="no-results">No results found for "{searchTerm}"</li>
        ) : null}
      </ul>

      {selectedCountry && (
        <div className="country-details">
          <h2>{selectedCountry.country}</h2>
          <p><strong>Capital:</strong> {selectedCountry.capital}</p>
          <p><strong>Population:</strong> {selectedCountry.population}</p>
          <p><strong>Official Language:</strong> {Array.isArray(selectedCountry.official_language) ? selectedCountry.official_language.join(', ') : selectedCountry.official_language}</p>
          <p><strong>Currency:</strong> {selectedCountry.currency}</p>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
