import { LoginValues, RegisterValues, ResponseLoginData } from '@/features/auth/authTypes'
import { api } from './api'

export const authApi = api.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<ResponseLoginData, LoginValues>({
      query: (userData) => ({
        url: '/user/login',
        method: 'POST',
        body: userData,
      }),
    }),

    register: build.mutation<ResponseLoginData, RegisterValues>({
      query: (userData) => ({
        url: '/user/register',
        method: 'POST',
        body: userData,
      }),
    }),

    current: build.query<ResponseLoginData, void>({
      query: () => ({
        url: '/user/current',
        method: 'GET',
      }),
    }),
  }),
})

export const { useLoginMutation, useRegisterMutation, useCurrentQuery } = authApi

export const { login, register, current } = authApi.endpoints
