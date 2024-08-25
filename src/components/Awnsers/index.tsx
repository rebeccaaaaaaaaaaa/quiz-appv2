import { useState } from "react";
import { useQuiz } from "../../hooks/useQuiz";

export default function QuizAnswers() {
  const { getAllAnswersToQuestionById, currentQuestionIndex, getAllQuestionsToCategory, selectCategory, getCorrectAnswerToQuestionById } = useQuiz();
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null); // Estado para armazenar a resposta selecionada
  
  const questions = getAllQuestionsToCategory(selectCategory);
  const currentQuestion = questions[currentQuestionIndex];
  
  if (!currentQuestion) return null;

  const answers = getAllAnswersToQuestionById(currentQuestion.id);
  const correctAnswer = getCorrectAnswerToQuestionById(currentQuestion.id); // Obtendo a resposta correta

  const handleAnswerClick = (answer: string) => {
    setSelectedAnswer(answer); // Atualiza o estado com a resposta selecionada
  };

  return (
    <div className="flex justify-center items-center">
      <ul className="p-5 w-full flex flex-col gap-4">
        {answers.map((answer, index) => (
          <li
            key={index}
            onClick={() => handleAnswerClick(answer)} // Clique para selecionar a resposta
            className={`
              p-4 text-white text-center rounded-lg cursor-pointer transition-colors
              ${selectedAnswer === answer ? (answer === correctAnswer ? 'bg-green-500' : 'bg-red-500') : 'bg-blue-500'}
              hover:${selectedAnswer === null ? 'bg-blue-600' : ''}`}
          >
            {answer}
          </li>
        ))}
      </ul>
    </div>
  );
}
