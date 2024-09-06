import { SessionsDurationProps } from '../../../types/charts'
import { QueryResult, useQuery } from '../useQuery'

type SessionsLineChartProps = {
	sessions: SessionsDurationProps[]
}

export const useSessionsDuration = (
	userId: number
): QueryResult<SessionsLineChartProps> => {
	const { data, ...response } = useQuery<SessionsLineChartProps>(
		`/user/${userId}/average-sessions`
	)

	return {
		data: data ? { ...data } : undefined,
		...response,
	}
}
