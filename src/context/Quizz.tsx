import { createContext, useEffect, useState, ReactNode } from 'react';

interface Question {
  category: string;
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
}

interface QuizData {
  questions: Question[];
}

interface QuizzContextData {
  quizData: QuizData | null;
  getQuestions: () => Question[] | null;
  selectCategory: string;
  setSelectCategory: (category: string) => void;
  getCategories: () => string[];
  getAllQuestionsToCategory: (category: string) => Question[];
  getAllAnswersToQuestionById: (questionId: number) => string[];
  currentQuestionIndex: number;
  nextQuestion: () => void;
  getTotalQuestionsInCategory: (category: string) => number;
  getCorrectAnswerToQuestionById: (questionId: number) => string | undefined;
}

interface QuizzContextProps {
  children: ReactNode;
}

export const QuizContext = createContext<QuizzContextData>({} as QuizzContextData);

export function QuizzProvider({ children }: QuizzContextProps) {
  const [quizData, setQuizData] = useState<QuizData | null>(null);
  const [selectCategory, setSelectCategory] = useState<string>('');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);

 function getCategories(): string[] {
    if (quizData) {
      const categories = quizData.questions.map(question => question.category);
      return Array.from(new Set(categories));
    }
    return [];
  }

  function getCorrectAnswerToQuestionById(questionId: number): string | undefined {
    if (quizData) {
      const question = quizData.questions.find(question => question.id === questionId);
      if (question) {
        return question.correctAnswer;
      }
    }
  }

  function getAllQuestionsToCategory(category: string): Question[] {
    if (quizData) {
      return quizData.questions.filter(question => question.category === category);
    }
    return [];
  }

  function getTotalQuestionsInCategory (category: string): number {
    if (quizData) {
      return quizData.questions.filter(question => question.category === category).length;
    }
    return 0;
  }

  function getAllAnswersToQuestionById(questionId: number): string[] {
    if (quizData) {
      const question = quizData.questions.find(question => question.id === questionId);
      if (question) {
        return question.options;
      }
    }
    return [];
  }

  function nextQuestion() {
    if (quizData && selectCategory) {
      const questions = getAllQuestionsToCategory(selectCategory);
      setCurrentQuestionIndex((prevIndex) => (prevIndex + 1) % questions.length);
    }
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
      getCategories,
      getAllQuestionsToCategory,
      getAllAnswersToQuestionById,
      currentQuestionIndex,
      nextQuestion,
      getTotalQuestionsInCategory,
      getCorrectAnswerToQuestionById
    }}>
      {children}
    </QuizContext.Provider>
  );
}
