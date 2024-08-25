import { useQuiz } from "../../hooks/useQuiz";

export default function QuizQuestion() {
  const { getAllQuestionsToCategory, selectCategory, currentQuestionIndex } = useQuiz();
  const questions = getAllQuestionsToCategory(selectCategory);
  const currentQuestion = questions[currentQuestionIndex];

  if (!currentQuestion) return null;

  return (
    <div className="p-5 border-2 border-gray-300 rounded-lg w-full bg-white shadow-md mt-6">
      <div className="flex items-center justify-center p-3 text-center">
        <span className="text-gray-800">{currentQuestion.question}</span>
      </div>
    </div>
  );
}
