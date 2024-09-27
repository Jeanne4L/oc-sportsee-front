import { DailyActivitiesProps } from '../../../types/charts'
import { useAuth } from '../../auth/useAuthContext'
import { QueryResult, useQuery } from '../useQuery'

type DailyBarChartProps = {
	sessions: DailyActivitiesProps[]
}

export const useDailyActivity = (): QueryResult<DailyBarChartProps> => {
	const { userId } = useAuth()

	const { data, error, loading } = useQuery<DailyBarChartProps>(
		`/user/${userId}/activity`
	)

	return {
		data,
		error,
		loading,
	}
}
