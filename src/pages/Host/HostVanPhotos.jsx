import { useOutletContext } from "react-router-dom"


export default function HostVanPhotos() {
    const [van] = useOutletContext()
    return (
        <section className="van-host-photos">
            <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
        </section>
    )
}