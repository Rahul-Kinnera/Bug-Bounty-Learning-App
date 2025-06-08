
import React, { useState } from 'react';

function XSSChallenge() {
  const [input, setInput] = useState('');

  return (
    <div>
      <h1>XSS Challenge</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter some text"
      />
      <p>Output: {input}</p>
    </div>
  );
}

export default XSSChallenge;
