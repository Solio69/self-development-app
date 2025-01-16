import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import auth from '../../features/auth/slice'
import { api } from '../../shared/api'
import { authListener } from '../middleware/authListener'

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    auth,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware).prepend(authListener.middleware),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>
