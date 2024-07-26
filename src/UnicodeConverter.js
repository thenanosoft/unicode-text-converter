import React, { useState } from 'react';
import styles from './styles';
import { transform, getFonts } from 'convert-unicode-fonts';

const fonts = getFonts();

const UnicodeConverter = () => {
  const [input, setInput] = useState('');
  const [toastMessage, setToastMessage] = useState('');

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setToastMessage('Copied to clipboard!');
    setTimeout(() => setToastMessage(''), 3000); // Hide after 3 seconds
  };

  return (
    <div className="container">
      <header>
        <h1>Unicode Text Converter</h1>
      </header>
      <main>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your text here..."
        />
        {styles.map((style, index) => (
          <div key={index} className="style-container">
            <h3>{style.title}</h3>
            <p>{transform(input, fonts[style.font])}</p>
            <button onClick={() => handleCopy(transform(input, fonts[style.font]))}>Copy</button>
          </div>
        ))}
        {toastMessage && <div className="toast">{toastMessage}</div>}
      </main>
      <footer>
        <p>Made by <a href="https://thenanosoft.com" target="_blank" rel="noopener noreferrer">Nanosoft</a></p>
        <p>Developer: <a href="https://linkedin.com/in/farhanellahi" target="_blank" rel="noopener noreferrer">Farhan Ellahi</a></p>
      </footer>
    </div>
  );
};

export default UnicodeConverter;
