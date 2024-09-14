import { FC, useContext } from 'react'

import { AuthContext } from '../../App'
import Header from '../../components/Header'
import StatCard from '../../components/StatCard'
import DailyBarChart from '../../components/chart/DailyBarChart'
import SessionsLineChart from '../../components/chart/SessionsLineChart'
import PerformanceRadarChart from '../../components/chart/PerformanceRadarChart'
import ScoreRadialChart from '../../components/chart/ScoreRadialChart'
import Sidebar from '../../components/Sidebar'
import Loading from '../Loading'
import ErrorPage from '../ErrorPage'
import { useUserData } from '../../helpers/queries/user/useUserData'
import { generateStatsArray } from './helpers/generateStatsArray'
import { useDailyActivity } from '../../helpers/queries/chart/useDailyActivity'
import { useSessionsDuration } from '../../helpers/queries/chart/useSessionsDuration'
import { usePerformanceStats } from '../../helpers/queries/chart/usePerformanceStats'

const HomeContent: FC = () => {
	const authContext = useContext(AuthContext)
	const userId = authContext?.userId

	const {
		data: userData,
		loading: userLoading,
		error: userError,
	} = useUserData(userId ?? 0)
	const {
		data: dailyData,
		loading: dailyLoading,
		error: dailyError,
	} = useDailyActivity(userId ?? 0)
	const {
		data: sessionsData,
		loading: sessionsLoading,
		error: sessionsError,
	} = useSessionsDuration(userId ?? 0)
	const {
		data: performanceData,
		loading: performanceLoading,
		error: performanceError,
	} = usePerformanceStats(userId ?? 0)

	const loading =
		userLoading || dailyLoading || sessionsLoading || performanceLoading
	const error = userError || dailyError || sessionsError || performanceError

	if (loading) return <Loading />

	if (error)
		return <ErrorPage message={error.message} code={error.response?.status} />
	if (!userData)
		return <ErrorPage message='Aucune donnée disponible' code={404} />

	const stats = userData.keyData
	const dailyScore = userData.score * 100 ?? 0
	const dailyActivities = dailyData?.sessions ?? []
	const sessionsDurations = sessionsData?.sessions ?? []
	const performanceDurations = performanceData?.data ?? []
	const performanceKind = performanceData?.kind || {}

	if (!stats) return null

	const statsArray = generateStatsArray(stats)

	return (
		<>
			<Header />
			<Sidebar />
			<div className='mt-header-height ml-sidebar-width block'>
				<div className='mx-xl xl:mx-xxl pt-xl'>
					<h1 className='text-xl font-medium'>
						Bonjour{' '}
						<span className='text-red'>{userData.userInfos.firstName}</span>
					</h1>
					<p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
					<div className='flex gap-m my-xxl'>
						<div className='flex flex-col flex-1 gap-l'>
							<DailyBarChart data={dailyActivities} />
							<div className='flex gap-s'>
								<SessionsLineChart data={sessionsDurations} />
								<PerformanceRadarChart
									data={performanceDurations}
									kind={performanceKind}
								/>
								<ScoreRadialChart score={dailyScore} />
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
				</div>
			</div>
		</>
	)
}

export default HomeContent
