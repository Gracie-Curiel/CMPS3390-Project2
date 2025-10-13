// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LandingPage from './views/LandingPage.jsx'
import Dashboard from './views/Dashboard.jsx'
import TripCard from './views/TripCard.jsx'
import Rides from './views/Rides.jsx'
import TripForm from './views/TripForm.jsx'
import ViewDetails from './views/ViewDetails.jsx'
import RideCard from './views/RideCard.jsx'
import './App.css'

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/TripCard" element={<TripCard />} />
      <Route path="/TripForm" element={<TripForm />} />
      <Route path="/ViewDetails" element={<ViewDetails />} />
      <Route path="/RideCard" element={<RideCard />} />
      <Route path="/Rides" element={<Rides />} />
    </Routes>

  </Router>
);


export default App
