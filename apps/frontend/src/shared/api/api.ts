import { RootState } from '@/app/providers/store'
import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:8000/api',
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.user?.token || localStorage.getItem('token')

    if (token) {
      headers.set('Authorization', `Bearer ${token}`)
    }
  },
})

const baseApiWithRetry = retry(baseQuery, { maxRetries: 3 })

export const api = createApi({
  reducerPath: 'splitApi',
  baseQuery: baseApiWithRetry,
  refetchOnMountOrArgChange: true,
  endpoints: () => ({}),
})
