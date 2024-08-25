import { useQuiz } from "../../hooks/useQuiz";

export default function QuestionPagination() {
  const { selectCategory, getTotalQuestionsInCategory, currentQuestionIndex } = useQuiz();
  const totalQuestions = getTotalQuestionsInCategory(selectCategory);
  const currentQuestion = currentQuestionIndex + 1;
  return(
    <h1 className='text-2xl font-bold text-gray-800 text-center mb-4'>Pergunta { currentQuestion } de {totalQuestions} - {selectCategory}</h1>
  )
}