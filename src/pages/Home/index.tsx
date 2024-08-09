import { FC, useContext } from 'react'

import Header from '../../components/Header'
import LeftMenu from '../../components/LeftMenu'
import { useUserData } from '../../helpers/queries/user/getUserData'
import { AuthContext } from '../../App'

const HomeContent: FC = () => {
	const authContext = useContext(AuthContext)

	if (!authContext) {
		return <p>Error: AuthContext not found</p>
	}

	const { userId } = authContext

	const { data, loading, error } = useUserData(userId)

	if (loading) {
		return <p>Loading...</p>
	}

	if (error ?? !data) {
		return <p>{error?.message ?? 'No userData have been found'}</p>
	}

	return (
		<>
			<Header />
			<LeftMenu />
			<div className='mt-header-height ml-sidebar-width block'>
				<div className='mx-xxl pt-xl'>
					<h1 className='text-xl font-medium'>
						Bonjour <span className='text-red'>{data.userInfos.firstName}</span>
					</h1>
					<p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
				</div>
			</div>
		</>
	)
}

export default HomeContent
