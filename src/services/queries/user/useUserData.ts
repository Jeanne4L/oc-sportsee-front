import { UserApiData, UserData } from '../../../types/user'
import { useAuth } from '../../auth/useAuthContext'
import { QueryResult, useQuery } from '../useQuery'

export const useUserData = (): QueryResult<UserData> => {
	const { userId } = useAuth()

	const { data, ...response } = useQuery<UserApiData>(`/user/${userId}`)

	return {
		data: data
			? { ...data, score: data.score ?? data.todayScore ?? 0 }
			: undefined,
		...response,
	}
}
