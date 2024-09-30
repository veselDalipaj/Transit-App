import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Map from './components/Map';

function App() {
  return (
    <Router>
      <div className="App">
        <h1> Transit App</h1>
        <Routes>
          <Route path="/" element={<Map/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
