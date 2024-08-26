import QuizButton from '../../components/Button'
import Layout from '../../components/Layout'
import { Link } from 'react-router-dom'
import QuizUserName from '../../components/UserName'
import { useQuiz } from '../../hooks/useQuiz';

function PlayerName() {
  const { playerName } = useQuiz();
  return (
    <Layout>
      <QuizUserName />
      <Link to="/categories" className='mt-5'>
        <QuizButton
          className={!playerName ? 'bg-gray-100 text-gray-500 cursor-not-allowed font-bold py-2 px-4 rounded w-full' : 'bg-green-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-full'}
          buttonText='Iniciar jogo'
          disabled={!playerName}
        />
      </Link>
    </Layout>
  )
}

export default PlayerName
