import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import NewNavbar from "./Components/NewNavbar"; // Adjust the path based on your project structure
import Homepage from "./Components/Homepage"; // Your Home component
// import Courses from "./pages/Courses"; 
import Aboutus from "./Components/Aboutus"; // Your About component
//  import Services from "./pages/Services"; 
import CommunityEvent from "./Components/CommunityEvent";
// import Contact from "./pages/Contact";
import Incubationpage from "./Components/Incubationpage" 
import LaunchingSoon from "./Components/Launchingsoon"


function App() {
  return (
    <>
      <div>
        {/* Navbar will be displayed on all pages */}
        <NewNavbar />
        
        {/* Define routes for your application */}
        <Routes>
          <Route path="/" element={<Homepage />} />
          {/* <Route path="/courses" element={<Courses />} /> */}
          <Route path="/about" element={<Aboutus />} />
          {/* <Route path="/services" element={<Services />}/> */}
          <Route path="/communityandevent" element={<CommunityEvent />} />
          <Route path="/incubation" element={<Incubationpage />} />
          <Route path="/Launchingsoon" element={<LaunchingSoon />} />

        </Routes>
      </div>
    </>
  );
}

export default App;
