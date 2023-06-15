import {
  Link,
  useLoaderData,
  useSearchParams,
  defer,
  Await,
} from "react-router-dom"
import { getVans } from "../../../api"
import { Suspense } from "react"

export function loader() {
  return defer({ vans: getVans() })
}

function Vans() {
  const vansPromise = useLoaderData()

  const [searchParams, setSearchParams] = useSearchParams()

  let typeFilter = searchParams.get("type")

  function renderVanElement(vans) {
    const displayVans = typeFilter
      ? vans.filter(
          (van) => van.type.toLowerCase() === typeFilter.toLowerCase()
        )
      : vans

    const vanElements = displayVans.map((van) => (
      <div key={van.id} className="van-title">
        <Link
          to={`${van.id}`}
          state={{
            search: `?${searchParams.toString()}`,
            type: typeFilter,
          }}
        >
          <img src={van.imageUrl} alt="van-image" loading="lazy" />
          <div className="van-info">
            <h3>{van.name}</h3>
            <p>
              ${van.price}
              <span>/day</span>
            </p>
          </div>
          <i className={`van-type ${van.type} selected`}>{van.type}</i>
        </Link>
      </div>
    ))
    return (
      <>
        <section className="van-list-filter-buttons">
          <button
            onClick={() => setSearchParams({ type: "simple" })}
            className={`van-type simple ${
              typeFilter == "simple" ? "selected" : ""
            }`}
          >
            Simple
          </button>
          <button
            onClick={() => setSearchParams({ type: "luxury" })}
            className={`van-type luxury ${
              typeFilter == "luxury" ? "selected" : ""
            }`}
          >
            Luxury
          </button>
          <button
            onClick={() => setSearchParams({ type: "rugged" })}
            className={`van-type rugged ${
              typeFilter == "rugged" ? "selected" : ""
            }`}
          >
            Rugged
          </button>
          {typeFilter && (
            <button
              onClick={() => setSearchParams({})}
              className={`van-type clear-filters`}
            >
              Clear-filter
            </button>
          )}
        </section>
        <div className="van-list">{vanElements}</div>
      </>
    )
  }

  return (
    <>
      <div className="van-list-container">
        <h1>Explore our van options</h1>
        <Suspense fallback={<h3 className="loading">Loading vans...</h3>}>
          <Await resolve={vansPromise.vans}>{renderVanElement}</Await>
        </Suspense>
      </div>
    </>
  )
}

export default Vans
