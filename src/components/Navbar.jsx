"use client"

import { Link } from "react-router-dom"
import { useState } from "react"
import { Search, Bell, MessageSquare, User, Menu, X, LogOut } from "lucide-react"
import { useAuth } from "../context/AuthContext"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false)
  const { user, logout } = useAuth()

  const handleLogout = () => {
    logout()
    setIsProfileMenuOpen(false)
  }

  return (
    <nav className="bg-white border-b border-light shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-teal">
                Nurse<span className="text-salmon">Shelf</span>
              </span>
            </Link>
          </div>

          {/* Search bar - hidden on mobile */}
          <div className="hidden md:flex items-center flex-1 px-8">
            <div className="w-full max-w-lg relative">
              <input
                type="text"
                placeholder="Search courses, topics, or modules..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-light focus:outline-none focus:ring-2 focus:ring-mint"
              />
              <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
            </div>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-light/50 relative">
              <Bell size={20} className="text-gray-600" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-salmon rounded-full"></span>
            </button>
            <button className="p-2 rounded-full hover:bg-light/50 relative">
              <MessageSquare size={20} className="text-gray-600" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-salmon rounded-full"></span>
            </button>
            <div className="relative">
              <button
                onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                className="p-1 rounded-full border-2 border-mint flex items-center"
              >
                <User size={20} className="text-teal" />
              </button>

              {isProfileMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 border border-light">
                  <div className="px-4 py-2 border-b border-light">
                    <p className="text-sm font-medium">{user?.name}</p>
                    <p className="text-xs text-gray-500">{user?.email}</p>
                  </div>
                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-light/50"
                    onClick={() => setIsProfileMenuOpen(false)}
                  >
                    Your Profile
                  </Link>
                  {user?.role === "admin" && (
                    <Link
                      to="/admin/notes"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-light/50"
                      onClick={() => setIsProfileMenuOpen(false)}
                    >
                      Manage Notes
                    </Link>
                  )}
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-light/50"
                  >
                    <div className="flex items-center">
                      <LogOut size={16} className="mr-2" />
                      Sign out
                    </div>
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-600 hover:bg-light/50"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-light">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <div className="px-3 py-2">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-light focus:outline-none focus:ring-2 focus:ring-mint"
                />
                <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
              </div>
            </div>
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-teal hover:bg-light/50"
              onClick={() => setIsMenuOpen(false)}
            >
              Dashboard
            </Link>
            <Link
              to="/courses"
              className="block px-3 py-2 rounded-md text-base font-medium text-teal hover:bg-light/50"
              onClick={() => setIsMenuOpen(false)}
            >
              Courses
            </Link>
            <Link
              to="/notes"
              className="block px-3 py-2 rounded-md text-base font-medium text-teal hover:bg-light/50"
              onClick={() => setIsMenuOpen(false)}
            >
              Notes
            </Link>
            <Link
              to="/profile"
              className="block px-3 py-2 rounded-md text-base font-medium text-teal hover:bg-light/50"
              onClick={() => setIsMenuOpen(false)}
            >
              Profile
            </Link>
            {user?.role === "admin" && (
              <Link
                to="/admin/notes"
                className="block px-3 py-2 rounded-md text-base font-medium text-teal hover:bg-light/50"
                onClick={() => setIsMenuOpen(false)}
              >
                Manage Notes
              </Link>
            )}
            <button
              onClick={handleLogout}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-teal hover:bg-light/50"
            >
              <div className="flex items-center">
                <LogOut size={16} className="mr-2" />
                Sign out
              </div>
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar

