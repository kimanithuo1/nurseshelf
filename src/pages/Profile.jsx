"use client"

import { useState } from "react"
import { User, Mail, Phone, MapPin, Calendar, Edit, Camera } from "lucide-react"

const Profile = () => {
  const [activeTab, setActiveTab] = useState("profile")


  
  // Mock user data


  const user = {
    name: "Jennifer Wilson",
    email: "jennifer.wilson@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    joinDate: "January 2023",
    bio: "Registered Nurse with 5 years of experience in critical care. Currently pursuing advanced certifications in emergency nursing.",
    avatar: "/placeholder.svg?height=200&width=200",
    education: [
      { id: 1, degree: "Bachelor of Science in Nursing", institution: "University of California", year: "2018" },
      {
        id: 2,
        degree: "Critical Care Nursing Certification",
        institution: "American Association of Critical-Care Nurses",
        year: "2020",
      },
    ],
    experience: [
      { id: 1, position: "ICU Nurse", company: "San Francisco General Hospital", period: "2020 - Present" },
      { id: 2, position: "Staff Nurse", company: "Oakland Medical Center", period: "2018 - 2020" },
    ],
    certificates: [
      {
        id: 1,
        name: "Advanced Cardiac Life Support (ACLS)",
        issuer: "American Heart Association",
        date: "May 2022",
        expires: "May 2024",
      },
      {
        id: 2,
        name: "Pediatric Advanced Life Support (PALS)",
        issuer: "American Heart Association",
        date: "June 2021",
        expires: "June 2023",
      },
      {
        id: 3,
        name: "Trauma Nursing Core Course (TNCC)",
        issuer: "Emergency Nurses Association",
        date: "August 2022",
        expires: "August 2024",
      },
    ],
  }

  return (
    <div className="max-w-5xl mx-auto">
      <div className="card mb-8">
        <div className="md:flex">
          <div className="md:w-1/3 mb-6 md:mb-0 flex flex-col items-center">
            <div className="relative mb-4">
              <img
                src={user.avatar || "/placeholder.svg"}
                alt={user.name}
                className="w-40 h-40 rounded-full object-cover border-4 border-mint"
              />
              <button className="absolute bottom-0 right-0 p-2 bg-teal text-white rounded-full">
                <Camera size={18} />
              </button>
            </div>
            <h2 className="text-xl font-bold text-center">{user.name}</h2>
            <p className="text-gray-600 text-center mb-4">Registered Nurse</p>
            <button className="btn-secondary flex items-center">
              <Edit size={16} className="mr-2" />
              Edit Profile
            </button>
          </div>

          <div className="md:w-2/3 md:pl-8 md:border-l border-light">
            <div className="space-y-4">
              <div className="flex items-start">
                <Mail className="w-5 h-5 text-teal mt-0.5 mr-3" />
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p>{user.email}</p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="w-5 h-5 text-teal mt-0.5 mr-3" />
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p>{user.phone}</p>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-teal mt-0.5 mr-3" />
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p>{user.location}</p>
                </div>
              </div>

              <div className="flex items-start">
                <Calendar className="w-5 h-5 text-teal mt-0.5 mr-3" />
                <div>
                  <p className="text-sm text-gray-500">Joined</p>
                  <p>{user.joinDate}</p>
                </div>
              </div>

              <div className="flex items-start">
                <User className="w-5 h-5 text-teal mt-0.5 mr-3" />
                <div>
                  <p className="text-sm text-gray-500">Bio</p>
                  <p>{user.bio}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <div className="flex border-b border-light">
          <button
            onClick={() => setActiveTab("profile")}
            className={`px-4 py-2 font-medium text-sm ${
              activeTab === "profile" ? "text-teal border-b-2 border-teal" : "text-gray-600 hover:text-teal"
            }`}
          >
            Education & Experience
          </button>
          <button
            onClick={() => setActiveTab("certificates")}
            className={`px-4 py-2 font-medium text-sm ${
              activeTab === "certificates" ? "text-teal border-b-2 border-teal" : "text-gray-600 hover:text-teal"
            }`}
          >
            Certificates
          </button>
          <button
            onClick={() => setActiveTab("settings")}
            className={`px-4 py-2 font-medium text-sm ${
              activeTab === "settings" ? "text-teal border-b-2 border-teal" : "text-gray-600 hover:text-teal"
            }`}
          >
            Account Settings
          </button>
        </div>
      </div>

      {activeTab === "profile" && (
        <div className="grid md:grid-cols-2 gap-8">
          <div className="card">
            <h3 className="text-lg font-semibold mb-4">Education</h3>
            <div className="space-y-6">
              {user.education.map((edu) => (
                <div key={edu.id} className="border-l-2 border-mint pl-4">
                  <h4 className="font-medium">{edu.degree}</h4>
                  <p className="text-gray-600">{edu.institution}</p>
                  <p className="text-sm text-gray-500">{edu.year}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="card">
            <h3 className="text-lg font-semibold mb-4">Experience</h3>
            <div className="space-y-6">
              {user.experience.map((exp) => (
                <div key={exp.id} className="border-l-2 border-salmon pl-4">
                  <h4 className="font-medium">{exp.position}</h4>
                  <p className="text-gray-600">{exp.company}</p>
                  <p className="text-sm text-gray-500">{exp.period}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === "certificates" && (
        <div className="card">
          <h3 className="text-lg font-semibold mb-4">Certificates</h3>
          <div className="space-y-4">
            {user.certificates.map((cert) => (
              <div key={cert.id} className="p-4 border border-light rounded-lg">
                <div className="flex justify-between">
                  <h4 className="font-medium">{cert.name}</h4>
                  <span className="text-xs bg-mint/20 text-teal px-2 py-1 rounded-full">Active</span>
                </div>
                <p className="text-gray-600">{cert.issuer}</p>
                <div className="flex justify-between mt-2 text-sm text-gray-500">
                  <span>Issued: {cert.date}</span>
                  <span>Expires: {cert.expires}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === "settings" && (
        <div className="card">
          <h3 className="text-lg font-semibold mb-6">Account Settings</h3>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                defaultValue={user.name}
                className="w-full p-2 border border-light rounded-md focus:outline-none focus:ring-2 focus:ring-mint"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                defaultValue={user.email}
                className="w-full p-2 border border-light rounded-md focus:outline-none focus:ring-2 focus:ring-mint"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
              <input
                type="tel"
                defaultValue={user.phone}
                className="w-full p-2 border border-light rounded-md focus:outline-none focus:ring-2 focus:ring-mint"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
              <input
                type="text"
                defaultValue={user.location}
                className="w-full p-2 border border-light rounded-md focus:outline-none focus:ring-2 focus:ring-mint"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
              <textarea
                defaultValue={user.bio}
                rows={4}
                className="w-full p-2 border border-light rounded-md focus:outline-none focus:ring-2 focus:ring-mint"
              ></textarea>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full p-2 border border-light rounded-md focus:outline-none focus:ring-2 focus:ring-mint"
              />
            </div>

            <div className="pt-4 border-t border-light">
              <button className="btn-primary">Save Changes</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Profile

