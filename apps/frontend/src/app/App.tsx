import { PATHS } from './routes/router'
import HomePage from '../pages/home-page/HomePage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './styles/globals.scss'

function App() {
  return (
    <Router>
      <Routes>
        <Route path={PATHS.login} element={<div>login</div>} />
        <Route path={PATHS.register} element={<div>register</div>} />
        <Route path="/" element={<HomePage />}>
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
