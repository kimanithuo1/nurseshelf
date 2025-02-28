"use client"

import { useState, useEffect } from "react"
import { Calendar, Clock } from "lucide-react"

const Schedule = () => {
  const [schedules, setSchedules] = useState([])

  useEffect(() => {
    // TODO: Backend team - Implement API call to fetch user's schedule
    // Example API call:
    // const fetchSchedule = async () => {
    //   try {
    //     const response = await fetch('/api/schedule');
    //     const data = await response.json();
    //     setSchedules(data);
    //   } catch (error) {
    //     console.error('Error fetching schedule:', error);
    //   }
    // };
    // fetchSchedule();

    // Mock data
    setSchedules([
      { id: 1, title: "Advanced Cardiac Life Support", date: "2023-05-15", time: "10:00 AM - 12:00 PM" },
      { id: 2, title: "Pharmacology Basics", date: "2023-05-16", time: "2:00 PM - 4:00 PM" },
      { id: 3, title: "Patient Assessment Techniques", date: "2023-05-17", time: "9:00 AM - 11:00 AM" },
    ])
  }, [])

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-teal mb-6">My Schedule</h1>
      <div className="space-y-4">
        {schedules.map((event) => (
          <div key={event.id} className="card flex items-center p-4">
            <div className="mr-4 bg-mint/20 p-3 rounded-full">
              <Calendar className="text-teal" size={24} />
            </div>
            <div className="flex-grow">
              <h3 className="font-semibold text-lg">{event.title}</h3>
              <div className="flex items-center text-gray-600 mt-1">
                <Calendar size={16} className="mr-2" />
                <span className="mr-4">{event.date}</span>
                <Clock size={16} className="mr-2" />
                <span>{event.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Schedule

