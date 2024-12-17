import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:8000/api',
})

const baseApiWithRetry = retry(baseQuery, { maxRetries: 3 })

export const api = createApi({
  reducerPath: 'splitApi',
  baseQuery: baseApiWithRetry,
  refetchOnMountOrArgChange: true,
  endpoints: () => ({}),
})
