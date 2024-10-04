import {
  MockSessionsLineChartProps,
  ApiSessionsLineChartProps,
} from '../../../types/charts'
import { useAuth } from '../../auth/useAuthContext'
import { SessionsDataFormatter } from '../../formatters/sessionsDataFormatter'
import { QueryResult, useQuery } from '../useQuery'

export const useSessionsDuration =
  (): QueryResult<ApiSessionsLineChartProps> => {
    const { userId } = useAuth()

    const { data, ...response } = useQuery<
      ApiSessionsLineChartProps | MockSessionsLineChartProps
    >(`/user/${userId}/average-sessions`)

    return {
      data: data ? SessionsDataFormatter.format(data) : undefined,
      ...response,
    }
  }
