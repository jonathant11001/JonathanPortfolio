import React, { useState, useRef } from 'react'
import ProjectCard from './ProjectCard'

function InProgressCarousel({ projects }) {
  const [centerIdx, setCenterIdx] = useState(0)
  const [direction, setDirection] = useState(0)
  const total = projects.length
  const touchStartX = useRef(null)
  const touchEndX = useRef(null)

  const getIndices = () => {
    if (total === 0) return []
    if (total === 1) return [0]
    if (total === 2) {
      const alt = (centerIdx + 1) % 2
      return [alt, centerIdx, alt]
    }
    return [
      (centerIdx - 1 + total) % total,
      centerIdx,
      (centerIdx + 1) % total,
    ]
  }

  const indices = getIndices()

  const handleCardClick = (idx) => {
    if (idx === centerIdx) return
    const newDirection = (idx === indices[2]) ? 1 : -1
    setDirection(newDirection)
    setTimeout(() => {
      setCenterIdx(idx)
      setDirection(0)
    }, 300)
  }

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return
    const diff = touchStartX.current - touchEndX.current
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        handleCardClick(indices[2])
      } else {
        handleCardClick(indices[0])
      }
    }
    touchStartX.current = null
    touchEndX.current = null
  }

  const centerAnim =
    direction === 1
      ? 'animate-slide-left'
      : direction === -1
      ? 'animate-slide-right'
      : ''

  return (
    <div className="w-full flex flex-col items-center mb-12">
      <div className="bg-gray-200 rounded-xl px-10 py-6 w-[98vw] max-w-[1200px] min-h-[340px] md:min-h-[280px] overflow-hidden relative">
        <h2 className="text-3xl font-bold text-center mb-6">In Progress</h2>
        <div
          className="flex flex-row gap-0 justify-center items-center min-h-[220px] relative px-6 md:px-16"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {total === 1 ? (
            <div className="z-20 scale-110 shadow-2xl transition-all duration-300 bg-white rounded-lg">
              <ProjectCard
                title={projects[0].title}
                description={projects[0].description}
                image={projects[0].image}
                gitHubLink={projects[0].gitHubLink}
                techStacks={projects[0].techStacks || ['React', 'SQL', 'Java']}
              />
            </div>
          ) : (
            indices.map((idx, i) => {
              const proj = projects[idx]
              if (!proj) return null

              if (i === 1) {
                return (
                  <div
                    key={proj.id}
                    className={`z-20 scale-110 shadow-2xl transition-all duration-300 bg-white rounded-lg ${centerAnim}`}
                    style={{ position: 'relative' }}
                  >
                    <ProjectCard
                      title={proj.title}
                      description={proj.description}
                      image={proj.image}
                      gitHubLink={proj.gitHubLink}
                      techStacks={proj.techStacks || ['React', 'SQL', 'Java']}
                    />
                  </div>
                )
              }

              return (
                <div
                  key={proj.id + i}
                  className={`absolute top-0 ${
                    i === 0 ? '-left-10 md:-left-16' : '-right-10 md:-right-16'
                  } 
                    opacity-40 blur-[3px] scale-90 cursor-pointer transition-all duration-300 z-10`}
                  style={{ pointerEvents: 'auto' }}
                  onClick={() => handleCardClick(idx)}
                >
                  <ProjectCard
                    title={proj.title}
                    description={proj.description}
                    image={proj.image}
                    gitHubLink={proj.gitHubLink}
                    techStacks={proj.techStacks || ['React', 'SQL', 'Java']}
                  />
                </div>
              )
            })
          )}
        </div>
      </div>
    </div>
  )
}

export default InProgressCarousel