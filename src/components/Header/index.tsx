import { useContext } from 'react'
import Logo from '../icon/logo'
import { AuthContext } from '../../App'

const Header = () => {
	const authContext = useContext(AuthContext)

	if (!authContext) {
		return null
	}

	const { userId, setUserId } = authContext
	const usersId = [12, 18]

	const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setUserId(Number(e.target.value))
	}

	return (
		<header className='bg-black p-s pr-xxl flex gap-xxl justify-between items-center fixed top-0 w-full shadow-header'>
			<Logo />
			<ul className='flex-1 flex justify-between ml-xxl'>
				<li>
					<a href='#' className='text-white text-lg'>
						Accueil
					</a>
				</li>
				<li>
					<a href='#' className='text-white text-lg'>
						Profil
					</a>
				</li>
				<li>
					<a href='#' className='text-white text-lg'>
						Réglage
					</a>
				</li>
				<li>
					<a href='#' className='text-white text-lg'>
						Communauté
					</a>
				</li>
			</ul>
			<select
				className='bg-red text-black text-center outline-none appearance-none rounded-full h-9 w-9 font-medium cursor-pointer'
				name='users'
				onChange={handleSelectChange}
			>
				{usersId.map((id) => (
					<option className='bg-white' key={id} value={id}>
						{id}
					</option>
				))}
			</select>
		</header>
	)
}

export default Header
