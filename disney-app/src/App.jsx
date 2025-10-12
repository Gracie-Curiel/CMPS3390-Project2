// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LandingPage from './views/LandingPage.jsx'
import Dashboard from './views/Dashboard.jsx'
import Rides from './views/Rides.jsx'
import TripDetails from './views/TripDetails.jsx'
import './App.css'

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/TripDetails" element={<TripDetails />} />
      <Route path="/Rides" element={<Rides />} />
    </Routes>

  </Router>
);


export default App
