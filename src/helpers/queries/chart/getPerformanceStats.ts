import { PerformanceRadarChartType } from '../../../types/charts'
import { QueryResult, useQuery } from '../useQuery'

export const getPerformanceStats = (
	userId: number
): QueryResult<PerformanceRadarChartType> => {
	const { data, ...response } = useQuery<PerformanceRadarChartType>(
		`/user/${userId}/performance`
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
