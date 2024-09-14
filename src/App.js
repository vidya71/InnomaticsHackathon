import React from 'react';
import './App.css';
import SearchBar from './Components/SearchBar';
import countries from './data/countries.json';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <h3>Fast Finder Search Bar</h3>
      <SearchBar countries={countries} />
    </div>
  );
}

export default App;
