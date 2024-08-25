import { useQuiz } from "../../hooks/useQuiz";

export default function QuizScore() {
  const { getScoreByCorrectAwnsers } = useQuiz();
  const score = getScoreByCorrectAwnsers();
  return (
    <div className="p-2 w-full bg-gray-100 border-2 border-gray-300 rounded-lg shadow-md text-center flex justify-between align-middle">
      <h1 className="text-2xl font-bold text-gray-800">Score: </h1>
      <p className="text-4xl font-extrabold text-blue-500">{score}</p>
    </div>
  );
}
