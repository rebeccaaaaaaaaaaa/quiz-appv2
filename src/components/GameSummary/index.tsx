import QuizAwsers from "../Awnsers";
import QuizButton from "../Button";
import Layout from "../Layout";
import QuizQuestion from "../Question";
import QuestionPagination from "../QuestionPagination";
import QuizScore from "../Score";

export default function GameSummary() {
  return (
    <Layout>
      <QuestionPagination />
      <QuizScore />
      <QuizQuestion />
      <QuizAwsers />
      <div className="flex align-middle justify-center">
        <QuizButton className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'>
          Próxima Pergunta
        </QuizButton>
      </div>
    </Layout>
  )
}