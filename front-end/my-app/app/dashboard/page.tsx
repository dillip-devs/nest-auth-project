'use client'

import { useState } from 'react'

export default function Dashboard() {
  const [user] = useState({
    name: 'John Doe',
    email: 'john@example.com'
  })

  const handleLogout = () => {
    console.log('Logging out...')
    alert('Logged out!')
    // You can redirect to login page here
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
          >
            Logout
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-semibold mb-2">Welcome, {user.name}!</h2>
          <p className="text-gray-600">{user.email}</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-gray-500 text-sm font-medium mb-2">Total Users</h3>
            <p className="text-3xl font-bold text-blue-600">1,234</p>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-gray-500 text-sm font-medium mb-2">Active Projects</h3>
            <p className="text-3xl font-bold text-green-600">56</p>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-gray-500 text-sm font-medium mb-2">Revenue</h3>
            <p className="text-3xl font-bold text-purple-600">$12,345</p>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b pb-3">
              <div>
                <p className="font-medium">New user registered</p>
                <p className="text-sm text-gray-500">2 hours ago</p>
              </div>
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                Success
              </span>
            </div>
            
            <div className="flex items-center justify-between border-b pb-3">
              <div>
                <p className="font-medium">Project completed</p>
                <p className="text-sm text-gray-500">5 hours ago</p>
              </div>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                Info
              </span>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Payment received</p>
                <p className="text-sm text-gray-500">1 day ago</p>
              </div>
              <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                Payment
              </span>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}