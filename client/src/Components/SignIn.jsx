import { useState } from 'react';

const SignInForm = () => {
  // State to manage form input values
  const [formData, setFormData] = useState({
    emailOrId: '',
    password: '',
  });

  const [error, setError] = useState('');

  // Handle input change
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Simple validation
    if (!formData.emailOrId || !formData.password) {
      setError('Both email/ID and password are required.');
    } else {
      setError('');
      console.log('Form Submitted:', formData);
      // Here you can make an API call to authenticate the user
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      {/* <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2> */}
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        
        {/* Email/ID Field */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email or ID:
            <input
              type="text"
              name="emailOrId"
              value={formData.emailOrId}
              onChange={handleInputChange}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </label>
        </div>

        {/* Password Field */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Password:
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </label>
        </div>

        {/* Error Message */}
        {error && (
          <div className="text-red-500 text-sm mb-4">
            {error}
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignInForm;
