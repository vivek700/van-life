import { Link, NavLink } from "react-router-dom"

function Header() {
  const activeLink = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  }
  return (
    <header>
      <Link className="main-title" to="/">
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
        <NavLink
          to="login"
          className="login-link"
        >
          <span className="svg-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12.1597 16C10.1243 16 8.29182 16.8687 7.01276 18.2556C8.38039 19.3474 10.114 20 12 20C13.9695 20 15.7727 19.2883 17.1666 18.1081C15.8956 16.8074 14.1219 16 12.1597 16ZM12 4C7.58172 4 4 7.58172 4 12C4 13.8106 4.6015 15.4807 5.61557 16.8214C7.25639 15.0841 9.58144 14 12.1597 14C14.6441 14 16.8933 15.0066 18.5218 16.6342C19.4526 15.3267 20 13.7273 20 12C20 7.58172 16.4183 4 12 4ZM12 5C14.2091 5 16 6.79086 16 9C16 11.2091 14.2091 13 12 13C9.79086 13 8 11.2091 8 9C8 6.79086 9.79086 5 12 5ZM12 7C10.8954 7 10 7.89543 10 9C10 10.1046 10.8954 11 12 11C13.1046 11 14 10.1046 14 9C14 7.89543 13.1046 7 12 7Z"></path>
            </svg>
          </span>
        </NavLink>
      </nav>
    </header>
  )
}
export default Header
