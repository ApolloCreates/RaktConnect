import { useState } from 'react';

const DonorSignUpForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    gender: '',
    phoneNumber: '',
    bloodType: '',
    lastDonation: '',
    medicalCondition: '',
    address: '',
    city: '',
    pincode: '',
  });

  const [error, setError] = useState('');

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, phoneNumber, bloodType, address, city, pincode } = formData;

    // Basic validation
    if (!name || !email || !password || !phoneNumber || !bloodType || !address || !city || !pincode) {
      setError('Please fill in all required fields.');
      return;
    }

    setError('');
    console.log('Form Submitted:', formData);
    // Add form submission logic, e.g., API call to send data to server
  };

  return (
    <div className="max-w-lg mx-auto mt-10">
      {/* <h2 className="text-3xl font-bold mb-6 text-center">Sign Up</h2> */}
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        
        {/* Personal Information */}
        <h3 className="text-xl font-semibold mb-4">Personal Information</h3>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
          <input
            type="text"
            name="name"
            placeholder='Enter your name'
            value={formData.name}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
          <input
            type="email"
            name="email"
            placeholder='Enter your email'
            value={formData.email}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Password:</label>
          <input
            type="password"
            name="password"
            placeholder='Enter password'
            value={formData.password}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Gender:</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Phone Number:</label>
          <input
            type="tel"
            name="phoneNumber"
            placeholder='Enter your phone number'
            value={formData.phoneNumber}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        {/* Medical Information */}
        <h3 className="text-xl font-semibold mb-4">Medical Information</h3>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Blood Type:</label>
          <select
            name="bloodType"
            value={formData.bloodType}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          >
            <option value="">Select Blood Type</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Last Donation Date:</label>
          <input
            type="date"
            name="lastDonation"
            value={formData.lastDonation}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Medical Conditions (if any):</label>
          <input
            type="text"
            name="medicalCondition"
            value={formData.medicalCondition}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        {/* Address Information */}
        <h3 className="text-xl font-semibold mb-4">Address Information</h3>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Address:</label>
          <input
            type="text"
            name="address"
            placeholder='Enter address'
            value={formData.address}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">City:</label>
          <input
            type="text"
            name="city"
            placeholder='Enter city'
            value={formData.city}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Pincode:</label>
          <input
            type="text"
            name="pincode"
            placeholder='Enter pincode'
            value={formData.pincode}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        {/* Error Message */}
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default DonorSignUpForm;
