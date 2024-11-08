import PropTypes from "prop-types";

function Bankdash({ onButtonClick }) {
  return (
    <div className="main flex">
      {/* Left Section: Profile */}
      <div className="left w-[20vw] h-screen border text-white bg-gray-600 border-black z-10 flex justify-center">
        <div className="account flex flex-col justify-center">
          <h1 className="font-bold text-4xl mx-auto mt-5">PROFILE</h1>
          <div className="photo mt-10 mx-auto">
            <img
              src="src/assets/account-24.png"
              alt="Profile"
              className="h-[11vh] w-[5vw]"
            />
          </div>
          <div className="details mx-auto mt-5 text-base font-normal p-5 grid gap-3">
            <h2>
              Name of Organisation: <br /> Haldwani City Blood Centre
            </h2>
            <h2>
              Registration Number: <br /> 12666644
            </h2>
            <h2>
              License Number: <br /> 342342524
            </h2>
            <h2>
              Email Address: <br /> bloodbank212@gmail.com
            </h2>
            <h2>
              Phone Number: <br /> 8789964455
            </h2>
            <h2>
              Address: <br /> 6GGJ+8F4, Thandi Sadak, Subhash Nagar, Haldwani,
              Uttarakhand 263139
            </h2>
          </div>
          <button className="logout text-black font-bold bg-white mx-24 px-1 py-2 rounded-xl">
            LogOut
          </button>
        </div>
      </div>

      {/* Right Section: Dashboard */}
      <div className="right h-[100vh] w-[80vw]">
        <div className="head w-[80vw] h-[15vh] bg-red-500 top-0 flex fixed right-0 justify-around py-6">
          <div className="logo p-4">
            <img
              src="public\RaktConnect-logo.png"
              alt=""
              style={{ height: "60px" }}
            />
          </div>
          <div className="name text-5xl font-bold text-white">RaktConnect</div>
          <div className="options p-2">
            <select
              name=""
              id=""
              className="p-2 font-medium text-base rounded-md"
            >
              <option value="donor">Donor</option>
              <option value="hospital">Hospital</option>
            </select>
          </div>
        </div>

        {/* Dashboard Table */}
        <div className="dashboard w-[80vw] h-screen fixed top-[15vh] left-[20vw] p-10">
          <table className="w-[70vw]">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2">S.No.</th>
                <th className="border border-gray-300 px-4 py-2">
                  Name of Donor
                </th>
                <th className="border border-gray-300 px-4 py-2">Details</th>
                <th className="border border-gray-300 px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  1
                </td>
                <td className="border border-gray-300 px-4 py-2">Rohan</td>
                <td className="border border-gray-300 px-4 py-2">
                  <button onClick={onButtonClick}>Details</button>
                </td>
                <td className="border border-gray-300 px-auto py-2 text-center">
                  <button className="bg-green-500 text-white px-4 py-1 rounded mr-10">
                    Accept
                  </button>
                  <button className="bg-red-500 text-white px-4 py-1 rounded">
                    Reject
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

Bankdash.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
};

export default Bankdash;
