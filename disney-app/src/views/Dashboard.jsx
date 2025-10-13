import { Link } from "react-router-dom";
import TripCard from "./TripCard.jsx";

const Dashboard = () => (
  <div className="bg-white min-h-screen flex flex-col text-gray-900">
    {/* This section should disapear once a trip has been added*/}
    <div className="flex flex-col flex-grow justify-center items-center">
      <p className="text-3xl mb-8">Create a new trip to get started!</p>
      <div className="flex flex-col gap-6 text-center">
        <Link to="/TripForm">
          <button className="btn btn-primary btn-lg">Create a New Trip</button>
        </Link>
      </div>
      {/*A trip card will show once a trip has been added*/}
      {/*
      <div className="mt-8">
        <TripCard />
      </div>
      */}
    </div>
  </div>
);

export default Dashboard;
