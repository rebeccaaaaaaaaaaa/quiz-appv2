import QuizAwsers from "../Awnsers";
import QuizButton from "../Button";
import Layout from "../Layout";
import QuizQuestion from "../Question";
import QuestionPagination from "../QuestionPagination";
import QuizScore from "../Score";
import { useQuiz } from "../../hooks/useQuiz";
import { Link } from "react-router-dom";

export default function GameSummary() {
  const {
    nextQuestion,
    isLastQuestion,
    checkIfLastQuestionIsReply,
    setIsAnswered,
  } = useQuiz();
  const isLastQuestionReply = checkIfLastQuestionIsReply();
  return (
    <Layout>
      <QuestionPagination />
      <QuizScore />
      <QuizQuestion />
      <QuizAwsers />
        {isLastQuestion && isLastQuestionReply && (
          <Link to="/feedback">
            <QuizButton className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full">
              Ver Resumo
            </QuizButton>
          </Link>
        )}
        {!isLastQuestionReply && (
          <QuizButton
            className="bg-green-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-full"
            buttonText="Proximo"
            onClick={() => {
              setIsAnswered(false);
              nextQuestion();
            }}
          />
        )}
    </Layout>
  );
}
