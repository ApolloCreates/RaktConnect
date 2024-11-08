const DonorDashboard = () => {
  return (
    <div className="main flex flex-col">
      <div className="left w-[20vw] h-screen bg-slate-500 z-10 flex flex-col justify-center">
        <div className="account flex flex-col justify-center">
          <h1 className="font-bold text-4xl mx-auto">PROFILE</h1>
          <div className="photo mt-20 mx-auto">
            <img
              src="src\assets\account-24.png"
              alt=""
              className="h-[18vh] w-[8vw]"
            />
          </div>
          <div className="details">

          </div>
        </div>
      </div>
      <div className="right">
        <div className="head w-screen h-[15vh] bg-red-500 fixed top-0"></div>
        <div className="details"></div>
      </div>
    </div>
  );
};

export default DonorDashboard;

// border border-black
