import React, { useState } from 'react';

function App() {
  const [linkText, setLinkText] = useState('Visit Example');

  const handleClick = () => {
    setLinkText('Link Clicked!');
  };

  return (
    <div className="App">
      <h1>Hello, World!</h1>
      <h1>
        <a href="https://example.com" onClick={handleClick}>
          {linkText}
        </a>
      </h1>
    </div>
  );
}

export default App;
