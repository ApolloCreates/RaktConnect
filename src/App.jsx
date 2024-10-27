import { useState } from "react";
import DetailsOfDonor from "./Components/DetailsOfDonor";
import Bankdash from "./Pages/BloodbankDashboard";

function App() {
  // State to track if DetailsOfDonor popup should be shown
  const [showDetailsPopup, setShowDetailsPopup] = useState(false);

  // Handler to toggle the details popup
  const toggleDetailsPopup = () => {
    setShowDetailsPopup(!showDetailsPopup);
  };

  return (
    <div className="App">
      <Bankdash onButtonClick={toggleDetailsPopup} />
      {showDetailsPopup && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
          <DetailsOfDonor onClose={toggleDetailsPopup} />
        </div>
      )}
    </div>
  );
}

export default App;
