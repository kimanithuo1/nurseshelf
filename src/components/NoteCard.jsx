"use client"

import { useState } from "react"
import { Edit, Trash, Calendar, BookOpen } from "lucide-react"
import { useAuth } from "../context/AuthContext"

const NoteCard = ({ note, onEdit, onDelete }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const { user } = useAuth()
  const isAdmin = user?.role === "admin"

  const toggleExpand = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div className="card hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-semibold">{note.title}</h3>
        {isAdmin && (
          <div className="flex space-x-2">
            <button
              onClick={() => onEdit(note)}
              className="p-1.5 text-gray-500 hover:text-teal rounded-full hover:bg-light/50"
            >
              <Edit size={16} />
            </button>
            <button
              onClick={() => onDelete(note.id)}
              className="p-1.5 text-gray-500 hover:text-red-500 rounded-full hover:bg-light/50"
            >
              <Trash size={16} />
            </button>
          </div>
        )}
      </div>

      <div className="flex items-center text-sm text-gray-500 mb-3 space-x-4">
        <div className="flex items-center">
          <Calendar size={14} className="mr-1" />
          <span>{note.date}</span>
        </div>
        {note.course && (
          <div className="flex items-center">
            <BookOpen size={14} className="mr-1" />
            <span>{note.course}</span>
          </div>
        )}
      </div>

      <div className={`text-gray-700 ${isExpanded ? "" : "line-clamp-3"}`}>{note.content}</div>

      {note.content.length > 150 && (
        <button onClick={toggleExpand} className="mt-2 text-sm font-medium text-teal hover:text-teal/80">
          {isExpanded ? "Show less" : "Read more"}
        </button>
      )}
    </div>
  )
}

export default NoteCard

