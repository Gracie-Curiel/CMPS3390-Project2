import { Link } from "react-router-dom";

const TripForm = () => (
  <div data-theme="light" class="min-h-screen bg-white text-gray-900 p-8">
    <div class="flex justify-center mt-50">
      <fieldset class="fieldset bg-white border-gray-300 rounded-box w-full max-w-md border p-6 shadow-md">
        <legend class="fieldset-legend text-lg font-medium mb-4">Enter Trip Details</legend>

        <label class="label">Title</label>
        <input id = 'title' type="text" class="input input-bordered w-full" placeholder="Disney Crew" />

        <label class="label mt-4">Start Date</label>
        <input id = 'startD' type="date" class="input input-bordered w-full" />

        <label class="label mt-4">End Date</label>
        <input id = 'endD'type="date" class="input input-bordered w-full" />
        <button onClick = {createTrip} class="btn btn-primary btn-lg mt-6 w-full">Save Trip</button>
        <Link to="/Dashboard">
          <button class="btn btn-secondary btn-lg mt-4 w-full">Cancel</button>
        </Link>
      </fieldset>
    </div>
  </div>
);

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

    //puts trip object in allTrips
    var allTrips = JSON.parse(localStorage["allTrips"]);
    allTrips[add] = trip;
    localStorage["allTrips"] = JSON.stringify(allTrips);


    //increments autoinc
    add++;
    localStorage.setItem("autoInc", add);

    



}







