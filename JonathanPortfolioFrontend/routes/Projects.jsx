import DummyData from '../data/DummyData.jsx'
import InProgressCarousel from '../components/InProgressCarousel'
import CompletedProjects from '../components/CompletedProjects'

function Projects() {
  const inProgressProjects = DummyData.filter(p => p.progress === "In Progress")
  const completedProjects = DummyData.filter(p => p.progress === "Completed")

  return (
    <div className="w-screen min-h-screen m-0 p-0 pt-16 bg-gradient-to-br from-[#0B1D26] via-[#5E9CAC] to-[#C2E9FB] flex flex-col items-center">
      <h1 className="text-5xl font-bold text-white mb-10 mt-4 text-center">Projects</h1>
      <InProgressCarousel projects={inProgressProjects} />
      <CompletedProjects projects={completedProjects} />
    </div>
  )
}

export default Projects