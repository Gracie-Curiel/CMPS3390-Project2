import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import RideCard from "./RideCard.jsx";

const ViewDetails = () => {
    const navigate = useNavigate();
    return (
        <div className="bg-white min-h-screen flex flex-col justify-center items-center text-gray-900">
            <nav className="navbar bg-clear flex justify-between items-center px-4 py-2">
                <button className="btn btn-neutral" onClick={() => navigate(-1)}>
                Go Back
                </button>
            </nav>
            {/*This should only show if list is empty*/}
            <p className="text-3xl mb-8">No rides planned yet</p>
            <Link to="/Rides">
                <button className="btn btn-primary btn-lg">Add Rides</button>
            </Link>

            {/* Ride Cards will show if list is not empty */}
            {/*
            <RideCard />
            */}
        </div>
    );
}
export default ViewDetails;