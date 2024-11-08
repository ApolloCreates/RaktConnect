const AboutUs = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-image bg-fit text-white
     bg-center h-64 w-full p-8">
     
      <div className="md:w-1/2 p-8">
        <h1 className="text-6xl font-bold flex justify-center mb-20">About Us</h1>
        <p className="text-xl font-medium text-white mb-6">
          We are committed to connecting donors, hospitals, and blood banks
          seamlessly through our innovative platform. Our mission is to ensure
          that no one faces a blood shortage during emergencies. With real-time
          data and a user-friendly interface, we make it easier to donate and
          access blood when it’s most needed.
        </p>
        <p className="text-xl font-medium text-white mb-20">
          Join us in saving lives by enhancing the efficiency of blood donations
          and improving the experience for donors and medical facilities alike.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
