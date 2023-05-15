import { NavLink, Outlet } from "react-router-dom"

export default function HostLayout() {
  const activeLink = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  }
  return (
    <>
      <nav>
        <NavLink
          to="."
          end
          style={({ isActive }) => (isActive ? activeLink : null)}
        >
          Dashboard
        </NavLink>
        <NavLink
          to="income"
          style={({ isActive }) => (isActive ? activeLink : null)}
        >
          Income
        </NavLink>
        <NavLink
          to="vans"
          style={({ isActive }) => (isActive ? activeLink : null)}
        >
          Vans
        </NavLink>
        <NavLink
          to="reviews"
          style={({ isActive }) => (isActive ? activeLink : null)}
        >
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </>
  )
}
