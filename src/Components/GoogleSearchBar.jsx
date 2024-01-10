import { useState, useEffect } from 'react';

const GoogleSearchBar = () => {
 const [searchTerm, setSearchTerm] = useState('');
 const [searchHistory, setSearchHistory] = useState([]);
 const [filteredSearchHistory, setFilteredSearchHistory] = useState([]);

 useEffect(() => {
    const savedSearchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
    setSearchHistory(savedSearchHistory);
 }, []);

 useEffect(() => {
    localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
 }, [searchHistory]);

 const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    setFilteredSearchHistory(searchHistory.filter(search => search.toLowerCase().includes(event.target.value.toLowerCase())));
 };

 const handleSearch = () => {
    if (searchTerm.trim() !== '') {
      setSearchHistory([...searchHistory, searchTerm]);
      const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchTerm)}`;
      window.open(searchUrl, '_blank');
      setSearchTerm('');
      setFilteredSearchHistory([]);
    }
 };

 const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
 };

 return (
    <div className='container'>
      <input
        type="text"
        placeholder="Search Google"
        value={searchTerm}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
      />
      <button className='btn' onClick={handleSearch}>Search</button>
      {filteredSearchHistory.length > 0 && (
        <ul>
          {filteredSearchHistory.map((search, index) => (
            <li key={index}>{search}</li>
          ))}
        </ul>
      )}
    </div>
 );
};

export default GoogleSearchBar;