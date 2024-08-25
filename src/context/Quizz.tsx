import { createContext, useEffect, useState, ReactNode } from 'react';

interface Question {
  category: string;
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
}

interface QuizData {
  category: string;
  questions: Question[];
}

interface QuizzContextData {
  quizData: QuizData | null;
  getQuestions: () => Question[] | null;
  selectCategory: string;
  setSelectCategory: (category: string) => void;
  getCategories: () => string[];
}

interface QuizzContextProps {
  children: ReactNode;
}

export const QuizContext = createContext<QuizzContextData>({} as QuizzContextData);

export function QuizzProvider({ children }: QuizzContextProps) {
  const [quizData, setQuizData] = useState<QuizData | null>(null);
  const [selectCategory, setSelectCategory] = useState<string>('');

  function getCategories(): string[] {
    if (quizData) {
      // Extrair categorias únicas
      const categories = quizData.questions
        .map(question => question.category)
        .filter((value, index, self) => self.indexOf(value) === index); // Remove duplicatas
      return categories;
    }
    return [];
  }
  

  useEffect(() => {
    const fetchQuizData = async () => {
      try {
        const response = await fetch('/data.json');
        const data = await response.json();
        setQuizData(data.quiz);
      } catch (error) {
        console.error('Failed to load quiz data:', error);
      }
    };
    fetchQuizData();
  }, []);

  const getQuestions = (): Question[] | null => {
    if (quizData) {
      return quizData.questions;
    }
    return null;
  };

  return (
    <QuizContext.Provider value={{ 
      quizData,
      getQuestions,
      selectCategory,
      setSelectCategory,
      getCategories
     }}>
      {children}
    </QuizContext.Provider>
  );
}
