import { Link } from "react-router-dom";
const TripCard = () => {
  return (
      <div className="card bg-white text-gray-900 shadow-md w-96 border border-gray-200">
        <div className="card-body">
          <h2 className="card-title text-gray-900">
            Trip Name 
          </h2>
          <p>
            Start Date
            <br />
            End Date
          </p>
          <div className="card-actions justify-end">
            {/*View trip details*/}
            <Link to="/ViewDetails">
            <button className="btn btn-primary">View Details</button>
            </Link>
            {/*Delete a Trip*/}
            <button className="btn btn-error">Delete</button>
          </div>
        </div>
      </div>
  );
};

export default TripCard;
