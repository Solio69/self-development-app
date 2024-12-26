import { api } from './api'
import { User } from '@prisma/client'

export type UserData = Omit<User, 'id'>
type ResponseLoginData = User & { token: string }

export const authApi = api.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<ResponseLoginData, UserData>({
      query: (userData) => ({
        url: '/user/login',
        method: 'POST',
        body: userData,
      }),
    }),

    register: build.mutation<ResponseLoginData, UserData>({
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
