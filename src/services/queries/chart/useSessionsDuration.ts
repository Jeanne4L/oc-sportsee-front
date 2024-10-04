import { SessionsDurationProps } from '../../../types/charts'
import { useAuth } from '../../auth/useAuthContext'
import { QueryResult, useQuery } from '../useQuery'

type SessionsLineChartProps = {
  sessions: SessionsDurationProps[]
}

type MockedSessionsLineChartProps = {
  averageSessions: SessionsDurationProps[]
}

export const useSessionsDuration = (): QueryResult<SessionsLineChartProps> => {
  const { userId } = useAuth()

  const { data, ...response } = useQuery<
    SessionsLineChartProps | MockedSessionsLineChartProps
  >(`/user/${userId}/average-sessions`)

  const sessions = data
    ? 'sessions' in data
      ? data.sessions
      : data.averageSessions
    : undefined

  return {
    data: sessions ? { sessions } : undefined,
    ...response,
  }
}
