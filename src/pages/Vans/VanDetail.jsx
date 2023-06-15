import {
  Link,
  useLocation,
  useLoaderData,
  defer,
  Await,
} from "react-router-dom"
import { getVan } from "../../../api"
import { Suspense } from "react"

export function loader({ params }) {
  return defer({ van: getVan(params.id) })
}

export default function VanDetail() {
  const vanPromise = useLoaderData()

  const Location = useLocation()

  const search = Location.state?.search || ""
  const type = Location.state?.type || "all"

  function renderVanElement(van) {
    return (
      <div className="van-detail">
        <img src={van.imageUrl} alt="van-image" loading="lazy" />
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
        <h2>{van.name}</h2>
        <p className="van-price">
          <span>${van.price}</span>/day
        </p>
        <p className="van-detail-description">{van.description}</p>
        <button className="link-button">Rent this van</button>
      </div>
    )
  }
  return (
    <div className="van-detail-container">
      <Link
        to={`..${search}`}
        relative="path"
        className="host-van-deatil-page-link"
      >
        &larr; {`Back to ${type} vans`}
      </Link>
      <Suspense fallback={<h3 className="loading">Loading van...</h3>}>
        <Await resolve={vanPromise.van}>{renderVanElement}</Await>
      </Suspense>
    </div>
  )
}
