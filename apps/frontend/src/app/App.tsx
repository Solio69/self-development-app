import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { PATHS } from './routes/router'

const router = createBrowserRouter([
  {
    path: PATHS.home,
    element: <div>Hello world!</div>,
  },
  {
    path: PATHS.login,
    element: <div>Login</div>,
  },
  {
    path: PATHS.register,
    element: <div>Register</div>,
  },
  {
    path: PATHS.profile,
    element: <div>Profile</div>,
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
