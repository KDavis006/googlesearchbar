import { useState } from 'react';

const GoogleSearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    if (searchTerm.trim() !== '') {
      const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchTerm)}`;
      window.open(searchUrl, '_blank');
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', maxWidth: '400px', margin: 'auto' }}>
      <input
        type="text"
        placeholder="Search Google"
        value={searchTerm}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
        style={{ padding: '8px', marginRight: '8px', flex: '1' }}
      />
      <button
        onClick={handleSearch}
        style={{ padding: '8px', backgroundColor: '#4285F4', color: 'white', border: 'none', cursor: 'pointer' }}
      >
        Search
      </button>
    </div>
  );
};

export default GoogleSearchBar;