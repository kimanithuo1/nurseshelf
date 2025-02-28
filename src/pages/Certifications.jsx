"use client"

import { useState, useEffect } from "react"
import { Award, Calendar, Download } from "lucide-react"

const Certifications = () => {
  const [certifications, setCertifications] = useState([])

  useEffect(() => {
    // TODO: Backend team - Implement API call to fetch user's certifications
    // Example API call:
    // const fetchCertifications = async () => {
    //   try {
    //     const response = await fetch('/api/certifications');
    //     const data = await response.json();
    //     setCertifications(data);
    //   } catch (error) {
    //     console.error('Error fetching certifications:', error);
    //   }
    // };
    // fetchCertifications();

    // Mock data
    setCertifications([
      { id: 1, name: "Basic Life Support (BLS)", issueDate: "2023-01-15", expiryDate: "2025-01-15", status: "Active" },
      {
        id: 2,
        name: "Advanced Cardiac Life Support (ACLS)",
        issueDate: "2022-11-30",
        expiryDate: "2024-11-30",
        status: "Active",
      },
      {
        id: 3,
        name: "Pediatric Advanced Life Support (PALS)",
        issueDate: "2022-08-22",
        expiryDate: "2024-08-22",
        status: "Active",
      },
    ])
  }, [])

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-teal mb-6">My Certifications</h1>
      <div className="space-y-4">
        {certifications.map((cert) => (
          <div key={cert.id} className="card p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Award className="text-teal mr-3" size={24} />
                <div>
                  <h3 className="font-semibold text-lg">{cert.name}</h3>
                  <div className="flex items-center text-gray-600 mt-1">
                    <Calendar size={16} className="mr-2" />
                    <span>Issued: {cert.issueDate}</span>
                    <span className="mx-2">|</span>
                    <span>Expires: {cert.expiryDate}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    cert.status === "Active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                  }`}
                >
                  {cert.status}
                </span>
                <button className="ml-4 text-teal hover:text-teal-600">
                  <Download size={20} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Certifications

