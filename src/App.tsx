import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar'
import {
  BrowserRouter as Router,
  Route,
  Routes

} from "react-router-dom";
import Dashboard from './screens/Dashboard';

function App() {
  return (
    <Router>
      <div className="h-screen w-screen flex bg-gray-200" >
        <Sidebar/>
        <Routes>
          <Route
            path="/dashboard"
            element={<Dashboard/>}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
