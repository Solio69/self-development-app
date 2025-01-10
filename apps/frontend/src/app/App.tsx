import { PATHS } from './routes/router'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import AuthChecker from './providers/AuthChecker'
import HomePage from '@/pages/home-page'
import LoginPage from '@/pages/login-page'
import RegisterPage from '@/pages/register-page'
import { useCurrentQuery } from '@/shared/api'
import { isAuthSelector } from '@/features/auth/selectors'
import { useSelector } from 'react-redux'
import './styles/globals.scss'

function App() {
  const isAuth = useSelector(isAuthSelector)

  return (
    <Router>
      <Routes>
        <Route path={PATHS.login} element={<LoginPage />} />
        <Route path={PATHS.register} element={<RegisterPage />} />
        <Route
          path="/"
          element={
            <AuthChecker>
              <HomePage />
            </AuthChecker>
          }
        >
          <Route index element={isAuth && <Navigate to={PATHS.notes} replace />} />
          <Route path={PATHS.notes} element={<div>notes</div>} />
          <Route path={PATHS.daySummary} element={<div>daySummary</div>} />
          <Route path={PATHS.trash} element={<div>trash</div>} />
          <Route path={PATHS.profile} element={<div>profile</div>} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
