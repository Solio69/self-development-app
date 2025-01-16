import { authApi } from '@/shared/api'
import { LOCAL_STORAGE_TOKEN_KEY } from '@/features/auth/constants'
import { createListenerMiddleware, isAnyOf } from '@reduxjs/toolkit'

export const authListener = createListenerMiddleware()

authListener.startListening({
  matcher: isAnyOf(authApi.endpoints.login.matchFulfilled, authApi.endpoints.register.matchFulfilled),

  effect: async (action, listenerApi) => {
    listenerApi.cancelActiveListeners()

    if (action.payload.token) {
      localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, action.payload.token)
    }
  },
})
