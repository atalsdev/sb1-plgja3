import React from 'react';
import { Bike, Compass, CheckCircle } from 'lucide-react';

interface HomePageProps {
  onStartQuiz: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ onStartQuiz }) => {
  return (
    <div className="text-center max-w-3xl mx-auto">
      <h1 className="text-5xl font-bold text-blue-600 mb-6 flex items-center justify-center">
        <Bike className="mr-3" size={48} />
        Your Perfect Motorcycle
        <Compass className="ml-3" size={48} />
      </h1>
      <p className="text-2xl text-gray-700 mb-8">Discover the ideal ride tailored to your style and needs</p>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Use Our Motorcycle Finder?</h2>
        <ul className="text-left">
          {[
            'Personalized recommendations based on your preferences',
            'Expert insights on various motorcycle models',
            'Save time researching - we do the hard work for you',
            'Discover bikes you might have overlooked',
          ].map((item, index) => (
            <li key={index} className="flex items-center mb-3">
              <CheckCircle className="text-green-500 mr-2" size={24} />
              <span className="text-lg text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <button
        onClick={onStartQuiz}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full text-xl transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
      >
        Start Your Motorcycle Journey
      </button>
      
      <p className="mt-6 text-gray-600">
        Answer a few quick questions and let us guide you to your dream ride!
      </p>
    </div>
  );
};

export default HomePage;