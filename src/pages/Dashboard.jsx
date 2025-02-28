import { BookOpen, Award, Clock, FileText } from "lucide-react"
import ProgressCard from "../components/ProgressCard"
import NoteCard from "../components/NoteCard"
import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

const Dashboard = () => {
  const { user } = useAuth()

  // Mock data
  const upcomingClasses = [
    { id: 1, title: "Advanced Cardiac Life Support", time: "10:00 AM - 12:00 PM", date: "Today" },
    { id: 2, title: "Pharmacology Basics", time: "2:00 PM - 4:00 PM", date: "Tomorrow" },
    { id: 3, title: "Patient Assessment Techniques", time: "9:00 AM - 11:00 AM", date: "May 15" },
  ]

  const recentCourses = [
    { id: 1, title: "Fundamentals of Nursing", progress: 75 },
    { id: 2, title: "Medical Terminology", progress: 40 },
    { id: 3, title: "Anatomy and Physiology", progress: 90 },
  ]

  const recentNotes = [
    {
      id: 1,
      title: "Introduction to Nursing Ethics",
      content:
        "This note covers the fundamental principles of nursing ethics, including autonomy, beneficence, non-maleficence, and justice.",
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
  ]

  return (
    <div style={{ padding: "2rem", backgroundColor: "#F5F7F7" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "2rem", color: "#285D66" }}>
        Welcome back, {user.name}!
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "1.5rem",
          marginBottom: "2rem",
        }}
      >
        <StatCard title="Enrolled Courses" value="12" icon={<BookOpen />} color="#285D66" />
        <StatCard title="Completed Courses" value="8" icon={<Award />} color="#B7DBC8" />
        <StatCard title="Hours Spent" value="126" icon={<Clock />} color="#E1DF66" />
        <StatCard title="Total Notes" value="24" icon={<FileText />} color="#6DA095" />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "2rem" }}>
        <div>
          <SectionHeader title="Continue Learning" linkText="View all courses" linkUrl="/courses" />
          <div style={{ display: "grid", gap: "1rem" }}>
            {recentCourses.map((course, index) => (
              <ProgressCard
                key={course.id}
                title={course.title}
                progress={course.progress}
                color={index % 3 === 0 ? "#285D66" : index % 3 === 1 ? "#B7DBC8" : "#E1DF66"}
              />
            ))}
          </div>
        </div>

        <div>
          <SectionHeader title="Upcoming Classes" linkText="View full schedule" linkUrl="/schedule" />
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "0.5rem",
              padding: "1.5rem",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            }}
          >
            {upcomingClasses.map((cls, index) => (
              <UpcomingClass key={cls.id} cls={cls} isLast={index === upcomingClasses.length - 1} />
            ))}
          </div>
        </div>
      </div>

      <div style={{ marginTop: "2rem" }}>
        <SectionHeader title="Recent Notes" linkText="View all notes" linkUrl="/notes" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
          {recentNotes.map((note) => (
            <NoteCard key={note.id} note={note} />
          ))}
        </div>
      </div>
    </div>
  )
}

const StatCard = ({ title, value, icon, color }) => (
  <div
    style={{
      backgroundColor: "white",
      borderRadius: "0.5rem",
      padding: "1.5rem",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      border: `1px solid ${color}`,
    }}
  >
    <div>
      <p style={{ color: "#666", fontSize: "0.875rem", marginBottom: "0.5rem" }}>{title}</p>
      <h3 style={{ fontSize: "1.5rem", fontWeight: "bold", color }}>{value}</h3>
    </div>
    <div style={{ backgroundColor: `${color}20`, padding: "0.75rem", borderRadius: "0.5rem" }}>{icon}</div>
  </div>
)

const SectionHeader = ({ title, linkText, linkUrl }) => (
  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
    <h2 style={{ fontSize: "1.25rem", fontWeight: "600", color: "#285D66" }}>{title}</h2>
    <Link to={linkUrl} style={{ fontSize: "0.875rem", fontWeight: "500", color: "#285D66", textDecoration: "none" }}>
      {linkText}
    </Link>
  </div>
)

const UpcomingClass = ({ cls, isLast }) => (
  <div
    style={{
      paddingBottom: isLast ? "0" : "0.75rem",
      marginBottom: isLast ? "0" : "0.75rem",
      borderBottom: isLast ? "none" : "1px solid #B7DBC8",
    }}
  >
    <div
      style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.25rem" }}
    >
      <h4 style={{ fontWeight: "500", color: "#285D66" }}>{cls.title}</h4>
      <span
        style={{
          fontSize: "0.75rem",
          backgroundColor: "#B7DBC8",
          padding: "0.25rem 0.5rem",
          borderRadius: "9999px",
          color: "#285D66",
        }}
      >
        {cls.date}
      </span>
    </div>
    <p style={{ fontSize: "0.875rem", color: "#666666" }}>{cls.time}</p>
  </div>
)

export default Dashboard

