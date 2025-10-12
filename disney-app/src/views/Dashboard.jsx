import { Link } from "react-router-dom";

const Dashboard = () => (
  <div className="bg-white min-h-screen flex flex-col justify-center items-center text-gray-900">
    <p className="text-3xl mb-8">Create a new trip to get started!</p>

    <div className="flex flex-col gap-6 text-center">
      <Link to="/TripDetails">
        <button className="btn btn-primary btn-lg">Create a New Trip</button>
      </Link>
    {/*Button should not show up until a trip has been added*/}
      <Link to="/Rides">
        <button className="btn btn-secondary btn-lg">Add Rides</button>
      </Link>
    </div>
  </div>
);

export default Dashboard;
