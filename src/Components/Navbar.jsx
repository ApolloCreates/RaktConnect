const Navbar = () => {
  return (
    <>
      <div className="nav flex justify-around bg-red-600">
        <div className="logo mx-20">logo</div>
        <div className="navbutt">
          <ul className="flex gap-32 text-2xl p-6 text-white font-normal">
            <li>Home</li>
            <li>About Us</li>
            <li>Find Blood</li>
            <li>Register Now</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
