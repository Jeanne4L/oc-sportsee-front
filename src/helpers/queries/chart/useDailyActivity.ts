import { DailyActivitiesProps } from '../../../types/charts'
import { QueryResult, useQuery } from '../useQuery'

type DailyBarChartProps = {
	sessions: DailyActivitiesProps[]
}

export const useDailyActivity = (
	userId: number
): QueryResult<DailyBarChartProps> => {
	const { data, error, loading } = useQuery<DailyBarChartProps>(
		`/user/${userId}/activity`
	)

	return {
		data,
		error,
		loading,
	}
}
