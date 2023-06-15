import { Await, Link, defer, useLoaderData } from "react-router-dom"
import { getHostVans } from "../../../api"
import { requireAuth } from "../../../utils"
import { Suspense } from "react"

export async function loader({ request }) {
  await requireAuth(request)
  return defer({ hostVans: getHostVans() })
}

export default function HostVans() {
  const hostVansPromise = useLoaderData()

  function rederHostVanElement(hostVans) {
    const hostVanElement = hostVans.map((van) => (
      <Link to={`${van.id}`} key={van.id} className="host-van-link-wrapper">
        <div className="host-van-list" key={van.id}>
          <img src={van.imageUrl} alt="image" />
          <div className="host-van-info">
            <h2>{van.name}</h2>
            <p>${van.price}/day</p>
          </div>
        </div>
      </Link>
    ))
    return( 
      <section>{hostVanElement}</section>
    )
  }

  return (
    <div className="host-van-list-container">
      <h1>Your listed vans</h1>
      <Suspense fallback={<h3 className="loading">Loading vans...</h3>}>
      <Await resolve={hostVansPromise.hostVans}>
        {rederHostVanElement}
      </Await>
      </Suspense>
    </div>
  )
}
