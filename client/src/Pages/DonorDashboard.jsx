import PropTypes from "prop-types";

function Bankdash({ onButtonClick }) {
  return (
    <div className="main flex">
      {/* Left Section: Profile */}
      <div className="left w-[20vw] h-screen text-white bg-[#a00606] z-10 flex justify-center">
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
              Name: <br /> Mohit
            </h2>
            <h2>
              Email Address: <br /> mohit123@gmail.com
            </h2>
            <h2>
              Phone Number: <br /> 8789964455
            </h2>
            <h2>
              Address: <br /> Thandi Sadak, Subhash Nagar, Haldwani, Uttarakhand
              263139
            </h2>
          </div>
        </div>
      </div>

      {/* Right Section: Dashboard */}
      <div className="right h-[100vh] w-[80vw]">
        <div className="head w-[80vw] h-[15vh] bg-[#a00606] top-0 flex fixed right-0 justify-around py-6">
          <div className="logo">
            <img
              src="public\RaktConnect-logo.png"
              alt=""
              style={{ height: "60px" }}
            />
          </div>
          <div className="name text-5xl font-bold text-white">RaktConnect</div>
          <div className="">
            <div className="filter">
              <img src="" alt="" />
            </div>
            <div className="sort">
              <img src="" alt="" />
            </div>
          </div>
        </div>

        {/* Dashboard Table */}
        <div className="dashboard w-[80vw] h-screen fixed top-[15vh] left-[20vw] p-10">
          <table className="w-[70vw]">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2">S.No.</th>
                <th className="border border-gray-300 px-4 py-2">
                  Name of Organisation
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
                <td className="border border-gray-300 px-4 py-2">Aakash Blood Bank</td>
                <td className="border border-gray-300 px-4 py-2">
                  <button onClick={onButtonClick}>Details</button>
                </td>
                <td className="border border-gray-300 px-auto py-2 text-center">
                  <button className="bg-cyan-600 text-white px-4 py-1 rounded mr-10">
                    Request
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
