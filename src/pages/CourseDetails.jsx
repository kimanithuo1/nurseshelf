"use client"

import { useParams } from "react-router-dom"
import { Clock, Users, Star, BookOpen, CheckCircle, Play, Download, Award } from "lucide-react"

const CourseDetails = () => {
  const { courseId } = useParams()


  
  // Mock data - in a real app, you would fetch this based on courseId



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
    <div className="max-w-5xl mx-auto">
      <div className="relative mb-8">
        <img
          src={course.image || "/placeholder.svg"}
          alt={course.title}
          className="w-full h-64 object-cover rounded-lg"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-lg"></div>
        <div className="absolute bottom-0 left-0 p-6 text-white">
          <div className="flex items-center mb-2">
            <span className="bg-teal px-3 py-1 rounded-full text-xs font-medium mr-2">{course.category}</span>
            <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-medium">{course.level}</span>
          </div>
          <h1 className="text-3xl font-bold mb-2 text-white">{course.title}</h1>
          <div className="flex items-center text-sm">
            <div className="flex items-center mr-4">
              <Clock size={16} className="mr-1" />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center mr-4">
              <Users size={16} className="mr-1" />
              <span>{course.students} students</span>
            </div>
            <div className="flex items-center">
              <Star size={16} className="mr-1 text-yellow-400" />
              <span>{course.rating}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="card mb-8">
            <h2 className="text-xl font-semibold mb-4">About This Course</h2>
            <p className="text-gray-700 mb-6">{course.description}</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex flex-col items-center p-3 bg-light/50 rounded-lg">
                <BookOpen size={24} className="text-teal mb-2" />
                <span className="text-sm text-gray-600">Lessons</span>
                <span className="font-semibold">{course.lessons}</span>
              </div>
              <div className="flex flex-col items-center p-3 bg-light/50 rounded-lg">
                <Clock size={24} className="text-teal mb-2" />
                <span className="text-sm text-gray-600">Duration</span>
                <span className="font-semibold">{course.duration}</span>
              </div>
              <div className="flex flex-col items-center p-3 bg-light/50 rounded-lg">
                <Users size={24} className="text-teal mb-2" />
                <span className="text-sm text-gray-600">Students</span>
                <span className="font-semibold">{course.students}</span>
              </div>
              <div className="flex flex-col items-center p-3 bg-light/50 rounded-lg">
                <Star size={24} className="text-teal mb-2" />
                <span className="text-sm text-gray-600">Rating</span>
                <span className="font-semibold">{course.rating}</span>
              </div>
            </div>
          </div>

          <div className="card mb-8">
            <h2 className="text-xl font-semibold mb-4">Course Content</h2>
            <div className="mb-4">
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>
                  {course.modules.length} modules • {course.lessons} lessons
                </span>
                <span>Total: {course.duration}</span>
              </div>
            </div>

            <div className="space-y-4">
              {course.modules.map((module) => (
                <div key={module.id} className="border border-light rounded-lg overflow-hidden">
                  <div className="flex justify-between items-center p-4 bg-light/30">
                    <h3 className="font-medium">{module.title}</h3>
                    <span className="text-sm text-gray-600">{module.lessons.length} lessons</span>
                  </div>
                  <div className="divide-y divide-light">
                    {module.lessons.map((lesson) => (
                      <div key={lesson.id} className="flex items-center justify-between p-4">
                        <div className="flex items-center">
                          {lesson.isCompleted ? (
                            <CheckCircle size={18} className="text-teal mr-3" />
                          ) : (
                            <Play size={18} className="text-gray-400 mr-3" />
                          )}
                          <span className={lesson.isCompleted ? "text-gray-500" : ""}>{lesson.title}</span>
                        </div>
                        <span className="text-sm text-gray-600">{lesson.duration}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="card sticky top-6">
            <div className="flex justify-center mb-6">
              <button className="btn-primary w-full flex items-center justify-center">
                <Play size={18} className="mr-2" />
                Start Learning
              </button>
            </div>

            <div className="space-y-4 mb-6">
              <button className="w-full flex items-center justify-between p-3 border border-light rounded-lg hover:bg-light/30">
                <span className="font-medium">Download Resources</span>
                <Download size={18} />
              </button>
              <button className="w-full flex items-center justify-between p-3 border border-light rounded-lg hover:bg-light/30">
                <span className="font-medium">Course Certificate</span>
                <Award size={18} />
              </button>
            </div>

            <div className="border-t border-light pt-6">
              <h3 className="text-lg font-semibold mb-4">Instructor</h3>
              <div className="flex items-center mb-4">
                <img
                  src={course.instructor.avatar || "/placeholder.svg"}
                  alt={course.instructor.name}
                  className="w-12 h-12 rounded-full mr-3"
                />
                <div>
                  <h4 className="font-medium">{course.instructor.name}</h4>
                  <div className="flex items-center text-sm text-gray-600">
                    <Star size={14} className="text-yellow-400 mr-1" />
                    <span>{course.instructor.rating}</span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-700 mb-4">{course.instructor.bio}</p>
              <div className="flex justify-between text-sm">
                <div>
                  <div className="font-medium">{course.instructor.courses}</div>
                  <div className="text-gray-600">Courses</div>
                </div>
                <div>
                  <div className="font-medium">{course.instructor.students}</div>
                  <div className="text-gray-600">Students</div>
                </div>
                <div>
                  <div className="font-medium">{course.instructor.rating}</div>
                  <div className="text-gray-600">Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseDetails

