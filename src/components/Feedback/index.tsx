import { Link } from "react-router-dom";
import { useQuiz } from "../../hooks/useQuiz";
import QuizButton from "../Button";

export default function QuizFeedback() {
  const { getScoreByCorrectAwnsers } = useQuiz();
  return (
    <div className="p-5 max-w-[400px] bg-white border-2 border-gray-300 rounded-lg shadow-md text-center">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Resultado</h1>
      <p className="text-xl font-semibold text-gray-700 mb-4">
        Você acertou {getScoreByCorrectAwnsers()} perguntas!
      </p>
      <p className="text-lg text-gray-600">
        {getScoreByCorrectAwnsers() > 5 ? 'Parabéns!' : 'Você é muito ruim!'}
      </p>
      <QuizButton className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
          <Link to="/">
            Restart
          </Link>
        </QuizButton>
    </div>
  );
}
