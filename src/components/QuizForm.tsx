import React, { useState } from 'react';
import { Question } from '../types';

interface QuizFormProps {
  questions: Question[];
  onSubmit: (answers: Record<string, string>) => void;
}

const QuizForm: React.FC<QuizFormProps> = ({ questions, onSubmit }) => {
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const handleChange = (questionId: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(answers);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      {questions.map((question) => (
        <div key={question.id} className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={question.id}>
            {question.text}
          </label>
          <select
            id={question.id}
            value={answers[question.id] || ''}
            onChange={(e) => handleChange(question.id, e.target.value)}
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          >
            <option value="">Select an option</option>
            {question.options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      ))}
      <div className="flex items-center justify-center">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Find My Perfect Motorcycle
        </button>
      </div>
    </form>
  );
};

export default QuizForm;