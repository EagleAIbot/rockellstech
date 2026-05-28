import './App.css'
import { Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { JobTrackerPage } from './pages/JobTrackerPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/apply" element={<JobTrackerPage />} />
    </Routes>
  )
}
