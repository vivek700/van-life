import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function HostVans() {
  const [hostVans, setHostVans] = useState([])

  useEffect(() => {
    fetch("/api/host/vans")
      .then((res) => res.json())
      .then((data) => setHostVans(data.vans))
      .catch((err) => console.log(err))
  }, [])

  const hostVanElement = hostVans.map((van) => (
    <Link to = {`/host/vans/${van.id}`}
          key={van.id}    
          className="host-van-link-wrapper"
    >
      <div className="host-van-list" key={van.id}>
        <img src={van.imageUrl} alt="image" />
        <div className="host-van-info">
          <h2>{van.name}</h2>
          <p>${van.price}/day</p>
        </div>
      </div>
    </Link>
  ))

  return (
    <div className="host-van-list-container">
      <h1>Your listed vans</h1>
      {hostVans.length > 0 ? (
        <section>{hostVanElement}</section>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  )
}
