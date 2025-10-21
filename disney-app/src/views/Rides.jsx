import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import RideCard from "./RideCard.jsx";

/* image name resolver */
const rideImageFiles = [
  "AncientSanctum.jpg",
  "AnimationAcademy.jpg",
  "AvengersHeadquarters.jpg",  
  "TheBakeryTour.jpg",
  "CitizensOfBuenaVistaStreet.jpg",
  "TheDisneyGallery.jpg",
  "Donald'sDuckPond.jpg",
  "FlagRetreatCeremony.jpg",
  "GrizzlyRiverRun.jpg",
  "HalloweenScreams.jpg",
  "InsideOutEmotionalWhirlwind.jpg",
  "JambalayaJazz.jpg",
  "MainStreetCinema.jpg",
  "MainStreetPiano.jpg",
  "MainStreetVehicles.jpg",
  "MeetTheResidentsOfRadiatorSprings.jpg",
  "TapestryOfHappiness.jpg",
  "TheAmazingSpider-Man.jpg",
  "TianasBayouAdventure.jpg",  
  "TurtleTalkWithCrush.jpg",
];

const norm = (s) => String(s).toLowerCase().replace(/[^a-z0-9]/g, "");
const fileIndex = Object.fromEntries(
  rideImageFiles.map((f) => [norm(f.replace(/\.[^.]+$/, "")), f])
);
function getRideImageUrl(ride) {
  const key = norm(ride?.name || "");
  if (fileIndex[key]) return `/rides/${fileIndex[key]}`;
  const hit = Object.keys(fileIndex).find((k) => k.startsWith(key) || key.startsWith(k));
  return hit ? `/rides/${fileIndex[hit]}` : "/rides/_placeholder.jpg";
}

const Rides = () => {
  const navigate = useNavigate();
  const [displayRides, setDisplayRides] = useState([]);

  useEffect(() => {
    async function loadRides() {
      await modData();
      setDisplayRides(rides);
    }
    loadRides();
  }, []);

  function handleAddRide(rideId) {
    addRide(rideId);
    alert("Ride added to trip!");
  }

  return (
    <div
      className="min-h-screen text-gray-900
                 bg-gradient-to-br from-[#fdf3ff] via-[#e6f6ff] to-[#fff8e5]
                 bg-cover bg-center"
    >
      <nav className="navbar bg-transparent flex justify-between items-center px-4 py-2">
        <button
          className="btn btn-neutral rounded-full px-6 shadow-md
                     hover:shadow-lg hover:brightness-110 transition-all duration-300"
          onClick={() => navigate(-1)}
        >
          Go Back
        </button>
      </nav>

      <h1 className="text-3xl font-bold text-center mt-6">
        Available Attractions & Shows
      </h1>

      {displayRides.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8 px-4">
          {displayRides.map((r) => (
            <RideCard
              key={r.id}
              name={r.name}
              entityType={r.entityType}
              imageUrl={getRideImageUrl(r)}
              onAdd={() => handleAddRide(r.id)}
            />
          ))}
        </div>
      )}

      {displayRides.length === 0 && (
        <p className="text-center mt-10 text-xl">Loading rides...</p>
      )}
    </div>
  );
};

export default Rides;



//created an array of array called rides
//hold 0-29
// has id, name, ,entityType as show or attraction, and img-url


//Fetches live data for Disney Adventure Park and stores in advenPark
let advenPark;

const getAdvenData = async () => {
  let data;
  try {
    const response = await fetch("https://api.themeparks.wiki/v1/entity/832fcd51-ea19-4e77-85c7-75d5843b127c/live");
    data = await response.json();
    //if error with API call fills array with outdated data from advenPark.json
  } catch (err) {
    const response = await fetch("advenPark.json");
    data = await response.json();
  }
  advenPark = data.liveData;
  return data;
};

(async () => {
  await getAdvenData();
})();





//Fetches live data for Disney Park and stores in disPark
let disPark;

