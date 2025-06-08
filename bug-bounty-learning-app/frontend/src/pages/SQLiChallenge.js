
import React, { useState } from 'react';

function SQLiChallenge() {
  const [username, setUsername] = useState('');
  const [result, setResult] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new URLSearchParams();
    formData.append('username', username);

    const response = await fetch('http://127.0.0.1:5000/sqli', {
      method: 'POST',
      body: formData,
    });

    const text = await response.text();
    setResult(text);
  };

  return (
    <div>
      <h1>SQL Injection Challenge</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter username"
        />
        <button type="submit">Submit</button>
      </form>
      <div dangerouslySetInnerHTML={{ __html: result }} />
    </div>
  );
}

export default SQLiChallenge;
