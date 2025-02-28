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
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold mb-6">Welcome back, {user.name}!</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="card bg-gradient-to-br from-teal to-teal/90 text-white">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-white/80 mb-1">Enrolled Courses</p>
                <h3 className="text-2xl font-bold">12</h3>
              </div>
              <div className="p-2 bg-white/20 rounded-lg">
                <BookOpen size={24} />
              </div>
            </div>
          </div>

          <div className="card bg-gradient-to-br from-mint to-mint/90 text-teal">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-teal/80 mb-1">Completed Courses</p>
                <h3 className="text-2xl font-bold">8</h3>
              </div>
              <div className="p-2 bg-teal/20 rounded-lg">
                <Award size={24} />
              </div>
            </div>
          </div>

          <div className="card bg-gradient-to-br from-salmon to-salmon/90 text-white">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-white/80 mb-1">Hours Spent</p>
                <h3 className="text-2xl font-bold">126</h3>
              </div>
              <div className="p-2 bg-white/20 rounded-lg">
                <Clock size={24} />
              </div>
            </div>
          </div>

          <div className="card bg-gradient-to-br from-light to-light/90 text-teal">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-teal/80 mb-1">Total Notes</p>
                <h3 className="text-2xl font-bold">24</h3>
              </div>
              <div className="p-2 bg-teal/20 rounded-lg">
                <FileText size={24} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Continue Learning</h2>
            <Link to="/courses" className="text-sm font-medium text-teal hover:text-teal/80">
              View all courses
            </Link>
          </div>
          <div className="space-y-4">
            {recentCourses.map((course, index) => (
              <ProgressCard
                key={course.id}
                title={course.title}
                progress={course.progress}
                color={index % 3 === 0 ? "bg-teal" : index % 3 === 1 ? "bg-mint" : "bg-salmon"}
              />
            ))}
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Upcoming Classes</h2>
            <Link to="/schedule" className="text-sm font-medium text-teal hover:text-teal/80">
              View full schedule
            </Link>
          </div>
          <div className="card divide-y divide-light">
            {upcomingClasses.map((cls) => (
              <div key={cls.id} className="py-3 first:pt-0 last:pb-0">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-medium">{cls.title}</h4>
                  <span className="text-xs bg-light px-2 py-1 rounded-full">{cls.date}</span>
                </div>
                <p className="text-sm text-gray-600">{cls.time}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Recent Notes</h2>
          <Link to="/notes" className="text-sm font-medium text-teal hover:text-teal/80">
            View all notes
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {recentNotes.map((note) => (
            <NoteCard key={note.id} note={note} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Dashboard

