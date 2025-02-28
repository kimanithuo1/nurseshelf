"use client"

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const { login } = useAuth()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      // In a real app, you would validate credentials with an API
      // For demo purposes, we'll use mock data

      // Demo admin user
      if (formData.email === "admin@nurseshelf.com" && formData.password === "admin123") {
        login({
          id: 1,
          name: "Admin User",
          email: "admin@nurseshelf.com",
          role: "admin",
        })
        navigate("/")
        return
      }

      // Demo regular user
      if (formData.email === "user@nurseshelf.com" && formData.password === "user123") {
        login({
          id: 2,
          name: "Regular User",
          email: "user@nurseshelf.com",
          role: "user",
        })
        navigate("/")
        return
      }

      // If credentials don't match demo users
      setError("Invalid email or password")
    } catch (err) {
      setError("Failed to log in. Please try again.")
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-light/30 px-4">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-teal">
            Nurse<span className="text-salmon">Shelf</span>
          </h1>
          <h2 className="mt-6 text-2xl font-bold">Sign in to your account</h2>
          <p className="mt-2 text-sm text-gray-600">
            Or{" "}
            <Link to="/register" className="font-medium text-teal hover:text-teal/80">
              create a new account
            </Link>
          </p>
        </div>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <span className="block sm:inline">{error}</span>
          </div>
        )}

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-light rounded-md shadow-sm focus:outline-none focus:ring-mint focus:border-mint"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={formData.password}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-light rounded-md shadow-sm focus:outline-none focus:ring-mint focus:border-mint"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-teal focus:ring-mint border-light rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a href="#" className="font-medium text-teal hover:text-teal/80">
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal hover:bg-teal/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-mint disabled:opacity-50"
            >
              {loading ? "Signing in..." : "Sign in"}
            </button>
          </div>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-light"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Demo Accounts</span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-3">
            <div className="border border-light rounded-md p-3">
              <p className="text-sm font-medium">Admin User</p>
              <p className="text-xs text-gray-500">Email: admin@nurseshelf.com</p>
              <p className="text-xs text-gray-500">Password: admin123</p>
            </div>

            <div className="border border-light rounded-md p-3">
              <p className="text-sm font-medium">Regular User</p>
              <p className="text-xs text-gray-500">Email: user@nurseshelf.com</p>
              <p className="text-xs text-gray-500">Password: user123</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login