const getDisneyData = async () => {
  let data;
  try {
    const response = await fetch("https://api.themeparks.wiki/v1/entity/7340550b-c14d-4def-80bb-acdb51d49a66/live");
    data = await response.json();
    //if error with API call fills array with outdated data from disPark.json
  } catch (err) {
    const response = await fetch("disPark.json");
    data = await response.json();
  }
  disPark = data.liveData;
  return data;
};

(async () => {
  await getDisneyData();
})();



//will eventually hold all rides
let rides = [];

//This function modifies the data inside the ride to exclude resturants and closed rides
async function modData() {
  await getAdvenData();
  await getDisneyData();

  //sorts array by entity type, and updates array to only include attractions and shows, essentially removing resturants
  advenPark = advenPark.filter(obj => obj.entityType.includes("SHOW") || obj.entityType.includes("ATTRACTION"));
  disPark = disPark.filter(obj => obj.entityType.includes("SHOW") || obj.entityType.includes("ATTRACTION"));

  //same thing again but this time only accept values where status = "OPERATING" to make sure we don't show closed rides
  disPark = disPark.filter(obj => obj.status.includes("OPERATING"));
  advenPark = advenPark.filter(obj => obj.status.includes("OPERATING"));

  //drops irrelvent data, so it should only have id, name, and entity type
  disPark = disPark.map(({ parkId, externalId, status, lastUpdated, showtimes, operatingHours, ...keepAttrs }) => keepAttrs);
  advenPark = advenPark.map(({ parkId, externalId, status, lastUpdated, showtimes, operatingHours, ...keepAttrs }) => keepAttrs);



  //grab first 15 elements from both arrays, put them in rides
  rides = disPark.slice(0, 10);
  rides = rides.concat(advenPark.slice(0, 10));

  //gets an image file for each of the rides
  //for (let i = 0; i < rides.length; i++) {
  //  getImg(i);
  //}



  console.log(rides);
}

modData();


//This function gets an image and attaches it to 
const getImg = async (i) => {
  //const apiKey = "AIzaSyBGi4LV9F510MjAC_EhSzrKJ8HyHFtx69U";
  const apiKey = 0;
  const cx = "637e15be4af524606";
  const query = rides[i].name;
  const img = `https://www.googleapis.com/customsearch/v1?q=${encodeURIComponent(query)}&cx=${cx}&key=${apiKey}&searchType=image&num=1`;
  const response = await fetch(img);
  const data = await response.json();
  const imgURL = data.items[0].link;
  rides[i].imgURL = imgURL;

};


//desiredTrip should be the attraction/show id, adds the ride to localstorage on currentTrip
function addRide(rideId) {
  let tripId = parseInt(localStorage.getItem('currentTrip'));
  var allTrips = JSON.parse(localStorage["allTrips"]);
  console.log(localStorage.getItem("currentTrip"));
  console.log(allTrips);
  //trip is equal to the trip that matches the last set currentTrip ID
  let trip = allTrips.find(item => item.Id == tripId);
  //adds ride based off rideId
  //API CALL GIVES id NOT Id !!! YOU WILL FORGET!!!
  let data = rides.find(item => item.id == rideId);
  trip.rides.push(data);
  //throws it back in local
  localStorage["allTrips"] = JSON.stringify(allTrips);
}



//same function as above but pops instead of pushes
function removeRide(rideId) {
  let tripId = parseInt(localStorage.getItem('currentTrip'));
  var allTrips = JSON.parse(localStorage["allTrips"]);
  console.log(localStorage.getItem("currentTrip"));
  console.log(allTrips);
  //trip is equal to the trip that matches the last set currentTrip ID
  let trip = allTrips.find(item => item.Id == tripId);
  //uses filter instead of find to remove
  //API CALL GIVES id NOT Id !!! YOU WILL FORGET!!!
  trip.rides = trip.rides.filter(item => item.id !== rideId);
  //throws it back in local
  localStorage["allTrips"] = JSON.stringify(allTrips);
}