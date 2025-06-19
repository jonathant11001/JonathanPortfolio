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
    <nav className="fixed top-0 left-0 w-screen bg-yellow-100 shadow p-4 flex justify-center z-50">
      <ul className="flex gap-8">
        {navLinks.map(link => (
          <li key={link.path}>
            <Link
              to={link.path}
              className={`text-lg font-semibold hover:text-yellow-700 transition ${
                location.pathname === link.path ? "text-yellow-700 underline" : "text-gray-800"
              }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default TopNavbar