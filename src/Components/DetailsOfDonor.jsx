function DetailsOfDonor () {
  return (
    <div className="h-full w-[40vw] z-40 bg-gray-100 m-auto mt-14 p-10 rounded-2xl">
      <h1 className="text-center text-3xl font-extrabold pb-10">Details</h1>
      <div className="personal text-lg font-medium">
        <h1 className="text-2xl font-extrabold pb-5">Personal Information</h1>
        <h2>Name of Donor : Mohit </h2>
        <h2>Age : 20</h2>
        <h2>Gender : Male</h2>
        <h2>Email address : hdybfvy34@gmail.com</h2>
        <h2>Phone No. : 8799541125</h2>
        <h2>Address : Pilikothi,Mukhani,Haldwani,Uttarakhand</h2>
      </div>
      <div className="health text-lg font-medium">
        <h1 className="text-2xl font-extrabold py-5">
          Medical and Health Information
        </h1>
        <h2>Blood Type : B+</h2>
        <h2>Last Donation Date : 20-10-22</h2>
        <h2>Medical Conditions : None</h2>
      </div>
      <div className="apply text-lg font-medium">
        <h1 className="text-2xl font-extrabold py-5">
          Application for Blood Donation
        </h1>
        <h2>Applied for the date : 20-10-24 -- Sunday</h2>
      </div>
    </div>
  );
};

export default DetailsOfDonor;
