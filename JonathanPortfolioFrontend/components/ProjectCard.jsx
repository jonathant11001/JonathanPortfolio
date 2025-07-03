function ProjectCard({ title, description, techStack, image }) {
  return (
    <div className="bg-white rounded-lg shadow flex flex-col md:flex-row items-center p-4 gap-4 min-w-[320px] max-w-md w-full mx-4 my-4">
      <div className="bg-gray-200 rounded w-full md:w-40 h-32 md:h-24 flex-shrink-0 flex items-center justify-center">
        {image ? (
          <img src={image} alt={title} className="object-cover w-full h-full rounded" />
        ) : (
          <div className="w-full h-full" />
        )}
      </div>
      <div className="flex-1 flex flex-col justify-between h-full">
        <h3 className="text-xl font-bold mb-1">{title}</h3>
        <p className="text-sm text-gray-700 mb-2">Description: <span className="text-gray-500">{description}</span></p>
        <div>
          <span className="font-semibold text-sm">Tech Stack:</span>
          <div className="flex flex-wrap gap-2 mt-1">
            {techStack.map((tech, idx) => (
              <span key={idx} className="bg-gray-100 border border-gray-300 rounded-full px-2 py-0.5 text-xs">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;