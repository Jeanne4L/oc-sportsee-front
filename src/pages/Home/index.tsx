import { FC, Suspense, useContext } from 'react'

import { AuthContext } from '../../App'
import { Stats, StatsArrayItem } from '../../types/charts'
import { useUserData } from '../../helpers/queries/user/getUserData'
import { getDailyActivity } from '../../helpers/queries/chart/getDailyActivity'
import { getSessionsDuration } from '../../helpers/queries/chart/getSessionsDuration'
import { getPerformanceStats } from '../../helpers/queries/chart/getPerformanceStats'
import Header from '../../components/Header'
import LeftMenu from '../../components/LeftMenu'
import StatCard from '../../components/StatCard'
import Flame from '../../components/icon/flame'
import Meat from '../../components/icon/meat'
import Apple from '../../components/icon/apple'
import Burger from '../../components/icon/burger'
import DailyBarChart from '../../components/chart/DailyBarChart'
import SessionsLineChart from '../../components/chart/SessionsLineChart'
import PerformanceRadarChart from '../../components/chart/PerformanceRadarChart'
import ScoreRadialChart from '../../components/chart/ScoreRadialChart'
import Loader from '../../components/Loader'
import Loading from '../Loading'
import ErrorPage from '../ErrorPage'

const HomeContent: FC = () => {
	const authContext = useContext(AuthContext)

	if (!authContext) {
		return <p>Error: AuthContext not found</p>
	}

	const { userId } = authContext

	const {
		data: userData,
		loading: userLoading,
		error: userError,
	} = useUserData(userId)
	const {
		data: dailyData,
		loading: dailyLoading,
		error: dailyError,
	} = getDailyActivity(userId)
	const {
		data: sessionsData,
		loading: sessionsLoading,
		error: sessionsError,
	} = getSessionsDuration(userId)
	const {
		data: performanceData,
		loading: performanceLoading,
		error: performanceError,
	} = getPerformanceStats(userId)

	const loading =
		userLoading || dailyLoading || sessionsLoading || performanceLoading
	const error = userError || dailyError || sessionsError || performanceError

	if (loading) {
		return <Loading />
	}

	if (error) {
		return <ErrorPage message={error.message} code={error.response?.status} />
	}

	const stats = userData?.keyData
	const dailyScore = [{ score: (userData && userData.score * 100) ?? 0 }]
	const dailyActivities = dailyData?.sessions ?? []
	const sessionsDurations = sessionsData?.sessions ?? []
	const performanceDurations = performanceData?.data ?? []
	const performanceKind = performanceData?.kind || {}

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

	return (
		<>
			<Header />
			<LeftMenu />
			<div className='mt-header-height ml-sidebar-width block'>
				<div className='mx-xl pt-xl'>
					<h1 className='text-xl font-medium'>
						Bonjour{' '}
						<span className='text-red'>{userData.userInfos.firstName}</span>
					</h1>
					<p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
					<Suspense fallback={<Loader />}>
						<div className='flex gap-m my-xl'>
							<div className='flex flex-col flex-1 gap-l'>
								<DailyBarChart data={dailyActivities} />
								<div className='flex gap-s'>
									<SessionsLineChart data={sessionsDurations} />
									<PerformanceRadarChart
										data={performanceDurations}
										kind={performanceKind}
									/>
									<ScoreRadialChart data={dailyScore} />
								</div>
							</div>
							<div className='flex flex-col justify-between gap-6'>
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
					</Suspense>
				</div>
			</div>
		</>
	)
}

export default HomeContent
