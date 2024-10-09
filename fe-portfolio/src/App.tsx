import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Todo from './projects/Todo/Todo';

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
            </ul>
          </nav>

          <Routes>
            <Route path="/todo" element={<Todo />} />
          </Routes>
        </div>
      </Router>

    </div>
  );
}

export default App;
