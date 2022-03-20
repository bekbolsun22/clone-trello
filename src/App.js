import { useSelector } from 'react-redux'
import './App.css'
import LoginPage from './components/loginPage/LoginPage'
import Main from './components/mainPage/Main'

function App() {
	const isAuth = useSelector((state) => state.auth.isAuth)
	const content = isAuth ? <Main /> : <LoginPage />
	return <div className='App'>{content}</div>
}

export default App
