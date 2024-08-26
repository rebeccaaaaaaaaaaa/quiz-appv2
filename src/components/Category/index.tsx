import { Link } from "react-router-dom";
import { useQuiz } from "../../hooks/useQuiz";
import QuizButton from "../Button";

export default function QuizCategorySelector() {
  const { getCategories, setSelectCategory, playerName, selectCategory } = useQuiz();
  const categories = getCategories();
  return (
    <>
      <h1 className="text-xl font-bold text-gray-100 text-center mb-4">
        Olá, {playerName}! Selecione uma categoria
      </h1>
      <div className="p-5 max-w-[400px] bg-white border-2 border-gray-300 rounded-lg shadow-md">
        <ul>
          {categories.map((category) => (
            <li
              key={category}
              className="p-2 my-2 bg-gray-100 hover:bg-gray-200 cursor-pointer"
              onClick={() => setSelectCategory(category)}
            >
              {category}
            </li>
          ))}
        </ul>
        <Link to="/game">
          <QuizButton
            className={
              !selectCategory
                ? "bg-gray-100 text-gray-500 cursor-not-allowed font-bold py-2 px-4 rounded w-full"
                : "bg-green-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-full"
            }
            buttonText="Pronto"
          />
        </Link>
      </div>
    </>
  );
}
