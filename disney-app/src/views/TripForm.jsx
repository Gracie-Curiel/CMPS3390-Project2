import { Link, useNavigate } from "react-router-dom";

// On TripForm:
// 1. Added useNavigate to redirect user after saving trip
const TripForm = () => {
  const navigate = useNavigate();

  function handleSave() {
    createTrip();
    setTimeout(() => {
      navigate("/Dashboard");
    }, 200);
  }

  // 2. Added a form component using Tailwindcss/DaisyUi. 
  //    that takes user input for trip details
  return (
    <div data-theme="light" 
      className="min-h-screen text-gray-900 flex justify-center items-center bg-white">
      <fieldset className="border p-6 rounded shadow-md w-30 max-w-md bg-white">
        <legend className="text-lg font-medium mb-4">Enter Trip Details</legend>

        <label className="label">Title</label>
        <input id="title" type="text" className="input input-bordered w-full bg-white text-black" placeholder="Disney Crew"/>

        <label className="label mt-4">Start Date</label>
        <input id="startD" type="date" className="input input-bordered w-full bg-white text-black"/>

        <label className="label mt-4">End Date</label>
        <input id="endD" type="date"className="input input-bordered w-full bg-white text-black"/>

        <button onClick={handleSave} className="btn btn-primary btn-lg mt-6 w-full">Save Trip</button>

        <Link to="/Dashboard">
          <button className="btn btn-secondary btn-lg mt-4 w-full">Cancel</button>
        </Link>
      </fieldset>
    </div>
  );
};

export default TripForm;



//





//function to create a trip from user input, runs when save button hit
function createTrip() {

  if(document.getElementById('title').value == ''){
    alert('Enter a title');
    return;
  }
  if(document.getElementById('startD').value == ''){
    alert('Enter a start date');
    return;
  }
  if(document.getElementById('endD').value == ''){
    alert('Enter an end date');
    return;
  }



  //localStorage.clear();

  //create autoIncrement for Id if not exists
  if (!localStorage.getItem('autoInc')) {
    localStorage.setItem("autoInc", 0);
  }

  //creates allTrips array if not exist
  if (!localStorage.getItem('allTrips')) {
    var allTrips = new Array();
    localStorage["allTrips"] = JSON.stringify(allTrips);
  }

    
    let trip = {
      Id :localStorage.getItem('autoInc'),
      title: document.getElementById('title').value,
      startDate: document.getElementById('startD').value,
      endDate: document.getElementById('endD').value,
      rides: []
    };

    //add = autoinc from local
    let add = parseInt(localStorage.getItem('autoInc'));
    localStorage.setItem('currentTrip', add);

    //puts trip object in allTrips
    var allTrips = JSON.parse(localStorage["allTrips"]);
    allTrips[add] = trip;
    localStorage["allTrips"] = JSON.stringify(allTrips);


    //increments autoinc
    add++;
    localStorage.setItem("autoInc", add);

    



}







