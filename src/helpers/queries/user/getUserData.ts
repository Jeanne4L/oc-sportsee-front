import { UserApiData, UserData } from '../../../types/user'
import { QueryResult, useQuery } from '../useQuery'

export const useUserData = (userId: number): QueryResult<UserData> => {
	const { data, ...response } = useQuery<UserApiData>(`/user/${userId}`)

	return {
		data: data
			? {
					...data,
					score: data.score ?? data.todayScore ?? 0,
			  }
			: undefined,
		...response,
	}
}
