import { PerformanceRadarChartProps } from '../../../types/charts'
import { useAuth } from '../../auth/useAuthContext'
import { QueryResult, useQuery } from '../useQuery'

export const usePerformanceStats =
	(): QueryResult<PerformanceRadarChartProps> => {
		const { userId } = useAuth()

		const { data, ...response } = useQuery<PerformanceRadarChartProps>(
			`/user/${userId}/performance`
		)

		return {
			data: data ? { ...data } : undefined,
			...response,
		}
	}
