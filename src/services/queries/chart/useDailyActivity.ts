import { DailyActivitiesProps } from '../../../types/charts'
import { useAuth } from '../../auth/useAuthContext'
import { QueryResult, useQuery } from '../useQuery'

export type ApiDailyBarChartProps = {
  activity: {
    sessions: DailyActivitiesProps[]
  }
}

export type MockDailyBarChartProps = {
  sessions: DailyActivitiesProps[]
}

export const useDailyActivity = (): QueryResult<MockDailyBarChartProps> => {
  const { userId } = useAuth()

  const { data, error, loading } = useQuery<
    MockDailyBarChartProps | ApiDailyBarChartProps
  >(`/user/${userId}/activity`)

  let sessions: DailyActivitiesProps[] | undefined

  if (data) {
    if ('activity' in data) {
      sessions = data.activity.sessions
    } else {
      sessions = data.sessions
    }
  }

  return {
    data: sessions ? { sessions } : undefined,
    error,
    loading,
  }
}
