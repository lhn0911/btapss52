import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import B1 from './components/b1/B1';
import B2 from './components/b1/B2';


export default function App() {
  return (
    <Router>
      <div>
        B1:
        <B1></B1>
        <br />
        B2:
        <B2></B2>
        <br />

      </div>
    </Router>
  );
}
