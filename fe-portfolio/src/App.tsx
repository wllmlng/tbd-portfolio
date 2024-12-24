import React, { useState } from 'react'; // Import useState
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Todo from './projects/Todo/Todo';
import NestedCheckboxes from './projects/NestedCheckboxes/NestedCheckboxes';
import Carousel from './projects/Carousel/Carousel';
import ApiHealthDashboard from './projects/ApiHealthDashboard/ApiHealthDashboard';
function App() {
  const [isNavVisible, setIsNavVisible] = useState(false); // State for nav visibility
  const toggleNav = () => {
    setIsNavVisible(!isNavVisible); // Toggle nav visibility
  };

  return (
    <div>
      <Router>
        <div className="App">
          <button onClick={toggleNav} className="nav-toggle">
            {isNavVisible ? 'Close' : 'Open'} Menu
          </button>
          <nav className={`nav ${isNavVisible ? 'slide-in' : 'slide-out'}`}>
            <ul>
              <li>
                <Link to="/todo">Todo</Link>
              </li>
              <li>
                <Link to="/nestedCheckboxes">NestedCheckboxes</Link>
              </li>
              <li>
                <Link to="/carousel">Carousel</Link>
              </li>
              <li>
                <Link to="/apiHealthDashboard">ApiHealthDashboard</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/todo" element={<Todo />} />
            <Route path="/nestedCheckboxes" element={<NestedCheckboxes />} />
            <Route path="/carousel" element={<Carousel />} />
            <Route path="/apiHealthDashboard" element={<ApiHealthDashboard />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
