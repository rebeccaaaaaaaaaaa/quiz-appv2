import QuizButton from '../../components/Button'
import Layout from '../../components/Layout'
import QuizLogo from '../../components/Logo'
import Logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

function App() {
  return (
    <Layout>
      <QuizLogo src={Logo} alt="Alura Quiz" className='w-96'/>
      <Link to="/categories">
        <QuizButton className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-full' buttonText='Iniciar jogo'/>
      </Link>
    </Layout>
  )
}

export default App
