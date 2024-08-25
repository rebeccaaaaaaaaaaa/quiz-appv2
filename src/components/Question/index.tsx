import { useQuiz } from "../../hooks/useQuiz";

export default function QuizQuestion() {
  const { getAllQuestionsToCategory, selectCategory, currentQuestionIndex } = useQuiz();
  const questions = getAllQuestionsToCategory(selectCategory);
  const currentQuestion = questions[currentQuestionIndex];

  if (!currentQuestion) return null;

  return (
    <div className="p-5 border-2 border-gray-300 rounded-lg max-w-[400px] bg-white shadow-md mt-6">
      <div className="flex items-center justify-between p-3 border-b border-gray-300">
        <span className="text-gray-800">{currentQuestion.question}</span>
      </div>
    </div>
  );
}
