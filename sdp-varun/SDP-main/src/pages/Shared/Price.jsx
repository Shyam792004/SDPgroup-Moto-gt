import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Particles from '@/components/magicui/particles';
import { motion } from 'framer-motion';
import { Calendar } from '@/components/ui/calendar';
// import 'react-calendar/dist/Calendar.css';

const carDetails = {
  1: {
    imageUrl: 'https://images.ctfassets.net/uwf0n1j71a7j/3Q5rRFTIW53lWJfUwscjCN/93475acc785944131b85402f5207e969/why-routine-car-servicing-must-for-vehicle.png',
    service: 'Full Services',
    reason: 'Cooling system failure',
    price: 50,
  },
  2: {
    imageUrl: 'https://www.slashgear.com/img/gallery/5-of-the-best-car-wash-soaps-for-your-vehicle/intro-1705512855.jpg',
    service: 'Car Wash',
    price: 40,
  },
  3: {
    imageUrl: 'https://img.freepik.com/free-photo/luxurious-car-parked-highway-with-illuminated-headlight-sunset_181624-60607.jpg',
    service: 'Refurbishment',
    price: 90,
  },
};

const carModels = [
  'Toyota Camry',
  'Honda Accord',
  'Ford Mustang',
  'Chevrolet Camaro',
  'BMW 3 Series',
  'Audi A4',
  'Mercedes-Benz C-Class',
];

const Price = () => {
  const { id } = useParams();
  const car = carDetails[id];
  const [isFormVisible, setFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    date: new Date(),
    carModel: '',
    issueType: '',
    preferredTime: '',
    additionalNotes: '',
  });

  if (!car) {
    return <div>Car not found</div>;
  }

  const handleBookService = () => {
    setFormVisible(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDateChange = (date) => {
    setFormData((prev) => ({ ...prev, date }));
  };

  const handleViewDetails = () => {
    // Example function to handle the submission
    console.log(formData);
    setFormVisible(false); // Hide form after submission
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-gray-200 to-gray-400 dark:from-gray-800 dark:to-gray-900">
      <Particles className="absolute inset-0 z-0 opacity-40" />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-8 md:p-16">
        <motion.div
          className="bg-white dark:bg-gray-700 p-8 rounded-3xl shadow-lg w-full max-w-4xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-6"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {car.service}
          </motion.h1>

          <div className="flex flex-col md:flex-row items-center gap-8">
            <motion.img
              src={car.imageUrl}
              alt={car.service}
              className="w-full md:w-1/2 h-64 md:h-auto object-cover rounded-lg shadow-md"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            />

            <div className="text-gray-700 dark:text-gray-300 text-lg space-y-4">
              {car.reason && <p><strong>Reason:</strong> {car.reason}</p>}
              <p><strong>Price:</strong> ${car.price}</p>

              <motion.button
                className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleBookService}
              >
                Book Service
              </motion.button>
            </div>
          </div>
        </motion.div>

        {isFormVisible && (
          <div className="absolute inset-0 z-20 flex items-center justify-center bg-gray-800 bg-opacity-50">
            <div className="bg-white dark:bg-gray-700 p-8 rounded-3xl shadow-lg w-full max-w-3xl">
              <h1 className="text-4xl mb-12 text-black dark:text-white">Booking for {car.service}</h1>
              <form className="space-y-6">
                <div className="mb-4">
                  <label className="block mb-2">
                    Select Date:
                    <Calendar
                      onChange={handleDateChange}
                      value={formData.date}
                      className="mt-2"
                    />
                  </label>
                  <label className="block mb-4">
                    Car Model:
                    <select name="carModel" value={formData.carModel} onChange={handleChange} className="block w-full mt-2 p-2 border rounded">
                      <option value="">Select</option>
                      {carModels.map((model) => (
                        <option key={model} value={model}>{model}</option>
                      ))}
                    </select>
                  </label>
                  {/* <label className="block mb-4">
                    Issue Type:
                    <select name="issueType" value={formData.issueType} onChange={handleChange} className="block w-full mt-2 p-2 border rounded">
                      <option value="">Select</option>
                      <option value="engine">Engine</option>
                      <option value="transmission">Transmission</option>
                      <option value="brakes">Brakes</option>
                    </select>
                  </label> */}
                  <label className="block mb-4">
                    Preferred Time:
                    <select name="preferredTime" value={formData.preferredTime} onChange={handleChange} className="block w-full mt-2 p-2 border rounded">
                      <option value="">Select</option>
                      <option value="morning">Morning</option>
                      <option value="afternoon">Afternoon</option>
                      <option value="evening">Evening</option>
                    </select>
                  </label>
                  <label className="block mb-4">
                    Additional Notes:
                    <select name="additionalNotes" value={formData.additionalNotes} onChange={handleChange} className="block w-full mt-2 p-2 border rounded">
                      <option value="">Select</option>
                      <option value="urgent">Urgent</option>
                      <option value="non-urgent">Non-Urgent</option>
                    </select>
                  </label>
                </div>
                <button
                  type="button"
                  onClick={handleViewDetails}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300"
                >
                  Book Now
                </button>
                <button
                  type="button"
                  onClick={() => setFormVisible(false)}
                  className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition-colors duration-300 ml-4"
                >
                  Close
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Price;
