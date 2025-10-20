import { Link } from "react-router-dom";
import TripCard from "./TripCard.jsx";

const Dashboard = () => (
  <div
    className="min-h-screen flex flex-col text-gray-900 
               bg-gradient-to-br from-[#e1f4ff] via-[#fff2f7] to-[#fff8e5]
               bg-cover bg-center"
  >
    {/* This section should disappear once a trip has been added */}
    <div className="flex flex-col flex-grow justify-center items-center px-4">
      <p className="text-3xl md:text-4xl mb-8 text-center">
        Create a new trip to get started!
      </p>

      {/* A form will pop up when the "Create a New Trip" button is triggered */}
      <div className="flex flex-col gap-6 text-center">
        <Link to="/TripForm">
          <button
            className="btn btn-primary btn-lg px-8 py-3 rounded-full shadow-md
                       hover:shadow-lg hover:brightness-110 transition-all duration-300"
          >
            ✨ Create a New Trip ✨
          </button>
        </Link>
      </div>

      {/* A trip card will show once a trip has been added */}
      {/* 
      <div className="mt-8">
        <TripCard />
      </div>
      */}
    </div>
  </div>
);

export default Dashboard;

// removes trip based on tripId
function removeTrip(tripId) {
  tripId = String(tripId);
  var allTrips = JSON.parse(localStorage["allTrips"]);
  allTrips = allTrips.filter((item) => item.Id !== tripId);
  localStorage["allTrips"] = JSON.stringify(allTrips);
}


