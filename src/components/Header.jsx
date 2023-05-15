import { Link, NavLink } from "react-router-dom"

function Header() {
  const activeLink = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  }
  return (
    <header>
      <Link to="/">
        <h1>#VANLIFE</h1>
      </Link>

      <nav>
        <NavLink
          to={"/host"}
          style={({ isActive }) => (isActive ? activeLink : null)}
        >
          Host
        </NavLink>
        <NavLink
          to={"/about"}
          style={({ isActive }) => (isActive ? activeLink : null)}
        >
          About
        </NavLink>
        <NavLink
          to="/vans"
          style={({ isActive }) => (isActive ? activeLink : null)}
        >
          Vans
        </NavLink>
      </nav>
    </header>
  )
}
export default Header
