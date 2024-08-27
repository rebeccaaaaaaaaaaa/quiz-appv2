import { useQuiz } from "../../hooks/useQuiz";

export default function QuizAnswers() {
  const { 
    getAllAnswersToQuestionById,
    currentQuestionIndex,
    getAllQuestionsToCategory,
    selectCategory,
    getCorrectAnswerToQuestionById,
    selectedAnswer,
    isAnswered,
    handleAnswerClick
  } = useQuiz();

  
  const questions = getAllQuestionsToCategory(selectCategory);
  const currentQuestion = questions[currentQuestionIndex];

  if (!currentQuestion) return null;

  const answers = getAllAnswersToQuestionById(currentQuestion.id);

  return (
    <div className="flex justify-center items-center">
      <ul className="p-2 w-full flex flex-col gap-4">
        {answers.map((answer, index) => (
          <li
            key={index}
            onClick={() => handleAnswerClick(answer)}
            className={`
              p-4 text-white text-center rounded-lg cursor-pointer transition-colors
              ${selectedAnswer === answer ? (answer === getCorrectAnswerToQuestionById(currentQuestion.id) ? 'bg-green-500' : 'bg-red-500') : 'bg-blue-500'}
              hover:${!isAnswered ? 'bg-blue-600' : ''} // Desabilita hover se a pergunta já foi respondida
            `}
            style={{ pointerEvents: isAnswered ? 'none' : 'auto' }}
          >
            {answer}
          </li>
        ))}
      </ul>
    </div>
  );
}
