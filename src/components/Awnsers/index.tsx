import { useQuiz } from "../../hooks/useQuiz";

export default function QuizAnswers() {
  const { getAllAnswersToQuestionById, currentQuestionIndex, getAllQuestionsToCategory, selectCategory } = useQuiz();
  const questions = getAllQuestionsToCategory(selectCategory);
  const currentQuestion = questions[currentQuestionIndex];
  
  if (!currentQuestion) return null;

  const answers = getAllAnswersToQuestionById(currentQuestion.id);

  return (
    <div className="flex justify-center items-center">
      <ul className="p-5 w-full flex flex-col gap-4">
        {answers.map((answer, index) => (
          <li
            key={index}
            className="p-4 bg-blue-500 text-white text-center rounded-lg cursor-pointer hover:bg-blue-600 transition-colors"
          >
            {answer}
          </li>
        ))}
      </ul>
    </div>
  );
}
