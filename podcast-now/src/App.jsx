import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Login from './components/login/index'
import Signup from './components/signup/index'
import Dashboard from './components/dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default App;