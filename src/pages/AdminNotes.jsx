"use client"

import { useState, useEffect } from "react"
import { Plus, Search } from "lucide-react"
import NoteCard from "../components/NoteCard"

const AdminNotes = () => {
  const [notes, setNotes] = useState([])
  const [courses, setCourses] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCourse, setSelectedCourse] = useState("")
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentNote, setCurrentNote] = useState(null)

  useEffect(() => {
    // Fetch notes and courses from API






    // For demo, we'll use mock data

    // Replace this with actual API calls when using a real backend
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

  const handleAddNote = () => {
    setCurrentNote(null)
    setIsModalOpen(true)
  }

  const handleEditNote = (note) => {
    setCurrentNote(note)
    setIsModalOpen(true)
  }

  const handleDeleteNote = (noteId) => {
    // In a real app, you would call an API to delete the note
    setNotes(notes.filter((note) => note.id !== noteId))
  }

  const handleSaveNote = (noteData) => {
    if (currentNote) {
      // Edit existing note
      setNotes(notes.map((note) => (note.id === currentNote.id ? { ...note, ...noteData } : note)))
    } else {
      // Add new note
      setNotes([...notes, { id: Date.now(), ...noteData }])
    }
    setIsModalOpen(false)
  }

  const filteredNotes = notes.filter(
    (note) =>
      (note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        note.content.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (selectedCourse === "" || note.course === selectedCourse),
  )

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-teal">Manage Notes</h1>
        <button onClick={handleAddNote} className="btn-primary flex items-center">
          <Plus size={20} className="mr-2" />
          Add New Note
        </button>
      </div>

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
          <NoteCard key={note.id} note={note} onEdit={handleEditNote} onDelete={handleDeleteNote} />
        ))}
      </div>

      {isModalOpen && (
        <NoteModal note={currentNote} courses={courses} onSave={handleSaveNote} onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  )
}

const NoteModal = ({ note, courses, onSave, onClose }) => {
  const [formData, setFormData] = useState(
    note || { title: "", content: "", course: "", date: new Date().toISOString().split("T")[0] },
  )

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSave(formData)
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">{note ? "Edit Note" : "Add New Note"}</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-light rounded-md focus:outline-none focus:ring-2 focus:ring-mint"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
              Content
            </label>
            <textarea
              id="content"
              name="content"
              value={formData.content}
              onChange={handleChange}
              required
              rows="4"
              className="w-full px-3 py-2 border border-light rounded-md focus:outline-none focus:ring-2 focus:ring-mint"
            ></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-1">
              Course
            </label>
            <select
              id="course"
              name="course"
              value={formData.course}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-light rounded-md focus:outline-none focus:ring-2 focus:ring-mint"
            >
              <option value="">Select a course</option>
              {courses.map((course) => (
                <option key={course} value={course}>
                  {course}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
              Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-light rounded-md focus:outline-none focus:ring-2 focus:ring-mint"
            />
          </div>
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-light rounded-md text-gray-600 hover:bg-light/50"
            >
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 bg-teal text-white rounded-md hover:bg-teal/90">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AdminNotes

