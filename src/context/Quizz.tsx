import { createContext, useEffect } from 'react';

interface QuizzContextData {
  message: string;
}

interface  QuizzContextProps {
  children: React.ReactNode;
}

export const QuizContext = createContext<QuizzContextData>(
  {} as QuizzContextData
);

export function  QuizzProvider({ children }: QuizzContextProps){
  const message = 'Hello from QuizzProvider';
  useEffect(() => {
    console.log('QuizzProvider mounted');
  }, []);

  return (
    <QuizContext.Provider value={{ message }}>
      {children}
    </QuizContext.Provider>
  );
};