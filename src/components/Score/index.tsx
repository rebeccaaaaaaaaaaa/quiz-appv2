import { useQuiz } from "../../hooks/useQuiz";

export default function QuizScore() {
  const { getScoreByCorrectAwnsers } = useQuiz();
  const score = getScoreByCorrectAwnsers();
  return (
    <div className="p-2 w-full bg-gray-100 border-2 border-gray-300 rounded-lg shadow-md text-center">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Pontuação</h1>
      <p className="text-4xl font-extrabold text-blue-500">{score}</p>
    </div>
  );
}
