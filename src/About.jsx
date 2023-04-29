import Nav from './Nav'


function About() {
    return (
        <>
            <Nav />
            <div className='about'>
                <img src="/src/assets/van.jpg" alt="image" />
                <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
                <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
                    (Hitch costs extra 😉)</p>

                <p>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>

                <section>
                    <h2>Your destination is waiting. <br />
                        Your van is ready.</h2>
                    <button>Explore our vans</button>
                </section>
            </div >
            <footer>
                <p>Ⓒ 2023 #VANLIFE</p>
            </footer>

        </>

    )
}
export default About