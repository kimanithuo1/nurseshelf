"use client"

import { useParams } from "react-router-dom"
import { Clock, Users, Star, BookOpen, CheckCircle, Play, Download, Award } from "lucide-react"

const CourseDetails = () => {
  const { courseId } = useParams()

  // Mock data (unchanged)
  const course = {
    id: Number.parseInt(courseId),
    title: "Fundamentals of Nursing",
    description:
      "This comprehensive course covers the core principles and practices that form the foundation of nursing care. You will learn essential skills, procedures, and the theoretical knowledge needed to provide safe and effective patient care.",
    image: "/placeholder.svg?height=300&width=800",
    category: "Fundamentals",
    duration: "8 weeks",
    students: 1240,
    rating: 4.8,
    lessons: 24,
    level: "Beginner",
    lastUpdated: "April 2023",
    instructor: {
      name: "Dr. Sarah Johnson",
      avatar: "/placeholder.svg?height=100&width=100",
      bio: "Dr. Sarah Johnson is a registered nurse with over 15 years of experience in clinical practice and nursing education. She holds a Ph.D. in Nursing Education and has published numerous articles in peer-reviewed journals.",
      courses: 12,
      students: 8500,
      rating: 4.9,
    },
    modules: [
      {
        id: 1,
        title: "Introduction to Nursing",
        lessons: [
          { id: 1, title: "History of Nursing", duration: "15 min", isCompleted: true },
          { id: 2, title: "Nursing as a Profession", duration: "20 min", isCompleted: true },
          { id: 3, title: "Ethical Principles in Nursing", duration: "25 min", isCompleted: false },
        ],
      },
      {
        id: 2,
        title: "Basic Nursing Skills",
        lessons: [
          { id: 4, title: "Vital Signs Assessment", duration: "30 min", isCompleted: false },
          { id: 5, title: "Patient Hygiene", duration: "25 min", isCompleted: false },
          { id: 6, title: "Medication Administration", duration: "35 min", isCompleted: false },
          { id: 7, title: "Documentation", duration: "20 min", isCompleted: false },
        ],
      },
      {
        id: 3,
        title: "Patient Assessment",
        lessons: [
          { id: 8, title: "Health History Interview", duration: "25 min", isCompleted: false },
          { id: 9, title: "Physical Assessment Techniques", duration: "40 min", isCompleted: false },
          { id: 10, title: "Neurological Assessment", duration: "30 min", isCompleted: false },
        ],
      },
    ],
  }

  return (
    <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "2rem 1rem", backgroundColor: "#F5F7F7" }}>
      <div style={{ position: "relative", marginBottom: "2rem" }}>
        <img
          src={course.image || "/placeholder.svg"}
          alt={course.title}
          style={{
            width: "100%",
            height: "20rem",
            objectFit: "cover",
            borderRadius: "0.5rem",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)",
            borderRadius: "0.5rem",
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            padding: "2rem",
            color: "white",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", marginBottom: "0.5rem" }}>
            <span
              style={{
                backgroundColor: "#285D66",
                color: "white",
                padding: "0.25rem 0.75rem",
                borderRadius: "9999px",
                fontSize: "0.875rem",
                fontWeight: "600",
                marginRight: "0.5rem",
              }}
            >
              {course.category}
            </span>
            <span
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                color: "white",
                padding: "0.25rem 0.75rem",
                borderRadius: "9999px",
                fontSize: "0.875rem",
                fontWeight: "600",
              }}
            >
              {course.level}
            </span>
          </div>
          <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "1rem" }}>{course.title}</h1>
          <div style={{ display: "flex", alignItems: "center", fontSize: "1rem" }}>
            <CourseMetaItem icon={<Clock size={18} />} text={course.duration} />
            <CourseMetaItem icon={<Users size={18} />} text={`${course.students} students`} />
            <CourseMetaItem icon={<Star size={18} style={{ color: "#E1DF66" }} />} text={course.rating.toString()} />
          </div>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 300px", gap: "2rem" }}>
        <div>
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "0.5rem",
              padding: "2rem",
              marginBottom: "2rem",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "1rem", color: "#285D66" }}>
              About This Course
            </h2>
            <p style={{ color: "#666666", marginBottom: "1.5rem" }}>{course.description}</p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1rem" }}>
              <CourseInfoItem icon={<BookOpen size={24} />} label="Lessons" value={course.lessons} />
              <CourseInfoItem icon={<Clock size={24} />} label="Duration" value={course.duration} />
              <CourseInfoItem icon={<Users size={24} />} label="Students" value={course.students} />
              <CourseInfoItem icon={<Star size={24} />} label="Rating" value={course.rating} />
            </div>
          </div>

          <div
            style={{
              backgroundColor: "white",
              borderRadius: "0.5rem",
              padding: "2rem",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "1rem", color: "#285D66" }}>
              Course Content
            </h2>
            <div style={{ marginBottom: "1rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.875rem", color: "#666666" }}>
                <span>
                  {course.modules.length} modules • {course.lessons} lessons
                </span>
                <span>Total: {course.duration}</span>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {course.modules.map((module) => (
                <div
                  key={module.id}
                  style={{ border: "1px solid #B7DBC8", borderRadius: "0.5rem", overflow: "hidden" }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "1rem",
                      backgroundColor: "#F5F7F7",
                    }}
                  >
                    <h3 style={{ fontWeight: "600", color: "#285D66" }}>{module.title}</h3>
                    <span style={{ fontSize: "0.875rem", color: "#666666" }}>{module.lessons.length} lessons</span>
                  </div>
                  <div>
                    {module.lessons.map((lesson) => (
                      <div
                        key={lesson.id}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          padding: "1rem",
                          borderTop: "1px solid #B7DBC8",
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "center" }}>
                          {lesson.isCompleted ? (
                            <CheckCircle size={18} style={{ color: "#285D66", marginRight: "0.75rem" }} />
                          ) : (
                            <Play size={18} style={{ color: "#666666", marginRight: "0.75rem" }} />
                          )}
                          <span style={{ color: lesson.isCompleted ? "#666666" : "#333333" }}>{lesson.title}</span>
                        </div>
                        <span style={{ fontSize: "0.875rem", color: "#666666" }}>{lesson.duration}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "0.5rem",
              padding: "2rem",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              position: "sticky",
              top: "2rem",
            }}
          >
            <div style={{ marginBottom: "1.5rem" }}>
              <button
                style={{
                  width: "100%",
                  padding: "0.75rem 1rem",
                  backgroundColor: "#285D66",
                  color: "white",
                  border: "none",
                  borderRadius: "0.375rem",
                  fontSize: "1rem",
                  fontWeight: "600",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
              >
                <Play size={20} style={{ marginRight: "0.5rem" }} />
                Start Learning
              </button>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "1.5rem" }}>
              <SidebarButton icon={<Download size={18} />} text="Download Resources" />
              <SidebarButton icon={<Award size={18} />} text="Course Certificate" />
            </div>

            <div style={{ borderTop: "1px solid #B7DBC8", paddingTop: "1.5rem" }}>
              <h3 style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: "1rem", color: "#285D66" }}>
                Instructor
              </h3>
              <div style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}>
                <img
                  src={course.instructor.avatar || "/placeholder.svg"}
                  alt={course.instructor.name}
                  style={{ width: "3rem", height: "3rem", borderRadius: "9999px", marginRight: "1rem" }}
                />
                <div>
                  <h4 style={{ fontWeight: "600", color: "#333333" }}>{course.instructor.name}</h4>
                  <div style={{ display: "flex", alignItems: "center", fontSize: "0.875rem", color: "#666666" }}>
                    <Star size={14} style={{ color: "#E1DF66", marginRight: "0.25rem" }} />
                    <span>{course.instructor.rating}</span>
                  </div>
                </div>
              </div>
              <p style={{ fontSize: "0.875rem", color: "#666666", marginBottom: "1rem" }}>{course.instructor.bio}</p>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.875rem" }}>
                <InstructorStat label="Courses" value={course.instructor.courses} />
                <InstructorStat label="Students" value={course.instructor.students} />
                <InstructorStat label="Rating" value={course.instructor.rating} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const CourseMetaItem = ({ icon, text }) => (
  <div style={{ display: "flex", alignItems: "center", marginRight: "1.5rem" }}>
    {icon}
    <span style={{ marginLeft: "0.5rem" }}>{text}</span>
  </div>
)

const CourseInfoItem = ({ icon, label, value }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "1rem",
      backgroundColor: "#F5F7F7",
      borderRadius: "0.375rem",
    }}
  >
    <div style={{ color: "#285D66", marginBottom: "0.5rem" }}>{icon}</div>
    <span style={{ fontSize: "0.875rem", color: "#666666", marginBottom: "0.25rem" }}>{label}</span>
    <span style={{ fontWeight: "600", color: "#333333" }}>{value}</span>
  </div>
)

const SidebarButton = ({ icon, text }) => (
  <button
    style={{
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0.75rem 1rem",
      backgroundColor: "#F5F7F7",
      border: "1px solid #B7DBC8",
      borderRadius: "0.375rem",
      fontSize: "0.875rem",
      fontWeight: "500",
      color: "#333333",
      cursor: "pointer",
    }}
  >
    <span>{text}</span>
    {icon}
  </button>
)

const InstructorStat = ({ label, value }) => (
  <div style={{ textAlign: "center" }}>
    <div style={{ fontWeight: "600", color: "#333333" }}>{value}</div>
    <div style={{ color: "#666666" }}>{label}</div>
  </div>
)

export default CourseDetails

