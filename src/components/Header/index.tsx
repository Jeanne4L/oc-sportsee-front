import React from 'react'

import Logo from '../icon/logo'

const Header = () => {
	return (
		<header className='bg-black p-s pr-xxl flex gap-xxl justify-between items-center fixed top-0 w-full'>
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
		</header>
	)
}

export default Header
