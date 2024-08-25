import { useContext } from 'react';
import { QuizContext } from '../context/Quizz';

export function useQuiz() {
  const context = useContext(QuizContext);

  if (!context) {
    throw new Error('useQuiz must be used within an QuizProvider');
  }

  return context;
}