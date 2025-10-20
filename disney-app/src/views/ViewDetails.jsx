import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import RideCard from "./RideCard.jsx";

// On ViewDetails:
// 1. Added useNavigate to go back to Dashboard if no trip selected
// 2. Used useState to hold current trip details
const ViewDetails = () => {
  const navigate = useNavigate();
  const [trip, setTrip] = useState(null);

  // 3. Used useEffect to load trip details from localStorage
  useEffect(() => {
    const id = localStorage.getItem("currentTrip");
    if (!id) {
      alert("No trip selected");
      navigate("/Dashboard");
      return;
    }
    
    const data = localStorage.getItem("allTrips");
    if (data) {
      const trips = JSON.parse(data);
      const found = trips.find((t) => t && String(t.Id) === String(id));
      if (found) {
        setTrip(found);
      }
    }
  }, [navigate]);

  // 4. Created a function to remove a ride from the trip
  function removeRide(rideName) {
    if (!trip) return;
    const updatedRides = trip.rides.filter((r) => r.name !== rideName);
    trip.rides = updatedRides;

    // Used ... to create a new object to trigger re-render
    setTrip({ ...trip });
    const allTrips = JSON.parse(localStorage["allTrips"]);
    const updatedTrips = allTrips.map(function (t) {
    if (String(t.Id) === String(trip.Id)) {
        return trip;
    }else{
        return t;
    }
    
    });
    localStorage["allTrips"] = JSON.stringify(updatedTrips);
  }
 
  // 5. Added a view to display trip details and rides
  return (
    <div className="bg-white min-h-screen text-gray-900 p-6 text-center">
      <button className="btn btn-neutral mb-6" onClick={() => navigate(-1)}>Go Back</button>

      {trip && (
        <div>
          <h1 className="text-4xl font-bold mb-2">{trip.title}</h1>
          <p>{trip.startDate} → {trip.endDate}</p>
        </div>
      )}
      
      {trip && trip.rides.length === 0 && (
        <div className="mt-10">
          <p className="text-2xl mb-4">No rides planned yet</p>
          <Link to="/Rides">
            <button className="btn btn-primary btn-lg">Add Rides</button>
          </Link>
        </div>
      )}

      {trip && trip.rides.length > 0 && (
        <div className="mt-10 flex flex-wrap justify-center gap-6">
          {trip.rides.map((ride, i) => (
            <RideCard
              key={i}
              name={ride.name}
              entityType={ride.entityType}
              onRemove={removeRide}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ViewDetails;
