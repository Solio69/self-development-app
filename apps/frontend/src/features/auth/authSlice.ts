import { createSlice } from '@reduxjs/toolkit'
import { User } from '@prisma/client'
import { authApi } from '../../shared/api/authApi'

export interface AuthState {
  user: (User & { token: string }) | null
  isAuth: boolean
}

const initialState: AuthState = {
  user: null,
  isAuth: false,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,

  reducers: {
    logout: () => initialState,
  },

  extraReducers: (builder) => {
    builder.addMatcher(authApi.endpoints.login.matchFulfilled, (state, { payload }) => {
      state.isAuth = true
      state.user = payload
    })
    builder.addMatcher(authApi.endpoints.register.matchFulfilled, (state, { payload }) => {
      state.isAuth = true
      state.user = payload
    })
    builder.addMatcher(authApi.endpoints.current.matchFulfilled, (state, { payload }) => {
      state.isAuth = true
      state.user = payload
    })
  },
})

export const { logout } = authSlice.actions
export default authSlice.reducer
