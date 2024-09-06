import { PerformanceRadarChartProps } from '../../../types/charts'
import { QueryResult, useQuery } from '../useQuery'

export const usePerformanceStats = (
	userId: number
): QueryResult<PerformanceRadarChartProps> => {
	const { data, ...response } = useQuery<PerformanceRadarChartProps>(
		`/user/${userId}/performance`
	)

	return {
		data: data ? { ...data } : undefined,
		...response,
	}
}
