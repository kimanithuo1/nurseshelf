"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import CourseCard from "../components/CourseCard"
import { Search, Clock, Users, Star } from "lucide-react"

const Courses = () => {
  const [activeFilter, setActiveFilter] = useState("all")

  // Mock data (unchanged)
  const featuredCourse = {
    id: 0,
    title: "Comprehensive Nursing Fundamentals",
    description:
      "Master the core principles and practices of nursing with this in-depth course. Perfect for beginners and those looking to refresh their knowledge.",
    image: "/placeholder.svg?height=400&width=800",
    category: "Fundamentals",
    duration: "12 weeks",
    students: 2500,
    rating: 4.9,
    instructor: {
      name: "Dr. Emily Rodriguez",
      avatar: "/placeholder.svg?height=100&width=100",
    },
  }

  const courses = [
    {
      id: 1,
      title: "Fundamentals of Nursing",
      description: "Learn the core principles and practices that form the foundation of nursing care.",
      image: "/placeholder.svg?height=200&width=400",
      category: "Fundamentals",
      duration: "8 weeks",
      students: 1240,
      rating: 4.8,
      instructor: {
        name: "Dr. Sarah Johnson",
        avatar: "/placeholder.svg?height=50&width=50",
      },
    },
    {
      id: 2,
      title: "Advanced Cardiac Life Support",
      description: "Master the skills needed to respond to cardiovascular emergencies and save lives.",
      image: "/placeholder.svg?height=200&width=400",
      category: "Emergency",
      duration: "4 weeks",
      students: 856,
      rating: 4.9,
      instructor: {
        name: "Dr. Michael Chen",
        avatar: "/placeholder.svg?height=50&width=50",
      },
    },
    {
      id: 3,
      title: "Pharmacology for Nurses",
      description: "Understand drug classifications, mechanisms of action, and nursing implications.",
      image: "/placeholder.svg?height=200&width=400",
      category: "Pharmacology",
      duration: "6 weeks",
      students: 1120,
      rating: 4.7,
      instructor: {
        name: "Dr. Emily Rodriguez",
        avatar: "/placeholder.svg?height=50&width=50",
      },
    },
    {
      id: 4,
      title: "Pediatric Nursing",
      description: "Learn specialized care for infants, children, and adolescents with various health conditions.",
      image: "/placeholder.svg?height=200&width=400",
      category: "Specialty",
      duration: "10 weeks",
      students: 780,
      rating: 4.6,
      instructor: {
        name: "Dr. James Wilson",
        avatar: "/placeholder.svg?height=50&width=50",
      },
    },
    {
      id: 5,
      title: "Mental Health Nursing",
      description: "Develop skills to care for patients with psychiatric disorders and mental health issues.",
      image: "/placeholder.svg?height=200&width=400",
      category: "Specialty",
      duration: "8 weeks",
      students: 920,
      rating: 4.5,
      instructor: {
        name: "Dr. Lisa Thompson",
        avatar: "/placeholder.svg?height=50&width=50",
      },
    },
    {
      id: 6,
      title: "Critical Care Nursing",
      description: "Master the skills required to care for critically ill patients in intensive care settings.",
      image: "/placeholder.svg?height=200&width=400",
      category: "Advanced",
      duration: "12 weeks",
      students: 650,
      rating: 4.9,
      instructor: {
        name: "Dr. Robert Garcia",
        avatar: "/placeholder.svg?height=50&width=50",
      },
    },
  ]

  const filters = [
    { id: "all", label: "All Courses" },
    { id: "Fundamentals", label: "Fundamentals" },
    { id: "Emergency", label: "Emergency" },
    { id: "Pharmacology", label: "Pharmacology" },
    { id: "Specialty", label: "Specialty" },
    { id: "Advanced", label: "Advanced" },
  ]

  const filteredCourses =
    activeFilter === "all" ? courses : courses.filter((course) => course.category === activeFilter)

  return (
    <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "2rem 1rem", backgroundColor: "#F5F7F7" }}>
      <h1 style={{ fontSize: "2.25rem", fontWeight: "bold", color: "#285D66", marginBottom: "2rem" }}>
        Explore Our Courses
      </h1>

      {/* Featured Course */}
      <div style={{ marginBottom: "3rem" }}>
        <h2 style={{ fontSize: "1.75rem", fontWeight: "600", marginBottom: "1rem", color: "#285D66" }}>
          Featured Course
        </h2>
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "0.5rem",
            overflow: "hidden",
            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            border: "1px solid #B7DBC8",
          }}
        >
          <div
            style={{ display: "flex", flexDirection: "column", "@media (min-width: 768px)": { flexDirection: "row" } }}
          >
            <div
              style={{
                flexShrink: 0,
                height: "12rem",
                width: "100%",
                "@media (min-width: 768px)": { width: "12rem", height: "auto" },
              }}
            >
              <img
                src={featuredCourse.image || "/placeholder.svg"}
                alt={featuredCourse.title}
                style={{ height: "100%", width: "100%", objectFit: "cover" }}
              />
            </div>
            <div style={{ padding: "2rem" }}>
              <div
                style={{
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  fontSize: "0.875rem",
                  fontWeight: "600",
                  color: "#285D66",
                  marginBottom: "0.25rem",
                }}
              >
                {featuredCourse.category}
              </div>
              <Link
                to={`/courses/${featuredCourse.id}`}
                style={{
                  display: "block",
                  marginTop: "0.25rem",
                  fontSize: "1.5rem",
                  lineHeight: "1.25",
                  fontWeight: "500",
                  color: "#333333",
                  textDecoration: "none",
                }}
              >
                {featuredCourse.title}
              </Link>
              <p style={{ marginTop: "0.5rem", color: "#666666" }}>{featuredCourse.description}</p>
              <div style={{ marginTop: "1rem", display: "flex", alignItems: "center" }}>
                <CourseMetaItem icon={<Clock size={16} />} text={featuredCourse.duration} />
                <CourseMetaItem icon={<Users size={16} />} text={`${featuredCourse.students} students`} />
                <CourseMetaItem
                  icon={<Star size={16} style={{ color: "#E1DF66" }} />}
                  text={featuredCourse.rating.toString()}
                />
              </div>
              <div style={{ marginTop: "1rem" }}>
                <Link
                  to={`/courses/${featuredCourse.id}`}
                  style={{
                    display: "inline-block",
                    padding: "0.75rem 1.5rem",
                    backgroundColor: "#285D66",
                    color: "white",
                    borderRadius: "0.375rem",
                    fontSize: "1rem",
                    fontWeight: "500",
                    textDecoration: "none",
                    transition: "background-color 0.2s ease-in-out",
                  }}
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ marginBottom: "2rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h2 style={{ fontSize: "1.75rem", fontWeight: "600", color: "#285D66" }}>All Courses</h2>
          <div style={{ position: "relative", width: "100%", maxWidth: "20rem" }}>
            <input
              type="text"
              placeholder="Search courses..."
              style={{
                width: "100%",
                padding: "0.75rem 1rem 0.75rem 2.5rem",
                borderRadius: "0.375rem",
                border: "1px solid #B7DBC8",
                outline: "none",
                fontSize: "1rem",
              }}
            />
            <Search
              style={{
                position: "absolute",
                left: "0.75rem",
                top: "50%",
                transform: "translateY(-50%)",
                color: "#666666",
              }}
              size={20}
            />
          </div>
        </div>
      </div>

      <div style={{ marginBottom: "2rem", overflowX: "auto" }}>
        <div style={{ display: "flex", gap: "0.5rem", paddingBottom: "0.5rem" }}>
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              style={{
                padding: "0.75rem 1.5rem",
                borderRadius: "9999px",
                fontSize: "1rem",
                fontWeight: "500",
                whiteSpace: "nowrap",
                backgroundColor: activeFilter === filter.id ? "#285D66" : "#D4DCDC",
                color: activeFilter === filter.id ? "white" : "#333333",
                border: "none",
                cursor: "pointer",
                transition: "background-color 0.2s ease-in-out",
              }}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gap: "2rem",
          gridTemplateColumns: "repeat(1, minmax(0, 1fr))",
          "@media (min-width: 640px)": { gridTemplateColumns: "repeat(2, minmax(0, 1fr))" },
          "@media (min-width: 1024px)": { gridTemplateColumns: "repeat(3, minmax(0, 1fr))" },
        }}
      >
        {filteredCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  )
}

const CourseMetaItem = ({ icon, text }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      fontSize: "0.875rem",
      color: "#666666",
      marginRight: "1.5rem",
    }}
  >
    {icon}
    <span style={{ marginLeft: "0.25rem" }}>{text}</span>
  </div>
)

export default Courses

