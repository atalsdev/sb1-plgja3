import React, { useState } from 'react';
import QuizForm from './components/QuizForm';
import Results from './components/Results';
import HomePage from './components/HomePage';
import { Question } from './types';

const questions: Question[] = [
  {
    id: 'riding-style',
    text: 'What\'s your primary riding style?',
    options: ['City commuting', 'Highway cruising', 'Off-road adventures', 'Sport riding'],
  },
  {
    id: 'experience',
    text: 'What\'s your riding experience level?',
    options: ['Beginner', 'Intermediate', 'Advanced'],
  },
  {
    id: 'budget',
    text: 'What\'s your budget range?',
    options: ['Under $5,000', '$5,000 - $10,000', '$10,000 - $20,000', 'Over $20,000'],
  },
  {
    id: 'priority',
    text: 'What\'s your top priority?',
    options: ['Fuel efficiency', 'Speed', 'Comfort', 'Low maintenance'],
  },
];

function App() {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [currentStep, setCurrentStep] = useState<'home' | 'quiz' | 'results'>('home');

  const handleStartQuiz = () => {
    setCurrentStep('quiz');
  };

  const handleSubmit = (userAnswers: Record<string, string>) => {
    setAnswers(userAnswers);
    setCurrentStep('results');
  };

  const handleReset = () => {
    setAnswers({});
    setCurrentStep('home');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      {currentStep === 'home' && <HomePage onStartQuiz={handleStartQuiz} />}
      {currentStep === 'quiz' && <QuizForm questions={questions} onSubmit={handleSubmit} />}
      {currentStep === 'results' && <Results answers={answers} onReset={handleReset} />}
    </div>
  );
}

export default App;