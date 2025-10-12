import { Link } from "react-router-dom";

const TripDetails = () => (
  <div data-theme="light" class="min-h-screen bg-white text-gray-900 p-8">
    <div class="flex justify-center">
      <fieldset class="fieldset bg-white border-gray-300 rounded-box w-full max-w-md border p-6 shadow-md">
        <legend class="fieldset-legend text-lg font-medium mb-4">Enter Trip Details</legend>

        <label class="label">Title</label>
        <input type="text" class="input input-bordered w-full" placeholder="Disney Crew" />

        <label class="label mt-4">Start Date</label>
        <input type="date" class="input input-bordered w-full" />

        <label class="label mt-4">End Date</label>
        <input type="date" class="input input-bordered w-full" />
        <button class="btn btn-primary btn-lg mt-6 w-full">Save Trip</button>
        <Link to="/Dashboard">
            <button class="btn btn-secondary btn-lg mt-4 w-full">Cancel</button>
        </Link>
      </fieldset>
    </div>
  </div>
);

export default TripDetails;
