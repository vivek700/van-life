import { useOutletContext } from "react-router-dom"

export default function HostVanInfo() {
  const [van] = useOutletContext()

  console.log(van)

  return (
    <section className="host-van-detail-outlet-info">
      <p>
        Name: <span>{van.name}</span>
      </p>
      <p>
        Category: <span>{van.type}</span>
      </p>
      <p>
        Description: <span>{van.description}</span>
      </p>
      <p>
        Visibility: <span>Public</span>
      </p>
    </section>
  )
}
