import React from 'react';
// import Particles from '../components/magicui/particles';
import { InputDemo } from '@/components/demo/InputDemo';
import Particles from '@/components/magicui/particles';

const services = [
  {
    title: 'Car Repair',
    description: 'Professional car repair services for all makes and models.',
  },
  {
    title: 'Water Services',
    description: 'Comprehensive water services for your vehicle.',
  },
  {
    title: 'Oil Change',
    description: 'Quick and efficient oil change services.',
  },
  {
    title: 'Tire Services',
    description: 'Complete tire services including rotation and replacement.',
  },
  {
    title: 'Brake Services',
    description: 'Expert brake inspection and repair services.',
  },
];

const Services = () => (
  <div className="relative w-full h-screen overflow-hidden">
    <Particles className="absolute inset-0 z-0" />

    <div className="relative z-10 p-8">
      <h1 className="text-4xl mb-12 text-black dark:text-white">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 w-full max-w-md"
          >
            <h2 className="text-3xl font-bold mb-4 text-black dark:text-white">{service.title}</h2>
            <p className="text-black dark:text-gray-300">{service.description}</p>
          </div>
        ))}
        <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 w-full max-w-md">
          <InputDemo />
        </div>
      </div>
    </div>
  </div>
);

export default Services;
