import { FC, useContext } from 'react'

import Header from '../../components/Header'
import LeftMenu from '../../components/LeftMenu'
import { useUserData } from '../../helpers/queries/user/getUserData'
import { AuthContext } from '../../App'
import StatCard from '../../components/StatCard'
import Flame from '../../components/icon/flame'
import Meat from '../../components/icon/meat'
import Apple from '../../components/icon/apple'
import Burger from '../../components/icon/burger'

type StatData = {
	unit: string
	label: string
	icon: JSX.Element
	color: string
}

type Stats = {
	calorieCount: StatData
	proteinCount: StatData
	carbohydrateCount: StatData
	lipidCount: StatData
}

type StatsArrayItem = {
	value: number
	unit: string
	label: string
	icon: JSX.Element
	color: string
}

const HomeContent: FC = () => {
	const authContext = useContext(AuthContext)

	if (!authContext) {
		return <p>Error: AuthContext not found</p>
	}

	const { userId } = authContext
	const { data, loading, error } = useUserData(userId)
	const stats = data?.keyData

	if (!stats) {
		return null
	}

	const statsData: Stats = {
		calorieCount: {
			unit: 'kCal',
			label: 'Calories',
			icon: <Flame />,
			color: 'redBg',
		},
		proteinCount: {
			unit: 'g',
			label: 'Protéines',
			icon: <Meat />,
			color: 'blueBg',
		},
		carbohydrateCount: {
			unit: 'g',
			label: 'Glucides',
			icon: <Apple />,
			color: 'yellowBg',
		},
		lipidCount: {
			unit: 'g',
			label: 'Lipides',
			icon: <Burger />,
			color: 'pinkBg',
		},
	}

	const statsArray: StatsArrayItem[] = []

	Object.entries(stats).forEach(([key, value]) => {
		const unit = statsData[key as keyof Stats].unit
		const label = statsData[key as keyof Stats].label
		const icon = statsData[key as keyof Stats].icon
		const color = statsData[key as keyof Stats].color

		statsArray.push({ value, unit, label, icon, color })
	})

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
					<div>
						<div>gauche</div>
						<div className='flex flex-col gap-6 '>
							{statsArray.map((stat) => (
								<StatCard
									key={`${stat.value}-${stat.unit}-${stat.label}`}
									Icon={stat.icon}
									data={`${stat.value}${stat.unit}`}
									label={stat.label}
									color={stat.color}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default HomeContent
