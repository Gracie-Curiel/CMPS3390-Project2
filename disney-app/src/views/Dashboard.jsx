import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TripCard from "./TripCard.jsx";

// On this Dashboard:
// 1. Added useState to hold current trips
// 2. Added useEffect to fetch trips 
//    from localStorage
const Dashboard = () => {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("allTrips");

    if (data) {
      let parsed = JSON.parse(data);
      parsed = parsed.filter((t) => t && t.Id !== undefined);
      localStorage.setItem("allTrips", JSON.stringify(parsed));
      setTrips(parsed);
    } else {
      localStorage.setItem("allTrips", JSON.stringify([]));
      setTrips([]);
    }
  }, []);

  // 3. Created a function that handles trip deletion 
  //    function created by Nathaniel
  function handleTripDelete(id) {
    const updated = trips.filter((t) => String(t.Id) !== String(id));
    setTrips(updated);
    localStorage.setItem("allTrips", JSON.stringify(updated));
  }

  // 4. Added a view that displays a 
  //    prompt for the user to create a trip if no trips have been added yet.
  return (
    <div className="bg-white min-h-screen text-gray-900 p-6 text-center">
      <h1 className="text-4xl font-bold mb-6">Your Disney Trips</h1>
      
      {/*Added a button that takes the user to the Trip Form where they will input information*/}
      <Link to="/TripForm">
        <button className="btn btn-primary btn-lg mb-8">Add A Trip</button>
      </Link>
      
      {(() => {
        if (trips.length === 0) {
          return <p className="text-2xl">No trips yet. Create one to get started!</p>;
        }
      })()}

      {/*Called map() to display trip information added by the user*/}
      {(() => {
        if (trips.length > 0) {
          return (
            <div className="flex flex-wrap justify-center gap-6">
              {trips.map((trip) => {
                if (!trip) return null;
                return (
                  <TripCard
                    key={trip.Id}
                    Id={trip.Id}
                    title={trip.title}
                    startDate={trip.startDate}
                    endDate={trip.endDate}
                    onDelete={handleTripDelete}
                  />
                );
              })}
            </div>
          );
        }
      })()}
    </div>
  );
};

export default Dashboard;
// Moved the removeRide function to ViewDetails.jsx