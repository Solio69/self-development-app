import { api } from './api'
import { User } from '@prisma/client'

export type UserData = Omit<User, 'passwordHash' | 'createdAt' | 'updatedAt'>

export type LoginValues = {
  email: string
  password: string
}

export type RegisterValues = {
  confirm: string
  email: string
  password: string
  username: string
}

type ResponseLoginData = UserData & { token?: string }

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
