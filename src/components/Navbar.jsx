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
    <nav
      style={{
        backgroundColor: "#FFFFFF",
        borderBottom: "1px solid #B7DBC8",
        boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      }}
    >
      <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 1rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: "4rem" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Link to="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
              <span style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#285D66" }}>
                Nurse<span style={{ color: "#E1DF66" }}>Shelf</span>
              </span>
            </Link>
          </div>

          {/* Search bar - hidden on mobile */}
          <div style={{ display: "none", alignItems: "center", flex: "1", padding: "0 2rem" }} className="md:flex">
            <div style={{ width: "100%", maxWidth: "32rem", position: "relative" }}>
              <input
                type="text"
                placeholder="Search courses, topics, or modules..."
                style={{
                  width: "100%",
                  padding: "0.5rem 1rem 0.5rem 2.5rem",
                  borderRadius: "0.375rem",
                  border: "1px solid #B7DBC8",
                  outline: "none",
                }}
              />
              <Search style={{ position: "absolute", left: "0.75rem", top: "0.625rem", color: "#666666" }} size={18} />
            </div>
          </div>

          {/* Desktop navigation */}
          <div style={{ display: "none", alignItems: "center" }} className="md:flex">
            <NavButton icon={<Bell size={20} />} />
            <NavButton icon={<MessageSquare size={20} />} />
            <div style={{ position: "relative" }}>
              <button
                onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                style={{
                  padding: "0.25rem",
                  borderRadius: "9999px",
                  border: "2px solid #B7DBC8",
                  display: "flex",
                  alignItems: "center",
                  background: "none",
                  cursor: "pointer",
                }}
              >
                <User size={20} style={{ color: "#285D66" }} />
              </button>

              {isProfileMenuOpen && (
                <ProfileMenu user={user} handleLogout={handleLogout} setIsProfileMenuOpen={setIsProfileMenuOpen} />
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div style={{ display: "flex", alignItems: "center" }} className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              style={{
                padding: "0.5rem",
                borderRadius: "0.375rem",
                color: "#285D66",
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && <MobileMenu setIsMenuOpen={setIsMenuOpen} user={user} handleLogout={handleLogout} />}
    </nav>
  )
}

const NavButton = ({ icon }) => (
  <button
    style={{
      padding: "0.5rem",
      borderRadius: "9999px",
      marginRight: "1rem",
      position: "relative",
      background: "none",
      border: "none",
      cursor: "pointer",
    }}
  >
    {icon}
    <span
      style={{
        position: "absolute",
        top: "0.25rem",
        right: "0.25rem",
        width: "0.5rem",
        height: "0.5rem",
        backgroundColor: "#E1DF66",
        borderRadius: "9999px",
      }}
    ></span>
  </button>
)

const ProfileMenu = ({ user, handleLogout, setIsProfileMenuOpen }) => (
  <div
    style={{
      position: "absolute",
      right: "0",
      marginTop: "0.5rem",
      width: "12rem",
      backgroundColor: "#FFFFFF",
      borderRadius: "0.375rem",
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      padding: "0.25rem 0",
      zIndex: "10",
      border: "1px solid #B7DBC8",
    }}
  >
    <div style={{ padding: "1rem", borderBottom: "1px solid #B7DBC8" }}>
      <p style={{ fontSize: "0.875rem", fontWeight: "500", color: "#285D66" }}>{user?.name}</p>
      <p style={{ fontSize: "0.75rem", color: "#666666" }}>{user?.email}</p>
    </div>
    <ProfileMenuItem to="/profile" onClick={() => setIsProfileMenuOpen(false)}>
      Your Profile
    </ProfileMenuItem>
    {user?.role === "admin" && (
      <ProfileMenuItem to="/admin/notes" onClick={() => setIsProfileMenuOpen(false)}>
        Manage Notes
      </ProfileMenuItem>
    )}
    <button
      onClick={handleLogout}
      style={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        textAlign: "left",
        padding: "0.5rem 1rem",
        fontSize: "0.875rem",
        color: "#333333",
        background: "none",
        border: "none",
        cursor: "pointer",
      }}
    >
      <LogOut size={16} style={{ marginRight: "0.5rem" }} />
      Sign out
    </button>
  </div>
)

const ProfileMenuItem = ({ to, children, onClick }) => (
  <Link
    to={to}
    style={{
      display: "block",
      padding: "0.5rem 1rem",
      fontSize: "0.875rem",
      color: "#333333",
      textDecoration: "none",
    }}
    onClick={onClick}
  >
    {children}
  </Link>
)

const MobileMenu = ({ setIsMenuOpen, user, handleLogout }) => (
  <div style={{ backgroundColor: "#FFFFFF", borderBottom: "1px solid #B7DBC8" }} className="md:hidden">
    <div style={{ padding: "0.5rem" }}>
      <div style={{ padding: "0.75rem" }}>
        <div style={{ position: "relative" }}>
          <input
            type="text"
            placeholder="Search..."
            style={{
              width: "100%",
              padding: "0.5rem 1rem 0.5rem 2.5rem",
              borderRadius: "0.375rem",
              border: "1px solid #B7DBC8",
              outline: "none",
            }}
          />
          <Search style={{ position: "absolute", left: "0.75rem", top: "0.625rem", color: "#666666" }} size={18} />
        </div>
      </div>
      <MobileMenuItem to="/" onClick={() => setIsMenuOpen(false)}>
        Dashboard
      </MobileMenuItem>
      <MobileMenuItem to="/courses" onClick={() => setIsMenuOpen(false)}>
        Courses
      </MobileMenuItem>
      <MobileMenuItem to="/notes" onClick={() => setIsMenuOpen(false)}>
        Notes
      </MobileMenuItem>
      <MobileMenuItem to="/profile" onClick={() => setIsMenuOpen(false)}>
        Profile
      </MobileMenuItem>
      {user?.role === "admin" && (
        <MobileMenuItem to="/admin/notes" onClick={() => setIsMenuOpen(false)}>
          Manage Notes
        </MobileMenuItem>
      )}
      <button
        onClick={handleLogout}
        style={{
          display: "block",
          width: "100%",
          textAlign: "left",
          padding: "0.75rem",
          borderRadius: "0.375rem",
          fontSize: "1rem",
          fontWeight: "500",
          color: "#285D66",
          background: "none",
          border: "none",
          cursor: "pointer",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <LogOut size={16} style={{ marginRight: "0.5rem" }} />
          Sign out
        </div>
      </button>
    </div>
  </div>
)

const MobileMenuItem = ({ to, children, onClick }) => (
  <Link
    to={to}
    style={{
      display: "block",
      padding: "0.75rem",
      borderRadius: "0.375rem",
      fontSize: "1rem",
      fontWeight: "500",
      color: "#285D66",
      textDecoration: "none",
    }}
    onClick={onClick}
  >
    {children}
  </Link>
)

export default Navbar

