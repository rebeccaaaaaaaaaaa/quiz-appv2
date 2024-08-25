import { useState } from "react";
import { useQuiz } from "../../hooks/useQuiz";

export default function QuizAnswers() {
  const { getAllAnswersToQuestionById, currentQuestionIndex, getAllQuestionsToCategory, selectCategory, getCorrectAnswerToQuestionById, updateScoreByCorrectAnswer } = useQuiz();
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false); // Adiciona estado para controlar se a pergunta foi respondida

  const questions = getAllQuestionsToCategory(selectCategory);
  const currentQuestion = questions[currentQuestionIndex];

  if (!currentQuestion) return null;

  const answers = getAllAnswersToQuestionById(currentQuestion.id);

  const handleAnswerClick = (answer: string) => {
    if (!isAnswered) { // Verifica se a pergunta ainda não foi respondida
      setSelectedAnswer(answer);
      setIsAnswered(true); // Marca a pergunta como respondida
      updateScoreByCorrectAnswer(answer, currentQuestion.id); // Atualiza a pontuação ao clicar
    }
  };

  return (
    <div className="flex justify-center items-center">
      <ul className="p-5 w-full flex flex-col gap-4">
        {answers.map((answer, index) => (
          <li
            key={index}
            onClick={() => handleAnswerClick(answer)}
            className={`
              p-4 text-white text-center rounded-lg cursor-pointer transition-colors
              ${selectedAnswer === answer ? (answer === getCorrectAnswerToQuestionById(currentQuestion.id) ? 'bg-green-500' : 'bg-red-500') : 'bg-blue-500'}
              hover:${!isAnswered ? 'bg-blue-600' : ''} // Desabilita hover se a pergunta já foi respondida
            `}
            style={{ pointerEvents: isAnswered ? 'none' : 'auto' }} // Desabilita cliques se a pergunta já foi respondida
          >
            {answer}
          </li>
        ))}
      </ul>
    </div>
  );
}
