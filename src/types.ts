export interface Question {
  id: string;
  text: string;
  options: string[];
}

export interface MotorcycleRecommendation {
  model: string;
  description: string;
  reviewLink: string;
}