// import { useState } from "react";
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import DetailsOfDonor from "./Components/DetailsOfDonor";
// import Navbar from "./Components/Navbar";
// import Home from "./Pages/Home";
// import AboutUs from "./Pages/About";
// import SignInForm from "./Components/SignIn";
// import DonorSignUpForm from "./Components/SignUp";
// import Bankdash from './Pages/BloodbankDashboard';

import DonorDashboard from "./Pages/DonorDashboard";


function App() {

  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <><Navbar /><Home/></>
  //   },
  //   {
  //     path: "/about",
  //     element: <><Navbar /><AboutUs /></>
  //   },
  //   {
  //     path: "/signin",
  //     element: <><Navbar /><SignInForm/></>
  //   },
  //   {
  //     path: "/signup",
  //     element: <><Navbar /><DonorSignUpForm/></>
  //   },
  //   {
  //     path: "/dashboard/bloodbank",
  //     element: <><Bankdash/></>
  //   },
  // ])

  // // State to track if DetailsOfDonor popup should be shown
  // const [showDetailsPopup, setShowDetailsPopup] = useState(false);

  // // Handler to toggle the details popup
  // const toggleDetailsPopup = () => {
  //   setShowDetailsPopup(!showDetailsPopup);
  // };

  return (
    // <RouterProvider router={router} />
    <DonorDashboard/>
  );
}

export default App;
