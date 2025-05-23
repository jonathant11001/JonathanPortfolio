import inProgress from '../assets/InProgress.png'

function App() {
  return (
    <div className="w-screen h-screen m-0 p-0" style={{ backgroundColor: "#FEEDCC" }}>
      <img
        src={inProgress}
        alt="In Progress"
        className="w-full h-full object-contain block"
      />
    </div>
  )
}

export default App
