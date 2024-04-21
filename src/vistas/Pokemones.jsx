import MiContexto from "../MiContexto"
import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const Pokemones = () => {
    const { Poke_API } = useContext(MiContexto)
    const { name } = useParams();
    const [poke, setPoke] = useState([])
    const [stats, setStats] = useState([])

    useEffect(() => {
        fetchPokemon()
    }, [])

    const fetchPokemon = async () => {
        try {
            const response = await fetch(Poke_API + '/pokemon/' + name)
            if (!response.ok) {
                throw new Error('Error en la petición')
            }
            const data = await response.json()
            setStats(data.stats)
            setPoke(data.sprites)
        } catch (error) {
            console.error('Error en la petición', error);
        }
    }

/* console.log(poke.other.home["front_default"]) */
console.log(poke?.other?.home?.front_default)
console.log(stats)
    return (
        <div className="tarjeta">
        <main>
            <div className="left">
                <img id="pokemon" src={poke?.other?.home?.front_default} alt="pokemon" />
            </div>
            <div className="right">
                <h1>{name}</h1>
                <ul>
                    {stats.map((stat) => (
                        <li key={stat.stat.name}>{stat.stat.name}: {stat.base_stat}</li>
                    ))}
                </ul>
            </div>
        </main>
        </div>
    )
}

export default Pokemones