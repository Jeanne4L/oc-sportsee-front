import { SessionsDurationProps } from '../../../types/charts'
import { useAuth } from '../../auth/useAuthContext'
import { QueryResult, useQuery } from '../useQuery'

type SessionsLineChartProps = {
	sessions: SessionsDurationProps[]
}

export const useSessionsDuration = (): QueryResult<SessionsLineChartProps> => {
	const { userId } = useAuth()

	const { data, ...response } = useQuery<SessionsLineChartProps>(
		`/user/${userId}/average-sessions`
	)

	return {
		data: data ? { ...data } : undefined,
		...response,
	}
}
