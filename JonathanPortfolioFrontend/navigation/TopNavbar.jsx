import { Link, useLocation } from "react-router-dom"

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/projects", label: "Projects" },
  { path: "/contact", label: "Contact" },
]

function TopNavbar() {
  const location = useLocation()

  return (
    <nav className="fixed top-0 left-0 w-screen shadow p-4 z-50" style={{ backgroundColor: "#6CA6CD" }}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <span className="text-2xl font-bold text-[#2B2D42]">Jonathan Tam</span>
        <ul className="flex gap-8">
          {navLinks.map(link => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`text-lg font-semibold hover:text-[#397BA6] transition ${
                  location.pathname === link.path ? "text-[#2B2D42] underline" : "text-gray-800"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default TopNavbar