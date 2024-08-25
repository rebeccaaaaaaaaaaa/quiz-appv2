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
  getScoreByCorrectAwnsers: () => number;
  updateScoreByCorrectAnswer: (selectedAnswer: string, questionId: number) => void;
  isLastQuestion: boolean;
  restartGame: () => void;
  checkIfLastQuestionIsReply: () => boolean;
  selectedAnswer: string | null;
  setSelectedAnswer: (answer: string) => void;
  isAnswered: boolean;
  setIsAnswered: (isAnswered: boolean) => void;
  handleAnswerClick: (answer: string) => void;
  playerName: string;
  setPlayerName: (name: string) => void;
}

interface QuizzContextProps {
  children: ReactNode;
}

export const QuizContext = createContext<QuizzContextData>({} as QuizzContextData);

export function QuizzProvider({ children }: QuizzContextProps) {
  const [quizData, setQuizData] = useState<QuizData | null>(null);
  const [selectCategory, setSelectCategory] = useState<string>('');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [answeredQuestions, setAnsweredQuestions] = useState<Record<number, boolean>>({});
  const isLastQuestion = currentQuestionIndex === getTotalQuestionsInCategory(selectCategory) - 1;
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [playerName, setPlayerName] = useState<string>('');
  
  function getCategories(): string[] {
    if (quizData) {
      const categories = quizData.questions.map(question => question.category);
      return Array.from(new Set(categories));
    }
    return [];
  }

  function updateScoreByCorrectAnswer(selectedAnswer: string, questionId: number) {
    const correctAnswer = getCorrectAnswerToQuestionById(questionId);
    if (correctAnswer && selectedAnswer === correctAnswer) {
      setScore(prevScore => prevScore + 1);
    }
    setAnsweredQuestions(prev => ({ ...prev, [questionId]: true }));
  }

  function getScoreByCorrectAwnsers(): number {
    return score;
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

  function getTotalQuestionsInCategory(category: string): number {
    if (quizData) {
      return quizData.questions.filter(question => question.category === category).length;
    }
    return 0;
  }

  function checkIfLastQuestionIsReply(): boolean {
    const totalQuestions = getTotalQuestionsInCategory(selectCategory);
    const lastQuestionId = getAllQuestionsToCategory(selectCategory)[totalQuestions - 1]?.id;
    return !!answeredQuestions[lastQuestionId];
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

  const handleAnswerClick = (answer: string) => {
    const questions = getAllQuestionsToCategory(selectCategory);
    const currentQuestion = questions[currentQuestionIndex]; // Derivando a pergunta com base no índice
  
    if (currentQuestion && !isAnswered) {
      setSelectedAnswer(answer);
      setIsAnswered(true); 
      updateScoreByCorrectAnswer(answer, currentQuestion.id); // Passa o id correto da pergunta
    }
  }

  function restartGame() {
    setSelectCategory('');
    setCurrentQuestionIndex(0);
    setScore(0);
    setAnsweredQuestions({});
    window.location.href = '/';
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
      getCorrectAnswerToQuestionById,
      getScoreByCorrectAwnsers,
      updateScoreByCorrectAnswer,
      isLastQuestion,
      restartGame,
      checkIfLastQuestionIsReply,
      selectedAnswer,
      setSelectedAnswer,
      isAnswered,
      setIsAnswered,
      handleAnswerClick,
      playerName,
      setPlayerName,
    }}>
      {children}
    </QuizContext.Provider>
  );
}

