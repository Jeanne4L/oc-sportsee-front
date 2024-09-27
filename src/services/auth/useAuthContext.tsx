import {
	createContext,
	FC,
	PropsWithChildren,
	useContext,
	useState,
} from 'react'

type AuthContextProps = {
	userId: number
	setUserId: React.Dispatch<React.SetStateAction<number>>
}

export const AuthContext = createContext<AuthContextProps>(
	{} as AuthContextProps
)

export const AuthContextProvider: FC<PropsWithChildren> = ({ children }) => {
	const [userId, setUserId] = useState<number>(12)

	return (
		<AuthContext.Provider value={{ userId, setUserId }}>
			{children}
		</AuthContext.Provider>
	)
}

export const useAuth = () => useContext(AuthContext)
