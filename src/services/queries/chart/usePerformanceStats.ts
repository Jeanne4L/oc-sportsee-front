import {
  ApiPerformanceRadarChartProps,
  MockPerformanceRadarChartProps,
} from '../../../types/charts'
import { useAuth } from '../../auth/useAuthContext'
import { PerformanceDataFormatter } from '../../formatters/performanceDataFormatter'
import { QueryResult, useQuery } from '../useQuery'

export const usePerformanceStats =
  (): QueryResult<ApiPerformanceRadarChartProps> => {
    const { userId } = useAuth()

    const { data, ...response } = useQuery<
      ApiPerformanceRadarChartProps | MockPerformanceRadarChartProps
    >(`/user/${userId}/performance`)

    return {
      data: data ? PerformanceDataFormatter.format(data) : undefined,
      ...response,
    }
  }
