import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Layout from "./components/Layout"
import Dashboard from "./pages/Dashboard"
import Courses from "./pages/Courses"
import CourseDetails from "./pages/CourseDetails"
import Profile from "./pages/Profile"
import NotFound from "./pages/NotFound"
import Login from "./pages/Login"
import Register from "./pages/Register"
import AdminNotes from "./pages/AdminNotes"
import UserNotes from "./pages/UserNotes"
//import Schedule from "./pages/Schedule"
import Certifications from "./pages/Certifications"
import Settings from "./pages/Settings"
import Help from "./pages/Help"
import { AuthProvider, useAuth } from "./context/AuthContext"

// Protected route component
const ProtectedRoute = ({ children }) => {
  const { user } = useAuth()

  if (!user) {
    return <Navigate to="/login" replace />
  }

  return children
}

// Admin route component
const AdminRoute = ({ children }) => {
  const { user } = useAuth()

  if (!user || user.role !== "admin") {
    return <Navigate to="/dashboard" replace />
  }

  return children
}

function AppRoutes() {
  const { user, loading } = useAuth()

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>
  }

  return (
    <Routes>
      <Route path="/login" element={!user ? <Login /> : <Navigate to="/" replace />} />
      <Route path="/register" element={!user ? <Register /> : <Navigate to="/" replace />} />

      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="courses" element={<Courses />} />
        <Route path="courses/:courseId" element={<CourseDetails />} />
        <Route path="profile" element={<Profile />} />
        <Route path="notes" element={<UserNotes />} />
        {/*<Route path="schedule" element={<Schedule />} />*/}
        <Route path="certifications" element={<Certifications />} />
        <Route path="settings" element={<Settings />} />
        <Route path="help" element={<Help />} />
        <Route
          path="admin/notes"
          element={
            <AdminRoute>
              <AdminNotes />
            </AdminRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppRoutes />
      </Router>
    </AuthProvider>
  )
}

export default App

