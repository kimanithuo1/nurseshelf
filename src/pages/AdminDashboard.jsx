"use client"

import { useState, useEffect } from "react"
import { Users, BookOpen, FileText, Award } from "lucide-react"

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalCourses: 0,
    totalNotes: 0,
    totalCertifications: 0,
  })

  useEffect(() => {
    // TODO: Backend team - Implement API calls to fetch admin dashboard stats
    // Example API call:
    // const fetchStats = async () => {
    //   try {
    //     const response = await fetch('/api/admin/stats');
    //     const data = await response.json();
    //     setStats(data);
    //   } catch (error) {
    //     console.error('Error fetching admin stats:', error);
    //   }
    // };
    // fetchStats();

    // Mock data
    setStats({
      totalUsers: 1250,
      totalCourses: 45,
      totalNotes: 3780,
      totalCertifications: 890,
    })
  }, [])

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-teal mb-6">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="card bg-gradient-to-br from-teal to-teal/90 text-white">
          <div className="flex justify-between items-start p-4">
            <div>
              <p className="text-white/80 mb-1">Total Users</p>
              <h3 className="text-2xl font-bold">{stats.totalUsers}</h3>
            </div>
            <div className="p-2 bg-white/20 rounded-lg">
              <Users size={24} />
            </div>
          </div>
        </div>

        <div className="card bg-gradient-to-br from-mint to-mint/90 text-teal">
          <div className="flex justify-between items-start p-4">
            <div>
              <p className="text-teal/80 mb-1">Total Courses</p>
              <h3 className="text-2xl font-bold">{stats.totalCourses}</h3>
            </div>
            <div className="p-2 bg-teal/20 rounded-lg">
              <BookOpen size={24} />
            </div>
          </div>
        </div>

        <div className="card bg-gradient-to-br from-salmon to-salmon/90 text-white">
          <div className="flex justify-between items-start p-4">
            <div>
              <p className="text-white/80 mb-1">Total Notes</p>
              <h3 className="text-2xl font-bold">{stats.totalNotes}</h3>
            </div>
            <div className="p-2 bg-white/20 rounded-lg">
              <FileText size={24} />
            </div>
          </div>
        </div>

        <div className="card bg-gradient-to-br from-light to-light/90 text-teal">
          <div className="flex justify-between items-start p-4">
            <div>
              <p className="text-teal/80 mb-1">Total Certifications</p>
              <h3 className="text-2xl font-bold">{stats.totalCertifications}</h3>
            </div>
            <div className="p-2 bg-teal/20 rounded-lg">
              <Award size={24} />
            </div>
          </div>
        </div>
      </div>

      {/* Add more admin-specific components and data here */}
    </div>
  )
}

export default AdminDashboard

