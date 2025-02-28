"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import CourseCard from "../components/CourseCard"
import { Search, Clock, Users, Star } from "lucide-react"

const Courses = () => {
  const [activeFilter, setActiveFilter] = useState("all")

  // Mock data
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-teal mb-8">Explore Our Courses</h1>

      {/* Featured Course */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Featured Course</h2>
        <div className="card overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <img
                className="h-48 w-full object-cover md:w-48"
                src={featuredCourse.image || "/placeholder.svg"}
                alt={featuredCourse.title}
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-teal font-semibold">{featuredCourse.category}</div>
              <Link
                to={`/courses/${featuredCourse.id}`}
                className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
              >
                {featuredCourse.title}
              </Link>
              <p className="mt-2 text-gray-500">{featuredCourse.description}</p>
              <div className="mt-4 flex items-center">
                <div className="flex items-center text-sm text-gray-500">
                  <Clock size={16} className="mr-1" />
                  <span>{featuredCourse.duration}</span>
                </div>
                <div className="ml-6 flex items-center text-sm text-gray-500">
                  <Users size={16} className="mr-1" />
                  <span>{featuredCourse.students} students</span>
                </div>
                <div className="ml-6 flex items-center text-sm text-gray-500">
                  <Star size={16} className="mr-1 text-yellow-400" />
                  <span>{featuredCourse.rating}</span>
                </div>
              </div>
              <div className="mt-4">
                <Link
                  to={`/courses/${featuredCourse.id}`}
                  className="inline-block px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-teal hover:bg-teal-500 focus:outline-none focus:border-teal-700 focus:shadow-outline-teal active:bg-teal-700 transition ease-in-out duration-150"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold">All Courses</h2>
          <div className="relative">
            <input
              type="text"
              placeholder="Search courses..."
              className="pl-10 pr-4 py-2 border border-light rounded-md focus:outline-none focus:ring-2 focus:ring-mint"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
          </div>
        </div>
      </div>

      <div className="mb-8 overflow-x-auto">
        <div className="flex space-x-2 pb-2">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                activeFilter === filter.id ? "bg-teal text-white" : "bg-light text-gray-700 hover:bg-mint/30"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  )
}

export default Courses

