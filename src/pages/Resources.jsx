"use client"

import { useState, useEffect } from "react"
import { FileText, Download, ExternalLink } from "lucide-react"

const Resources = () => {
  const [resources, setResources] = useState([])

  useEffect(() => {
    // TODO: Backend team - Implement API call to fetch resources
    // Example API call:
    // const fetchResources = async () => {
    //   try {
    //     const response = await fetch('/api/resources');
    //     const data = await response.json();
    //     setResources(data);
    //   } catch (error) {
    //     console.error('Error fetching resources:', error);
    //   }
    // };
    // fetchResources();

    // Mock data
    setResources([
      { id: 1, title: "Nursing Drug Handbook", type: "PDF", size: "5.2 MB", url: "#" },
      { id: 2, title: "Anatomy and Physiology Quick Reference", type: "PDF", size: "3.8 MB", url: "#" },
      { id: 3, title: "Nursing Procedures Checklist", type: "DOCX", size: "1.5 MB", url: "#" },
      { id: 4, title: "Infection Control Guidelines", type: "PDF", size: "2.1 MB", url: "#" },
      { id: 5, title: "American Nurses Association", type: "External Link", url: "https://www.nursingworld.org/" },
    ])
  }, [])

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-teal mb-6">Learning Resources</h1>
      <div className="space-y-4">
        {resources.map((resource) => (
          <div key={resource.id} className="card p-4 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <FileText className="text-teal mr-3" size={24} />
                <div>
                  <h3 className="font-semibold">{resource.title}</h3>
                  <p className="text-sm text-gray-600">
                    {resource.type === "External Link" ? "Website" : `${resource.type} - ${resource.size}`}
                  </p>
                </div>
              </div>
              {resource.type === "External Link" ? (
                <a
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal-600"
                >
                  <ExternalLink size={20} />
                </a>
              ) : (
                <a href={resource.url} download className="text-teal hover:text-teal-600">
                  <Download size={20} />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Resources

