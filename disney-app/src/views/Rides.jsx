import { useNavigate } from 'react-router-dom';

const Rides = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navbar */}
      <nav className="navbar bg-clear flex justify-between items-center px-4 py-2">
        <button className="btn btn-neutral" onClick={() => navigate(-1)}>
          Go Back
        </button>
      </nav>

      {/* Ride Card */}
      <div className="flex justify-center mt-8">
        <div className="card bg-white w-96 shadow-md text-gray-900">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Ride"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-gray-900">Ride Title</h2>
            <p>
              This is placeholder text for the ride description. It provides
              details about the ride and what to expect.
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Add to Trip +</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rides;
