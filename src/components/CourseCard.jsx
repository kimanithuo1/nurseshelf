import { Clock, Users, Star } from "lucide-react"
import { Link } from "react-router-dom"

const CourseCard = ({ course }) => {
  return (
    <div
      style={{
        backgroundColor: "white",
        borderRadius: "0.5rem",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        border: "1px solid #B7DBC8",
        transition: "box-shadow 0.3s ease-in-out",
        overflow: "hidden",
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
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "0.75rem",
            right: "0.75rem",
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            padding: "0.25rem 0.5rem",
            borderRadius: "9999px",
            fontSize: "0.75rem",
            fontWeight: "600",
            color: "#285D66",
          }}
        >
          {course.category}
        </div>
      </div>

      <div style={{ padding: "1.5rem" }}>
        <h3 style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: "0.75rem", color: "#285D66" }}>
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
          <CourseMetaItem icon={<Clock size={14} />} text={course.duration} />
          <CourseMetaItem icon={<Users size={14} />} text={`${course.students} students`} />
          <CourseMetaItem icon={<Star size={14} style={{ color: "#E1DF66" }} />} text={course.rating.toString()} />
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src={course.instructor.avatar || "/placeholder.svg?height=50&width=50"}
              alt={course.instructor.name}
              style={{ width: "2.5rem", height: "2.5rem", borderRadius: "9999px", marginRight: "0.75rem" }}
            />
            <span style={{ fontSize: "0.875rem", fontWeight: "500", color: "#333333" }}>{course.instructor.name}</span>
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

const CourseMetaItem = ({ icon, text }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      marginRight: "1rem",
    }}
  >
    {icon}
    <span style={{ marginLeft: "0.25rem" }}>{text}</span>
  </div>
)

export default CourseCard

