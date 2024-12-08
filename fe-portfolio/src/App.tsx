import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Todo from './projects/Todo/Todo';
import NestedCheckboxes from './projects/NestedCheckboxes/NestedCheckboxes';
import Carousel from './projects/Carousel/Carousel';

function App() {
  return (
    <div>
      <Router>
        <div className="App">
          <nav>
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
            </ul>
          </nav>

          <Routes>
            <Route path="/todo" element={<Todo />} />
            <Route path="/nestedCheckboxes" element={<NestedCheckboxes />} />
            <Route path="/carousel" element={<Carousel />} />
          </Routes>
        </div>
      </Router>

    </div>
  );
}

export default App;
