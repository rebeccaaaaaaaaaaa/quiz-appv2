import { useQuiz } from "../../hooks/useQuiz";

export default function QuestionPagination() {
  const { selectCategory, getTotalQuestionsInCategory, currentQuestionIndex } = useQuiz();
  const totalQuestions = getTotalQuestionsInCategory(selectCategory);
  const currentQuestion = currentQuestionIndex + 1;
  return(
    <h1 className='text-2xl font-bold text-gray-100 text-center mb-2'>{ currentQuestion } / {totalQuestions} - {selectCategory}</h1>
  )
}