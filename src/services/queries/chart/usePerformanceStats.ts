import { PerformanceRadarChartProps } from '../../../types/charts'
import { useAuth } from '../../auth/useAuthContext'
import { QueryResult, useQuery } from '../useQuery'

type MockPerformanceRadarChartProps = {
  performance: PerformanceRadarChartProps
}

export const usePerformanceStats =
  (): QueryResult<PerformanceRadarChartProps> => {
    const { userId } = useAuth()

    const { data, ...response } = useQuery<
      PerformanceRadarChartProps | MockPerformanceRadarChartProps
    >(`/user/${userId}/performance`)

    let performances: PerformanceRadarChartProps | undefined

    if (data) {
      if ('performance' in data) {
        performances = data.performance
      } else {
        performances = data
      }
    }

    return {
      data: performances || undefined,
      ...response,
    }
  }
