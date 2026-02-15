'use client'

import { useState } from 'react'
import Login from './components/Login'
import Signup from './components/Signup'

export default function Home() {
  const [showLogin, setShowLogin] = useState(true)

  return (
    <div className="min-h-screen flex items-center justify-center">
      {showLogin ? (
        <Login onSwitchToSignup={() => setShowLogin(false)} />
      ) : (
        <Signup onSwitchToLogin={() => setShowLogin(true)} />
      )}
    </div>
  )
}
