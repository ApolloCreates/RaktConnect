import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="nav flex justify-around bg-[#a00606]">
        <div className="logo p-4">
          <img
            src="public\RaktConnect-logo.png"
            alt=""
            style={{ height: "60px"}}
          />
        </div>
        <div className="navbutt p-1">
          <ul>
            <nav className="flex text-2xl p-4 gap-20 text-white font-normal">
              <NavLink
                className={(e) => {
                  return e.isActive ? "bg-red-700 rounded-xl" : "";
                }}
                to="/"
              >
                <li className="p-2">Home</li>
              </NavLink>
              <NavLink
                className={(e) => {
                  return e.isActive ? "bg-red-700 rounded-xl" : "";
                }}
                to="/about"
              >
                <li className="p-2">About</li>
              </NavLink>
              <NavLink
                className={(e) => {
                  return e.isActive ? "bg-red-700 rounded-xl" : "";
                }}
                to="/signin"
              >
                <li className="p-2">SignIn</li>
              </NavLink>
              <NavLink
                className={(e) => {
                  return e.isActive ? "bg-red-700 rounded-xl" : "";
                }}
                to="/signup"
              >
                <li className="p-2">SignUp</li>
              </NavLink>
            </nav>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
