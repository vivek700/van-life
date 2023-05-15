import { useEffect, useState } from "react"
import { NavLink, Link, Outlet, useParams } from "react-router-dom"

export default function HostVanDetail() {
  const activeLink = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  }

  const params = useParams()
  const [van, setVan] = useState(null)
  useEffect(() => {
    fetch(`/api/host/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans[0]))
  }, [params.id])

  return (
    <section className="host-van-detail-container">
      <Link to=".." relative="path" className="host-van-deatil-page-link">
        &larr; Back to all Vans
      </Link>
      {van ? (
        <section className="host-van-detail-page-wrapper">
          <div className="host-van-detail-page">
            <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
            <div className="host-van-detail-page-info">
              <i className={`van-type ${van.type} selected`}>{van.type}</i>
              <h2>{van.name}</h2>
              <p>${van.price}<span>/day</span></p>
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
      ) : (
        <h2>Loading...</h2>
      )}
    </section>
  )
}
