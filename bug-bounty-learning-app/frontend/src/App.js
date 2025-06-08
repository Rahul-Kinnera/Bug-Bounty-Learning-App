
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import XSSChallenge from './pages/XSSChallenge';
import SQLiChallenge from './pages/SQLiChallenge';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | <Link to="/xss">XSS Challenge</Link> | <Link to="/sqli">SQLi Challenge</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/xss" element={<XSSChallenge />} />
        <Route path="/sqli" element={<SQLiChallenge />} />
      </Routes>
    </Router>
  );
}

export default App;
