import { authApi } from '@/shared/api'
import { createListenerMiddleware } from '@reduxjs/toolkit'

// Создаём instance listenerMiddleware, который будет использоваться для отслеживания действий
export const authListener = createListenerMiddleware()

// Настраиваем listener для обработки успешного выполнения запроса на авторизацию
authListener.startListening({
  // Указываем matcher для отслеживания выполнения эндпоинта login
  // matcher позволяет слушать конкретные действия (в данном случае, успешное выполнение запроса)
  matcher: authApi.endpoints.login.matchFulfilled,
  effect: async (action, listenerApi) => {
    // Отменяем все активные слушатели, если они есть
    listenerApi.cancelActiveListeners()

    // Проверяем, если сервер вернул токен в payload
    if (action.payload.token) {
      // Сохраняем токен в localStorage для последующего использования (например, в заголовках запросов)
      localStorage.setItem('token', action.payload.token)
    }
  },
})
