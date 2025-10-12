const Rides = () => (
<body>
  <div className="min-h-screen bg-white text-gray-900">
    {/* Clear Navbar to seperate the text from the cards*/}
    <nav className="navbar bg-clear">
        <p className="text-3xl font-semibold ml-4 text-gray-900">Rides</p>
    </nav>
    {/*Wil need to fetch not only an image of the ride but also the ride details and */}
    <div className="flex justify-center mt-8">
      <div className="card bg-white w-96 shadow-md text-gray-900">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
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
</body>
);

export default Rides;
