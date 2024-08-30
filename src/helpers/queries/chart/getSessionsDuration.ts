import { SessionsDurationType } from '../../../types/charts'
import { QueryResult, useQuery } from '../useQuery'

type SessionsLineChartType = {
	sessions: SessionsDurationType[]
}

export const getSessionsDuration = (
	userId: number
): QueryResult<SessionsLineChartType> => {
	const { data, ...response } = useQuery<SessionsLineChartType>(
		`/user/${userId}/average-sessions`
	)

	return {
		data: data
			? {
					...data,
			  }
			: undefined,
		...response,
	}
}
