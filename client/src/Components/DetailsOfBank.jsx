import PropTypes from 'prop-types';

function DetailsOfBank({ onClose }) {
  return (
    <div className="bg-white w-[40vw] p-10 rounded-2xl shadow-lg relative">
      <button onClick={onClose} className="absolute top-4 right-4  text-gray-500 hover:text-gray-700">
        Back
      </button>
      <h1 className="text-center text-3xl font-extrabold pb-10">Details</h1>
      <div className="personal text-lg font-medium">
        <h2>Name of Organisation: Aakash Blood Bank</h2>
        <h2>Email: aakashbank@gmail.com</h2>
        <h2>Phone: 8799541125</h2>
        <h2>Address: Pilikothi, Mukhani, Haldwani, Uttarakhand</h2>
      </div>
      <div className="apply text-lg font-medium pt-5">
        <h2>Applied for the date : 20-10-24 -- Sunday</h2>
      </div>
    </div>
  );
}

DetailsOfBank.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default DetailsOfBank;
