"use client"

import { useState, useEffect } from "react"
import { Search } from "lucide-react"
import NoteCard from "../components/NoteCard"

const UserNotes = () => {
  const [notes, setNotes] = useState([])
  const [courses, setCourses] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCourse, setSelectedCourse] = useState("")

  useEffect(() => {

    
    // Fetch notes and courses from API


    // For demo, we'll use mock data
   
   
    const mockNotes = [
      {
        id: 1,
        title: "Introduction to Nursing Ethics",
        content:
          "This note covers the fundamental principles of nursing ethics, including autonomy, beneficence, non-maleficence, and justice. We'll explore how these principles guide decision-making in various clinical scenarios.",
        date: "2023-05-15",
        course: "Nursing Ethics",
      },
      {
        id: 2,
        title: "Patient Assessment Techniques",
        content:
          "Learn about the ABCDE approach to patient assessment: Airway, Breathing, Circulation, Disability, and Exposure. This systematic approach ensures a thorough evaluation of the patient's condition.",
        date: "2023-05-18",
        course: "Clinical Skills",
      },
      {
        id: 3,
        title: "Medication Administration Safety",
        content:
          'This note discusses the "Five Rights" of medication administration: Right patient, Right drug, Right dose, Right route, and Right time. We\'ll also cover common medication errors and prevention strategies.',
        date: "2023-05-20",
        course: "Pharmacology",
      },
    ]
    const mockCourses = [
      "Nursing Ethics",
      "Clinical Skills",
      "Pharmacology",
      "Anatomy and Physiology",
      "Mental Health Nursing",
    ]

    setNotes(mockNotes)
    setCourses(mockCourses)
  }, [])

  const filteredNotes = notes.filter(
    (note) =>
      (note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        note.content.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (selectedCourse === "" || note.course === selectedCourse),
  )

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-teal mb-6">My Notes</h1>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="flex-1 relative">
          <input
            type="text"
            placeholder="Search notes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-light focus:outline-none focus:ring-2 focus:ring-mint"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
        </div>
        <select
          value={selectedCourse}
          onChange={(e) => setSelectedCourse(e.target.value)}
          className="w-full md:w-64 px-3 py-2 rounded-lg border border-light focus:outline-none focus:ring-2 focus:ring-mint"
        >
          <option value="">All Courses</option>
          {courses.map((course) => (
            <option key={course} value={course}>
              {course}
            </option>
          ))}
        </select>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredNotes.map((note) => (
          <NoteCard key={note.id} note={note} />
        ))}
      </div>

      {filteredNotes.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600">No notes found. Try adjusting your search or filters.</p>
        </div>
      )}
    </div>
  )
}

export default UserNotes

