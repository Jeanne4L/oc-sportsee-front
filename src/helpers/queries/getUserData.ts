import axios from 'axios'

import { UserApiData, UserData } from '../../types/user'
import { useEffect, useState } from 'react'

type ApiResponse<T> = {
	data: T
}

const useQuery = <T>(query: string) => {
	const [data, setData] = useState<T>()
	const [error, setError] = useState<Error | null>()
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		if (data) {
			return
		}

		axios
			.get<ApiResponse<T>>(query)
			.then((response) => {
				setData(response.data.data)
			})
			.catch(setError)
			.finally(() => setLoading(false))
	}, [])

	return {
		data,
		error,
		loading,
	}
}

type QueryResult<T> = {
	data: T | undefined
	error: Error | null | undefined
	loading: boolean
}

export const useUserData = (userId: number): QueryResult<UserData> => {
	const { data, ...response } = useQuery<UserApiData>(
		`http://localhost:3000/user/${userId}`
	)

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
