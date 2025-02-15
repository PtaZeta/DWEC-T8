import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import A1U8 from './pages/A1U8';
import A2U8 from './pages/A2U8';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>DWEC José Manuel Rodríguez Lorenzo</h1>
        <div className="botones">
          <Link to="/A1U8">
            <button>A1U8</button>
          </Link>
          <Link to="/A2U8">
            <button>A2U8</button>
          </Link>
        </div>
        
        <Routes>
          <Route path="/A1U8" element={<A1U8 />} />
          <Route path="/A2U8" element={<A2U8 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
