import './App.css'
import Home from './pages/Home'
import { AuthContextProvider } from './services/auth/useAuthContext'

const App = () => {
	return (
		<AuthContextProvider>
			<Home />
		</AuthContextProvider>
	)
}

export default App
