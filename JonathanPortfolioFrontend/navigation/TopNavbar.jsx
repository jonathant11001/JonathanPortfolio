import { Link, useLocation } from "react-router-dom"

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/projects", label: "Projects" },
  { path: "/contact", label: "Contact" },
]

function TopNavbar() {
  const location = useLocation()

  return (
    <nav className="fixed top-0 left-0 w-screen p-4 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <span className="text-2xl font-bold text-white">Jonathan Tam</span>
        <ul className="flex gap-8">
          {navLinks.map(link => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`text-lg font-semibold transition ${
                  location.pathname === link.path
                    ? "text-yellow-200 underline"
                    : "text-white hover:text-blue-200"
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