import React from 'react';
import { useParams } from 'react-router-dom';
import Particles from '@/components/magicui/particles';

const carDetails = {
  1: {
    imageUrl: '/src/assets/img/car1.png', // Ensure this path is correct
    problem: 'Engine Overheating',
    tools: 'Wrench, Screwdriver, Coolant',
    reason: 'Cooling system failure',
    toolPrice: 50,
    serviceCharge: 100,
    labourCharge: 75,
  },
  2: {
    imageUrl: '/src/assets/img/car6.png', // Ensure this path is correct
    problem: 'Brake Issues',
    tools: 'Brake Pads, Brake Fluid, Wrench',
    reason: 'Worn out brake pads',
    toolPrice: 40,
    serviceCharge: 90,
    labourCharge: 60,
  },
  3: {
    imageUrl: '/src/assets/img/use.png', // Ensure this path is correct
    problem: 'Battery Replacement',
    tools: 'Battery, Wrench, Gloves',
    reason: 'Dead battery',
    toolPrice: 120,
    serviceCharge: 50,
    labourCharge: 30,
  },
};

const Price = () => {
  const { id } = useParams();
  const car = carDetails[id];

  if (!car) {
    return <div>Car not found</div>;
  }

  const totalPrice = car.toolPrice + car.serviceCharge + car.labourCharge;

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Particles className="absolute inset-0 z-0" />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-16">
        <h1 className="text-4xl mb-12 text-black dark:text-white">{car.title}</h1>
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between w-full">
          <img src={car.imageUrl} alt={car.title} className="object-cover w-full lg:w-1/2 h-96 mb-4 lg:mb-0 rounded-lg" />
          <div className="lg:ml-8 text-black dark:text-gray-300 text-lg space-y-4">
            <p><strong>Problem:</strong> {car.problem}</p>
            <p><strong>Tools Needed:</strong> {car.tools}</p>
            <p><strong>Reason:</strong> {car.reason}</p>
            <p><strong>Price for Tools:</strong> ${car.toolPrice}</p>
            <p><strong>Service Charge:</strong> ${car.serviceCharge}</p>
            <p><strong>Labour Charge:</strong> ${car.labourCharge}</p>
            <p className="text-2xl font-bold"><strong>Total Price:</strong> ${totalPrice}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Price;
