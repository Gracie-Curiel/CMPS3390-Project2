import { useNavigate } from "react-router-dom";

// On TripCard:
// 1. Destructured props for easier access
// 2. Used useNavigate to navigate to ViewDetails when View Details button clicked
const TripCard = (props) => {
  const { title, startDate, endDate, Id } = props;
  const navigate = useNavigate();

  // 3. Added default values for missing trip details
  let tripTitle = "Untitled Trip";
  let start = "No Start Date";
  let end = "No End Date";
 
  // trimming whitespace and checking for empty strings
  if (title && title.trim() !== "") tripTitle = title;
  if (startDate && startDate.trim() !== "") start = startDate;
  if (endDate && endDate.trim() !== "") end = endDate;

  // 4. Created a function 
  //    that handles viewing trip details
  function handleView() {
    localStorage.setItem("currentTrip", String(Id));
    navigate("/ViewDetails");
  }
  
  // 5. Created a function 
  //    that handles trip deletion
  function handleDelete() {
    if (window.confirm(`Delete "${tripTitle}"?`)) {
      removeTrip(Id);
      window.location.reload(); 
    }
  }

  // 6. Added a card view using Tailwindcss/DaisyUi
  return (
    <div className="card bg-white text-gray-900 shadow-md w-96 border border-gray-200">
      <div className="card-body">
        <h2 className="card-title">{tripTitle}</h2>
        <p>Start Date: {start} </p>
        <br />
        <p>End Date: {end} </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary" onClick={handleView}> View Details </button>
          <button className="btn btn-error" onClick={handleDelete}> Delete </button>
        </div>
      </div>
    </div>
  );
};

export default TripCard;


function removeTrip(tripId) {
  tripId = String(tripId);
  var allTrips = JSON.parse(localStorage["allTrips"]);
  allTrips = allTrips.filter((item) => item && String(item.Id) !== tripId);
  localStorage["allTrips"] = JSON.stringify(allTrips);
}
