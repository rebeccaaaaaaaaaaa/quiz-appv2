import { Link } from "react-router-dom";
import QuizButton from "../../components/Button";
import QuizCategorySelector from "../../components/Category";

export default function CategorySelector() {
  return (
    <div className="flex flex-col">
      <QuizCategorySelector />
      <QuizButton className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4 w-full">
       <Link to="/game"> Pronto</Link>
      </QuizButton>
    </div>
  );
}
