import { FC } from 'react'

import Header from '../../components/Header'
import LeftMenu from '../../components/LeftMenu'
import { useUserData } from '../../helpers/queries/getUserData'

const HomeContent: FC = () => {
	const { data, loading, error } = useUserData(18)

	console.log(data)
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
				<h1>{data.userInfos.firstName}</h1>
			</div>
		</>
	)
}

export default HomeContent
