import axios from 'axios'
import { useState, useEffect } from 'react'

const BASE_URL = 'http://localhost:3000'

const axiosInstance = axios.create({
	baseURL: BASE_URL,
})

type ApiResponse<T> = {
	data: T
}

export type QueryResult<T> = {
	data: T | undefined
	error: Error | null | undefined
	loading: boolean
}

export const useQuery = <T>(query: string) => {
	const [data, setData] = useState<T>()
	const [error, setError] = useState<Error | null>()
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		if (data) {
			return
		}

		axiosInstance
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
