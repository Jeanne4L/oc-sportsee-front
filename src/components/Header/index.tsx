import Logo from '../icon/logo'
import { useAuth } from '../../services/auth/useAuthContext'

const Header = () => {
	const { setUserId } = useAuth()

	const usersId = [12, 18]

	const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setUserId(Number(e.target.value))
	}

	return (
		<header className='bg-black p-s pr-xxl flex gap-xxl justify-between items-center fixed z-50 top-0 w-full shadow-header'>
			<Logo />
			<ul className='flex-1 flex justify-between ml-xxl'>
				<li>
					<a href='#' className='text-white text-base'>
						Accueil
					</a>
				</li>
				<li>
					<a href='#' className='text-white text-base'>
						Profil
					</a>
				</li>
				<li>
					<a href='#' className='text-white text-base'>
						Réglage
					</a>
				</li>
				<li>
					<a href='#' className='text-white text-base'>
						Communauté
					</a>
				</li>
			</ul>
			<select
				className='bg-black text-red border-2 border-red text-center text-s outline-none appearance-none rounded-full h-8 w-8 font-medium cursor-pointer'
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
