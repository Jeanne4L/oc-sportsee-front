import { UserApiData, UserData, UserDataFormatter } from '../../../types/user'
import { useAuth } from '../../auth/useAuthContext'
import { QueryResult, useQuery } from '../useQuery'

export const useUserData = (): QueryResult<UserData> => {
  const { userId } = useAuth()

  const { data, ...response } = useQuery<UserApiData>(`/user/${userId}`)

  return {
    data: data ? UserDataFormatter.format(data) : undefined,
    ...response,
  }
}
