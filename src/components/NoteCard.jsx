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
    <div
      style={{
        backgroundColor: "white",
        borderRadius: "0.5rem",
        padding: "1.5rem",
        boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        border: "1px solid #B7DBC8",
        transition: "box-shadow 0.3s ease-in-out",
      }}
    >
      <div
        style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.5rem" }}
      >
        <h3 style={{ fontSize: "1.125rem", fontWeight: "600", color: "#285D66" }}>{note.title}</h3>
        {isAdmin && (
          <div style={{ display: "flex", gap: "0.5rem" }}>
            <button
              onClick={() => onEdit(note)}
              style={{ padding: "0.375rem", color: "#6DA095", borderRadius: "9999px" }}
            >
              <Edit size={16} />
            </button>
            <button
              onClick={() => onDelete(note.id)}
              style={{ padding: "0.375rem", color: "#6DA095", borderRadius: "9999px" }}
            >
              <Trash size={16} />
            </button>
          </div>
        )}
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          fontSize: "0.875rem",
          color: "#666666",
          marginBottom: "0.75rem",
          gap: "1rem",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <Calendar size={14} style={{ marginRight: "0.25rem" }} />
          <span>{note.date}</span>
        </div>
        {note.course && (
          <div style={{ display: "flex", alignItems: "center" }}>
            <BookOpen size={14} style={{ marginRight: "0.25rem" }} />
            <span>{note.course}</span>
          </div>
        )}
      </div>

      <div
        style={{
          color: "#333333",
          overflow: "hidden",
          textOverflow: "ellipsis",
          display: "-webkit-box",
          WebkitLineClamp: isExpanded ? "unset" : 3,
          WebkitBoxOrient: "vertical",
        }}
      >
        {note.content}
      </div>

      {note.content.length > 150 && (
        <button
          onClick={toggleExpand}
          style={{
            marginTop: "0.5rem",
            fontSize: "0.875rem",
            fontWeight: "500",
            color: "#6DA095",
          }}
        >
          {isExpanded ? "Show less" : "Read more"}
        </button>
      )}
    </div>
  )
}

export default NoteCard

