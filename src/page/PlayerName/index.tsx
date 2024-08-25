import QuizButton from '../../components/Button'
import Layout from '../../components/Layout'
import { Link } from 'react-router-dom'
import QuizUserName from '../../components/UserName'

function PlayerName() {
  return (
    <Layout>
      <QuizUserName />
      <Link to="/categories" className='mt-5'>
        <QuizButton className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-full' buttonText='Iniciar jogo'/>
      </Link>
    </Layout>
  )
}

export default PlayerName
