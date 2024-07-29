import React from 'react';
import { Link } from 'react-router-dom';
import Particles from '@/components/magicui/particles';

const cars = [
  {
    id: 1,
    description: 'Engine OverHeating Issue',
    imageUrl: '/src/assets/img/car1.png', // Ensure this path is correct
  },
  {
    id: 2,
    description: 'Brake issues',
    imageUrl: '/src/assets/img/car6.png', // Ensure this path is correct
  },
  {
    id: 3,
    description: 'Battery Replacement',
    imageUrl: '/src/assets/img/use.png', // Ensure this path is correct
  },
];

const Target = () => (
  <div className="relative w-full h-screen overflow-hidden">
    <Particles className="absolute inset-0 z-0" />

    <div className="relative z-10 p-8">
      <h1 className="text-4xl mb-12 text-black dark:text-white">Tata Models</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {cars.map((car) => (
          <div key={car.id} className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 w-full max-w-md">
            <Link to={`/price/${car.id}`}>
              <img src={car.imageUrl} alt={car.title} className="object-cover w-full h-48 mb-4 rounded-lg" />
              <h2 className="text-3xl font-bold mb-4 text-black dark:text-white">{car.title}</h2>
              <p className="text-black dark:text-gray-300">{car.description}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Target;
