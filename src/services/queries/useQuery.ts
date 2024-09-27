import axios, { AxiosError } from 'axios'
import { useState, useEffect } from 'react'

import generateError from '../../helpers/generateError'

const BASE_URL = 'http://localhost:3000'

const axiosInstance = axios.create({
	baseURL: BASE_URL,
})

type ApiResponse<T> = {
	data: T
}

export type QueryResult<T> = {
	data: T | undefined
	error: AxiosError | null | undefined
	loading: boolean
}

export const useQuery = <T>(query: string) => {
	const [data, setData] = useState<T>()
	const [error, setError] = useState<AxiosError | null>()
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		axiosInstance
			.get<ApiResponse<T>>(query)
			.then((response) => {
				setData(response.data.data)
			})
			.catch((error) => {
				setError(generateError(error))
			})
			.finally(() => setLoading(false))
	}, [query])

	return {
		data,
		error,
		loading,
	}
}
