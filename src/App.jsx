import { useState } from "react";
import Bankdashfordonor from "./Pages/Bankdashfordonor"
// import DetailsOfDonor from "./Components/DetailsOfDonor";

function App() {
  // State to track whether to show the component or not
  const [showComponent, setShowComponent] = useState(false);

  // Handler to change the state when the button is clicked
  const handleButtonClick = () => {
    setShowComponent(true); // Or toggle with setShowComponent(!showComponent)
  };


  return (
    <Bankdashfordonor onButtonClick={handleButtonClick}/>
  )
};

export default App
