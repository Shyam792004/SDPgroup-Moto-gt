import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Calendar } from '@/components/ui/calendar';

const carModels = [
  'Toyota Camry',
  'Honda Accord',
  'Ford Mustang',
  'Chevrolet Camaro',
  'BMW 3 Series',
  'Audi A4',
  'Mercedes-Benz C-Class',
];

const Booking = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { service } = location.state || {}; // Retrieve service from state
  const [formData, setFormData] = useState({
    date: new Date(),
    carModel: '',
    question1: '',
    question2: '',
    question3: '',
    question4: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDateChange = (date) => {
    setFormData((prev) => ({ ...prev, date }));
  };

  const handleViewDetails = () => {
    const laborCharge = 50;
    const toolCharge = 20;
    const totalAmount = laborCharge + toolCharge;

    navigate('/booking-details', {
      state: {
        ...formData,
        laborCharge,
        toolCharge,
        totalAmount,
      },
    });
  };

  return (
    <div className="p-8">
      <h1 className="text-4xl mb-12 text-black dark:text-white">Booking for {service?.replace('-', ' ') || 'Service'}</h1>
      <div className="form-container">
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
              <select name="question1" value={formData.question1} onChange={handleChange} className="block w-full mt-2 p-2 border rounded">
                <option value="">Select</option>
                <option value="engine">Engine</option>
                <option value="transmission">Transmission</option>
                <option value="brakes">Brakes</option>
              </select>
            </label> */}
            <label className="block mb-4">
              Preferred Time:
              <select name="question3" value={formData.question3} onChange={handleChange} className="block w-full mt-2 p-2 border rounded">
                <option value="">Select</option>
                <option value="morning">Morning</option>
                <option value="afternoon">Afternoon</option>
                <option value="evening">Evening</option>
              </select>
            </label>
            <label className="block mb-4">
              Additional Notes:
              <select name="question4" value={formData.question4} onChange={handleChange} className="block w-full mt-2 p-2 border rounded">
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
        </form>
      </div>
    </div>
  );
};

export default Booking;
