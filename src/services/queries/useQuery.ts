import { useState, useEffect } from 'react'
import axios, { AxiosError } from 'axios'

import generateError from '../../helpers/generateError'

const apiUrl = import.meta.env.VITE_API_URL
const BASE_URL = apiUrl != '' ? apiUrl : '/data/data.json'

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
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get<ApiResponse<T>>(query)
        setData(response.data.data)
      } catch (error) {
        if (axios.isAxiosError(error)) {
          setError(generateError(error))
        }
      } finally {
        setLoading(false)
      }
    }

    if (process.env.NODE_ENV !== 'production') {
      fetch('/src/data/data.json')
        .then((response) => response.json())
        .then((mockData) => {
          const userId = query.split('/')[2]
          if (mockData.data.user[userId]) {
            setData(mockData.data.user[userId])
          }
        })
        .catch((error) => {
          setError(generateError(error))
        })
        .finally(() => setLoading(false))
    } else {
      fetchData()
    }
  }, [query])

  return {
    data,
    error,
    loading,
  }
}
