import { useQuiz } from "../../hooks/useQuiz";

export default function QuizUserName() {
  const { playerName, setPlayerName } = useQuiz();
  return (
    <div className="p-5 max-w-[400px] bg-white border-2 border-gray-300 rounded-lg shadow-md">
      <input
        autoFocus
        type="text"
        className="w-full p-3 bg-gray-100 border-2 border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Digite seu nome"
        value={playerName}
        onChange={(e) => setPlayerName(e.target.value)}
      />
    </div>
  );
}
