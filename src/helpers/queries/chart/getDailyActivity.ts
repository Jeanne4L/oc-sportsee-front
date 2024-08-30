import { DailyActivitiesType } from '../../../types/charts'
import { QueryResult, useQuery } from '../useQuery'

type DailyBarChartType = {
	sessions: DailyActivitiesType[]
}

export const getDailyActivity = (
	userId: number
): QueryResult<DailyBarChartType> => {
	const { data, ...response } = useQuery<DailyBarChartType>(
		`/user/${userId}/activity`
	)

	return {
		data: data
			? {
					...data,
			  }
			: undefined,
		...response,
	}
}
