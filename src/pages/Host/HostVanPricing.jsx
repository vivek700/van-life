import { useOutletContext } from "react-router-dom"

export default function HostVanPricing() {
    const [van] = useOutletContext()
    return (
        <section className="van-host-pricing">
            <p>${van.price}.00<span>/day</span></p>
        </section>
    )
}