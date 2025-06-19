import inProgress from '../assets/InProgress.png'

function Projects() {
  return (
    <div className="w-screen h-screen m-0 p-0 pt-16" style={{ backgroundColor: "#FEEDCC" }}>
      <img
        src={inProgress}
        alt="In Progress"
        className="w-full h-full object-contain block"
      />
    </div>
  )
}

export default Projects