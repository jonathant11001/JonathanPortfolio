import React, { useState, useEffect } from 'react'
import { supabase } from '../client/supaBaseClient'
import InProgressCarousel from '../components/InProgressCarousel'
import CompletedProjects from '../components/CompletedProjects'

function Projects() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchProjects()
  }, [])

  const fetchProjects = async () => {
    try {
      setLoading(true)
      const { data, error } = await supabase
        .from('Projects')
        .select('*')
      
      if (error) {
        throw error
      }
      
      setProjects(data || [])
    } catch (error) {
      console.error('Error fetching projects:', error)
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  const inProgressProjects = projects.filter(p => p.progress === false)
  const completedProjects = projects.filter(p => p.progress === true)

  if (loading) {
    return (
      <div className="w-screen min-h-screen m-0 p-0 pt-16 bg-gradient-to-br from-[#0B1D26] via-[#5E9CAC] to-[#C2E9FB] flex flex-col items-center justify-center">
        <div className="text-white text-xl">Loading projects...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="w-screen min-h-screen m-0 p-0 pt-16 bg-gradient-to-br from-[#0B1D26] via-[#5E9CAC] to-[#C2E9FB] flex flex-col items-center justify-center">
        <div className="text-white text-xl">Error loading projects: {error}</div>
      </div>
    )
  }

  return (
    <div className="w-screen min-h-screen m-0 p-0 pt-16 bg-gradient-to-br from-[#0B1D26] via-[#5E9CAC] to-[#C2E9FB] flex flex-col items-center">
      <h1 className="text-5xl font-bold text-white mb-10 mt-4 text-center">Projects</h1>
      <InProgressCarousel projects={inProgressProjects} />
      <CompletedProjects projects={completedProjects} />
    </div>
  )
}

export default Projects