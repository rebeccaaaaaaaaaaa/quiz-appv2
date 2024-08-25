export default function QuizFeedback() {
  return (
    <div className="p-5 max-w-[400px] bg-white border-2 border-gray-300 rounded-lg shadow-md text-center">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Resultado</h1>
      <p className="text-xl font-semibold text-gray-700 mb-4">
        Você acertou 10 de 10 perguntas.
      </p>
      <p className="text-lg text-gray-600">Parabéns!</p>
    </div>
  );
}
