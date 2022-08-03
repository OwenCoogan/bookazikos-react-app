import React from 'react';
import './style/App.css';
import Sidebar from './components/Sidebar/Sidebar'
import {
  BrowserRouter as Router,

} from "react-router-dom";
import AuthProvider from './router/provider/AuthProvider';

function App() {
  return (
    <Router>
      <div className="h-screen w-screen flex bg-gray-200" >
        <Sidebar/>
        <AuthProvider />
      </div>
    </Router>
  );
}

export default App;
