import react from "react";
// import Coursesthree from "./Components/Coursesthree";

// import Incubation from './Components/Incubation'
//  import Courses from "./Components/Courses"
// import Coursesfifth from './Components/Coursesfifth';
// import Courseseight from './Components/Courseseight';
// import Coursesthree from "./Components/Coursesthree"
// import Development from "./Components/Development"
// import Developmentone from "./Components/Developmentone"
//  import Developmenttwo from "./Components/Developmenttwo"
//  import Developmentthree from "./Components/Developmentthree"
// import Developmentfour from "./Components/Developmentfour"
// import Aiml from "./Components/Aiml"
// import Aimlone from "./Components/Aimlone"
// import Aimltwo from "./Components/Aimltwo"
// import Aimlthree from "./Components/Aimlthree"
// import Blockchain from "./Components/Blockchain"
// import Blockchainone from "./Components/Blockchainone"
// import Blockchaintwo from "./Components/Blockchaintwo"
// import Blockchainthree from "./Components/Blockchainthree"
// import Blockchainfour from "./Components/Blockchainfour"
// import Bcentrepreneurship from "./Components/Bcentrepreneurship"
// import Bcentpone from "./Components/Bcentpone"
// import Bcentptwo from "./Components/Bcentptwo"
// import Bcentpthree from "./Components/Bcentpthree"
// import Bcdigital from "./Components/Bcdigital"
// import Bcdigitalone from "./Components/Bcdigitalone"
// import Bcdigitaltwo from "./Components/Bcdigitaltwo"
// import Bcdigitalthree from "./Components/Bcdigitalthree"
// import Bcdigitalfour from "./Components/Bcdigitalfour"
// import Bcfinance from "./Components/Bcfinance"
// import Bcfinanceone from "./Components/Bcfinanceone"

// import Bcfinancetwo from "./Components/Bcfinancetwo"
// import Bcfinancethree from "./Components/Bcfinancethree"

// import Bcproject from "./Components/Bcproject";
// import Bcprojectone from "./Components/Bcprojectone";
// import Bcprojecttwo from "./Components/Bcprojecttwo";

// import Bchuman from "./Components/Bchuman"
// import Bchumanone from "./Components/Bchumanone"
// import Bchumantwo from "./Components/Bchumantwo"

// import Bcpersonal from "./Components/Bcpersonal"
// import Bcpersonalone from "./Components/Bcpersonalone"
// import Bcpersonaltwo from "./Components/Bcpersonaltwo"

// import Home from "./Components/Home"
// import Navbar from "./Components/Navbar";
// import Community from "./Components/Community";


import React from "react";
import {  Routes, Route, useLocation } from "react-router-dom";
import Home from "./Components/Home";
import Courses from "./Components/Courses";
import Incubation from "./Components/Incubation";
import Community from "./Components/Community";
import Navbar from "./Components/Navbar";


      {/* <Incubation/> */}
      {/* <Courses/> */}
      {/* <Coursesthree /> */}
      {/* <Coursesfifth/> */}
      {/* <Courseseight/> */}
      {/* <Development/> */}
      {/* <Developmentone/> */}
      {/* <Developmenttwo/> */}
      {/* <Developmentthree/> */}
      {/* <Developmentfour/>  */}
      {/* <Aiml/> */}
      {/* <Aimlone/> */}
      {/* <Aimltwo/> */}
      {/* <Aimlthree/> */}
      {/* <Blockchain/> */}
      {/* <Blockchainone/> */}
      {/* <Blockchaintwo/> */}
      {/* <Blockchainthree /> */}
      {/* <Blockchainfour/> */}
      {/* <Bcentrepreneurship/> */}
      {/* <Bcentpone/> */}
      {/* <Bcentptwo/> */}
      {/* <Bcentpthree/> */}
      {/* <Bcdigital/> */}
      {/* <Bcdigitalone/> */}
      {/* <Bcdigitaltwo/> */}
      {/* <Bcdigitalthree/> */}
      {/* <Bcdigitalfour/> */}
      {/* <Bcfinance/> */}
      {/* <Bcfinanceone/> */}
      {/* <Bcfinancetwo/> */}
      {/* <Bcfinancethree/> */}
      {/* <Bcproject/> */}
      {/* <Bcprojectone/> */}
      {/* <Bcprojecttwo/> */}
      {/* <Bchuman/> */}
      {/* <Bchumanone/> */}
      {/* <Bchumantwo/> */}
      {/* <Bcpersonal/> */}
      {/* <Bcpersonalone/> */}
      {/* <Bcpersonaltwo/> */}
      {/* <Navbar/> */}
      {/* <Home/> */}
      {/* <Community/> */}
      function App() {
        const location = useLocation(); // Get the current route
      
        // Conditionally render Navbar only on the Home page
        const showNavbar = location.pathname === "/";
      
        return (
          <>
            {showNavbar && <Navbar />} {/* Render Navbar only if on the Home page */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/incubation" element={<Incubation />} />
              <Route path="/community" element={<Community />} />
              {/* Add other routes as needed */}
            </Routes>
          </>
        );
      }
      
      
  


export default App;
