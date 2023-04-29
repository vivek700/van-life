import { Link } from 'react-router-dom'



function Nav() {
    return(
        <nav>
        <Link to= "/">
          <h1>#VANLIFE</h1>
        </Link>

        <div>
          <Link to={'/about'}>
            <span>About</span>
          </Link>
          <Link>
            <span>Vans</span>
          </Link>


        </div>
      </nav>
    )
}
export default Nav