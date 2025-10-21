// src/views/LandingPage.jsx
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center text-gray-900
                 bg-gradient-to-b from-[#c3e4fd] via-[#fde2f3] to-[#fffaf3]
                 bg-cover bg-center"
    >
      <h1 className="text-5xl md:text-6xl font-bold mb-8 text-primary drop-shadow-md text-center">
        Welcome to the Disney Trip Planner!
      </h1>

      <Link to="/Dashboard">
        <button
          className="btn btn-primary text-lg px-8 py-3 rounded-full shadow-md
                     hover:shadow-lg hover:brightness-110 transition-all duration-300"
        >
          ✨ Start Planning ✨
        </button>
      </Link>
    </div>
  );
}
