import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
const LandingPage = () => 
<body>
    <div class="bg-white p-6" style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <p class="text-5xl mb-8">Welcome to the Disney Trip Planner!</p>
        <Link to="/Dashboard">    
            <button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">Start Planning</button>
        </Link>  
    </div>
</body>
export default LandingPage;