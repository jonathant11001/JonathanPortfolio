import ProjectCard from './ProjectCard'

function CompletedProjects({ projects }) {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="bg-gray-200 rounded-xl px-6 py-8 w-[95vw] max-w-7xl">
        <h2 className="text-3xl font-bold text-center mb-8">Completed</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {projects.map((proj) => (
            <ProjectCard
              key={proj.id}
              title={proj.title}
              description={proj.description}
              image={proj.image}
              techStacks={proj.techStacks || ["React", "SQL", "Java"]}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default CompletedProjects