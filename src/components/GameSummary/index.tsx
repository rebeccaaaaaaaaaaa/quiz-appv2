import QuizAwsers from "../Awnsers";
import QuizButton from "../Button";
import Layout from "../Layout";
import QuizQuestion from "../Question";
import QuestionPagination from "../QuestionPagination";
import QuizScore from "../Score";
import { useQuiz } from "../../hooks/useQuiz";
import { Link } from "react-router-dom";

export default function GameSummary() {
  const { nextQuestion, isLastQuestion, restartGame, checkIfLastQuestionIsReply, setIsAnswered } = useQuiz();
  const isLastQuestionReply = checkIfLastQuestionIsReply();
  return (
    <Layout>
      <QuestionPagination />
      <QuizScore />
      <QuizQuestion />
      <QuizAwsers />
      <div className="flex align-middle justify-center gap-7">
       <QuizButton className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' buttonText="Reiniciar" onClick={() => restartGame()}/>
       {
          isLastQuestion && isLastQuestionReply && (
            <QuizButton className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'>
              <Link to="/feedback">
                Ver Resumo
              </Link>
            </QuizButton>
          )
        }
       {
         !isLastQuestionReply && (
            <QuizButton className='bg-green-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded' buttonText="Proximo" onClick={() => {
              setIsAnswered(false)
              nextQuestion()
            }}/>
          )
       }
      </div>
    </Layout>
  )
}