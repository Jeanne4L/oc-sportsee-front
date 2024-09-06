import { useState } from 'react'
import { createContext } from 'react'

import './App.css'
import Home from './pages/Home'

type AuthContextProps = {
	userId: number
	setUserId: React.Dispatch<React.SetStateAction<number>>
}

export const AuthContext = createContext<AuthContextProps | undefined>(
	undefined
)

const App = () => {
	const [userId, setUserId] = useState<number>(12)

	return (
		<AuthContext.Provider value={{ userId, setUserId }}>
			<Home />
		</AuthContext.Provider>
	)
}

export default App
