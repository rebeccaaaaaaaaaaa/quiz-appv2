import { useQuiz } from "../../hooks/useQuiz";

export default function QuestionPagination() {
  const { selectCategory } = useQuiz();
  return(
    <h1 className='text-2xl font-bold text-gray-800 text-center mb-4'>Pergunta 1 de 10 - {selectCategory}</h1>
  )
}