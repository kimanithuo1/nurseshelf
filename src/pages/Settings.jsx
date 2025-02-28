"use client"

import { useState, useEffect } from "react"
import { useAuth } from "../context/AuthContext"

const Settings = () => {
  const { user } = useAuth()
  const [settings, setSettings] = useState({
    email: "",
    notifications: {
      email: true,
      push: true,
    },
    theme: "light",
  })

  useEffect(() => {
    // TODO: Backend team - Implement API call to fetch user's settings
    // Example API call:
    // const fetchSettings = async () => {
    //   try {
    //     const response = await fetch('/api/settings');
    //     const data = await response.json();
    //     setSettings(data);
    //   } catch (error) {
    //     console.error('Error fetching settings:', error);
    //   }
    // };
    // fetchSettings();

    // Mock data
    setSettings({
      email: user.email,
      notifications: {
        email: true,
        push: true,
      },
      theme: "light",
    })
  }, [user])

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setSettings((prevSettings) => ({
      ...prevSettings,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: Backend team - Implement API call to update user's settings
    // Example API call:
    // const updateSettings = async () => {
    //   try {
    //     const response = await fetch('/api/settings', {
    //       method: 'PUT',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify(settings),
    //     });
    //     const data = await response.json();
    //     // Handle success
    //   } catch (error) {
    //     console.error('Error updating settings:', error);
    //   }
    // };
    // updateSettings();

    console.log("Settings updated:", settings)
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-teal mb-6">Settings</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={settings.email}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
          />
        </div>
        <div>
          <h3 className="text-lg font-medium text-gray-900">Notifications</h3>
          <div className="mt-2 space-y-4">
            <div className="flex items-center">
              <input
                id="notifications-email"
                name="notifications.email"
                type="checkbox"
                checked={settings.notifications.email}
                onChange={handleChange}
                className="h-4 w-4 rounded border-gray-300 text-teal-600 focus:ring-teal-500"
              />
              <label htmlFor="notifications-email" className="ml-3 block text-sm font-medium text-gray-700">
                Email notifications
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="notifications-push"
                name="notifications.push"
                type="checkbox"
                checked={settings.notifications.push}
                onChange={handleChange}
                className="h-4 w-4 rounded border-gray-300 text-teal-600 focus:ring-teal-500"
              />
              <label htmlFor="notifications-push" className="ml-3 block text-sm font-medium text-gray-700">
                Push notifications
              </label>
            </div>
          </div>
        </div>
        <div>
          <label htmlFor="theme" className="block text-sm font-medium text-gray-700">
            Theme
          </label>
          <select
            id="theme"
            name="theme"
            value={settings.theme}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>
        <div>
          <button type="submit" className="btn-primary">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  )
}

export default Settings

