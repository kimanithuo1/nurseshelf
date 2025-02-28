"use client"

import { Link, useLocation } from "react-router-dom"
import {
  Home,
  BookOpen,
  Calendar,
  Award,
  FileText,
  Settings,
  HelpCircle,
  ChevronRight,
  FileTextIcon as FileText2,
} from "lucide-react"
import { useState } from "react"
import { useAuth } from "../context/AuthContext"

const Sidebar = () => {
  const location = useLocation()
  const [collapsed, setCollapsed] = useState(false)
  const { user } = useAuth()

  const menuItems = [
    { path: "/", icon: <Home size={20} />, label: "Dashboard" },
    { path: "/courses", icon: <BookOpen size={20} />, label: "Courses" },
    { path: "/notes", icon: <FileText size={20} />, label: "Notes" },
    { path: "/schedule", icon: <Calendar size={20} />, label: "Schedule" },
    { path: "/certifications", icon: <Award size={20} />, label: "Certifications" },
  ]

  // Admin-only menu items
  const adminMenuItems =
    user?.role === "admin" ? [{ path: "/admin/notes", icon: <FileText2 size={20} />, label: "Manage Notes" }] : []

  const bottomMenuItems = [
    { path: "/settings", icon: <Settings size={20} />, label: "Settings" },
    { path: "/help", icon: <HelpCircle size={20} />, label: "Help & Support" },
  ]

  return (
    <aside
      className={`bg-white border-r border-light transition-all duration-300 ${
        collapsed ? "w-16" : "w-64"
      } hidden md:block`}
    >
      <div className="h-full flex flex-col justify-between py-4">
        <div>
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="w-full flex justify-end px-4 text-gray-500 hover:text-teal"
          >
            <ChevronRight size={20} className={`transform transition-transform ${collapsed ? "" : "rotate-180"}`} />
          </button>

          <ul className="mt-6 space-y-2 px-3">
            {menuItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`sidebar-link ${location.pathname === item.path ? "sidebar-link-active" : ""}`}
                >
                  <span className="mr-3">{item.icon}</span>
                  {!collapsed && <span>{item.label}</span>}
                </Link>
              </li>
            ))}

            {/* Admin menu items */}
            {adminMenuItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`sidebar-link ${location.pathname === item.path ? "sidebar-link-active" : ""}`}
                >
                  <span className="mr-3">{item.icon}</span>
                  {!collapsed && <span>{item.label}</span>}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <ul className="px-3 space-y-2">
            {bottomMenuItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`sidebar-link ${location.pathname === item.path ? "sidebar-link-active" : ""}`}
                >
                  <span className="mr-3">{item.icon}</span>
                  {!collapsed && <span>{item.label}</span>}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar

