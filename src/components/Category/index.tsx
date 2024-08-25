import { useQuiz } from "../../hooks/useQuiz";

export default function QuizCategorySelector() {
  const { getCategories, setSelectCategory, playerName } = useQuiz();
  const categories = getCategories();
  return (
    <div className="p-5 max-w-[400px] bg-white border-2 border-gray-300 rounded-lg shadow-md">
      <h1 className="text-xl font-bold text-gray-800 text-center mb-4">
        Olá, {playerName}! Selecione uma categoria
      </h1>
      <select className="w-full p-3 bg-gray-100 border-2 border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" onChange={(event) => setSelectCategory(event.target.value)}>
        <option value="">Selecione uma categoria</option>
        {
          categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))
        }
      </select>
    </div>
  );
}
