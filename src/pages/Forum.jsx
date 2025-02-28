"use client"

import { useState, useEffect } from "react"
import { User, Clock } from "lucide-react"

const Forum = () => {
  const [topics, setTopics] = useState([])

  useEffect(() => {
    // TODO: Backend team - Implement API call to fetch forum topics
    // Example API call:
    // const fetchTopics = async () => {
    //   try {
    //     const response = await fetch('/api/forum/topics');
    //     const data = await response.json();
    //     setTopics(data);
    //   } catch (error) {
    //     console.error('Error fetching forum topics:', error);
    //   }
    // };
    // fetchTopics();

    // Mock data
    setTopics([
      {
        id: 1,
        title: "Tips for night shift nurses",
        author: "NightOwlRN",
        replies: 15,
        lastActivity: "2023-05-14T10:30:00Z",
      },
      {
        id: 2,
        title: "Best practices for patient handoffs",
        author: "SafetyFirst",
        replies: 8,
        lastActivity: "2023-05-13T14:45:00Z",
      },
      {
        id: 3,
        title: "Dealing with difficult patients",
        author: "CompassionateCare",
        replies: 22,
        lastActivity: "2023-05-12T09:15:00Z",
      },
      {
        id: 4,
        title: "New medication administration techniques",
        author: "PharmExpert",
        replies: 12,
        lastActivity: "2023-05-11T16:20:00Z",
      },
    ])
  }, [])

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-teal mb-6">Nursing Forum</h1>
      <div className="space-y-4">
        {topics.map((topic) => (
          <div key={topic.id} className="card p-4 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-teal">{topic.title}</h3>
              <span className="bg-mint/20 text-teal px-2 py-1 rounded-full text-sm">
                {topic.replies} {topic.replies === 1 ? "reply" : "replies"}
              </span>
            </div>
            <div className="flex items-center text-gray-600 mt-2 text-sm">
              <User size={16} className="mr-2" />
              <span className="mr-4">{topic.author}</span>
              <Clock size={16} className="mr-2" />
              <span>{new Date(topic.lastActivity).toLocaleDateString()}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Forum

