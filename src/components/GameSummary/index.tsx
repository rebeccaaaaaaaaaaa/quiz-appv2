import QuizAwsers from "../Awnsers";
import QuizButton from "../Button";
import Layout from "../Layout";
import QuizQuestion from "../Question";
import QuestionPagination from "../QuestionPagination";
import QuizScore from "../Score";
import { useQuiz } from "../../hooks/useQuiz";
import { Link } from "react-router-dom";

export default function GameSummary() {
  const { nextQuestion } = useQuiz();
  return (
    <Layout>
      <QuestionPagination />
      <QuizScore />
      <QuizQuestion />
      <QuizAwsers />
      <div className="flex align-middle justify-center gap-7">
       <QuizButton className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
          <Link to="/">
            Restart
          </Link>
        </QuizButton>
        <QuizButton className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded' onClick={nextQuestion}>
          Próxima Pergunta
        </QuizButton>
      </div>
    </Layout>
  )
}