import { Clock, Users, Star } from "lucide-react"
import { Link } from "react-router-dom"

const CourseCard = ({ course }) => {
  return (
    <div
      style={{
        backgroundColor: "white",
        borderRadius: "0.5rem",
        boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        border: "1px solid #B7DBC8",
        transition: "box-shadow 0.3s ease-in-out",
      }}
    >
      <div style={{ position: "relative" }}>
        <img
          src={course.image || "/placeholder.svg?height=200&width=400"}
          alt={course.title}
          style={{
            width: "100%",
            height: "12rem",
            objectFit: "cover",
            borderTopLeftRadius: "0.5rem",
            borderTopRightRadius: "0.5rem",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "0.5rem",
            right: "0.5rem",
            backgroundColor: "white",
            padding: "0.25rem 0.5rem",
            borderRadius: "9999px",
            fontSize: "0.75rem",
            fontWeight: "500",
            color: "#285D66",
          }}
        >
          {course.category}
        </div>
      </div>

      <div style={{ padding: "1rem" }}>
        <h3 style={{ fontSize: "1.125rem", fontWeight: "600", marginBottom: "0.5rem", color: "#285D66" }}>
          {course.title}
        </h3>
        <p
          style={{
            fontSize: "0.875rem",
            color: "#666666",
            marginBottom: "1rem",
            overflow: "hidden",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
          }}
        >
          {course.description}
        </p>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: "0.875rem",
            color: "#666666",
            marginBottom: "1rem",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", marginRight: "1rem" }}>
            <Clock size={14} style={{ marginRight: "0.25rem" }} />
            <span>{course.duration}</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", marginRight: "1rem" }}>
            <Users size={14} style={{ marginRight: "0.25rem" }} />
            <span>{course.students} students</span>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Star size={14} style={{ marginRight: "0.25rem", color: "#E1DF66" }} />
            <span>{course.rating}</span>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src={course.instructor.avatar || "/placeholder.svg?height=50&width=50"}
              alt={course.instructor.name}
              style={{ width: "2rem", height: "2rem", borderRadius: "9999px", marginRight: "0.5rem" }}
            />
            <span style={{ fontSize: "0.875rem", fontWeight: "500" }}>{course.instructor.name}</span>
          </div>
          <Link
            to={`/courses/${course.id}`}
            style={{
              backgroundColor: "#285D66",
              color: "white",
              padding: "0.5rem 1rem",
              borderRadius: "0.375rem",
              fontSize: "0.875rem",
              fontWeight: "500",
              textDecoration: "none",
              transition: "background-color 0.2s ease-in-out",
            }}
          >
            View Course
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CourseCard

