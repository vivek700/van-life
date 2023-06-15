import { Suspense} from "react"
import {
  NavLink,
  Link,
  Outlet,
  useLoaderData,
  defer,
  Await,
} from "react-router-dom"
import { getVan } from "../../../api"
import { requireAuth } from "../../../utils"

export async function loader({ params, request }) {
  await requireAuth(request)
  return defer({ van: getVan(params.id) })
}

export default function HostVanDetail() {
  const activeLink = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  }

  const vanPromise = useLoaderData()

  function renderVanElement(van) {
    return (
      <section className="host-van-detail-page-wrapper">
        <div className="host-van-detail-page">
          <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
          <div className="host-van-detail-page-info">
            <i className={`van-type ${van.type} selected`}>{van.type}</i>
            <h2>{van.name}</h2>
            <p>
              ${van.price}
              <span>/day</span>
            </p>
          </div>
        </div>
        <NavLink
          to="."
          end
          className="host-van-deatil-page-link"
          style={({ isActive }) => (isActive ? activeLink : null)}
        >
          Details
        </NavLink>
        <NavLink
          to="pricing"
          className="host-van-deatil-page-link"
          style={({ isActive }) => (isActive ? activeLink : null)}
        >
          Pricing
        </NavLink>
        <NavLink
          to="photos"
          className="host-van-deatil-page-link"
          style={({ isActive }) => (isActive ? activeLink : null)}
        >
          Photos
        </NavLink>
        <section className="van-host-detail-outlet">
          <Outlet context={[van]} />
        </section>
      </section>
    )
  }

  return (
    <section className="host-van-detail-container">
      <Link to=".." relative="path" className="host-van-deatil-page-link">
        &larr; Back to all Vans
      </Link>
      <Suspense fallback={<h3 className="loading">Loading van...</h3>}>
        <Await resolve={vanPromise.van}>{renderVanElement}</Await>
      </Suspense>
    </section>
  )
}
