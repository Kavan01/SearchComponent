// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React, { useState } from 'react';

const SearchComponent = () => {
  // Sample list of items
  const items = [
    'Apple', 'Apricot', 'Avocado', 'Banana', 'Blackberry', 'Blueberry', 'Cantaloupe', 'Cherry',
  'Coconut', 'Cranberry', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Fig', 'Gooseberry',
  'Grape', 'Grapefruit', 'Guava', 'Honeydew', 'Jackfruit', 'Kiwi', 'Kumquat', 'Lemon', 'Lime',
  'Lychee', 'Mango', 'Mulberry', 'Nectarine', 'Orange', 'Papaya', 'Passionfruit', 'Peach', 'Pear',
  'Persimmon', 'Pineapple', 'Plum', 'Pomegranate', 'Raspberry', 'Strawberry', 'Tangerine',
  'Tomato', 'Watermelon'
  ];

  const [searchTerm, setSearchTerm] = useState('');

  // Filtered items based on the search term
  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
      <h3>Search Items</h3>
      {/* Input field for search */}
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search..."
        style={{ padding: '10px', width: '100%', marginBottom: '10px' }}
      />
      {/* Display filtered items */}
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchComponent;
