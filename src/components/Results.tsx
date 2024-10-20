import React from 'react';
import { MotorcycleRecommendation } from '../types';
import { getRecommendations } from '../utils/recommendations';

interface ResultsProps {
  answers: Record<string, string>;
  onReset: () => void;
}

const Results: React.FC<ResultsProps> = ({ answers, onReset }) => {
  const recommendations: MotorcycleRecommendation[] = getRecommendations(answers);

  return (
    <div className="w-full max-w-2xl bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Your Perfect Motorcycles</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {recommendations.map((recommendation) => (
          <div key={recommendation.model} className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-2">{recommendation.model}</h3>
            <p className="text-gray-600 mb-2">{recommendation.description}</p>
            <a
              href={recommendation.reviewLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Read Review
            </a>
          </div>
        ))}
      </div>
      <div className="mt-6 text-center">
        <button
          onClick={onReset}
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Start Over
        </button>
      </div>
    </div>
  );
};

export default Results;