import { authApi } from '@/shared/api'
import { createListenerMiddleware, isAnyOf } from '@reduxjs/toolkit'

export const authListener = createListenerMiddleware()

authListener.startListening({
  matcher: isAnyOf(authApi.endpoints.login.matchFulfilled, authApi.endpoints.register.matchFulfilled),

  effect: async (action, listenerApi) => {
    listenerApi.cancelActiveListeners()

    if (action.payload.token) {
      localStorage.setItem('token', action.payload.token)
    }
  },
})
