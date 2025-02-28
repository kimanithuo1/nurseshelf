import { Clock, Users, Star } from "lucide-react"
import { Link } from "react-router-dom"

const CourseCard = ({ course }) => {
  return (
    <div className="card hover:shadow-lg transition-shadow">
      <div className="relative">
        <img
          src={course.image || "/placeholder.svg?height=200&width=400"}
          alt={course.title}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded-full text-xs font-medium text-teal">
          {course.category}
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{course.description}</p>

        <div className="flex items-center text-sm text-gray-500 mb-4">
          <div className="flex items-center mr-4">
            <Clock size={14} className="mr-1" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center mr-4">
            <Users size={14} className="mr-1" />
            <span>{course.students} students</span>
          </div>
          <div className="flex items-center">
            <Star size={14} className="mr-1 text-yellow-500" />
            <span>{course.rating}</span>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img
              src={course.instructor.avatar || "/placeholder.svg?height=50&width=50"}
              alt={course.instructor.name}
              className="w-8 h-8 rounded-full mr-2"
            />
            <span className="text-sm font-medium">{course.instructor.name}</span>
          </div>
          <Link to={`/courses/${course.id}`} className="btn-primary text-sm">
            View Course
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CourseCard

