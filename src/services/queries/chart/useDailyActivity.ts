import {
  ApiDailyBarChartProps,
  MockDailyBarChartProps,
} from '../../../types/charts'
import { useAuth } from '../../auth/useAuthContext'
import { DailyDataFormatter } from '../../formatters/dailyDataFormatter'
import { QueryResult, useQuery } from '../useQuery'

export const useDailyActivity = (): QueryResult<MockDailyBarChartProps> => {
  const { userId } = useAuth()

  const { data, error, loading } = useQuery<
    MockDailyBarChartProps | ApiDailyBarChartProps
  >(`/user/${userId}/activity`)

  return {
    data: data ? DailyDataFormatter.format(data) : undefined,
    error,
    loading,
  }
}
