import { Container, Navbar } from "react-bootstrap"
import { NavLink } from "react-router-dom"


const Navegacion = () => {
    const setActiveClass = ({ isActive }) => (isActive ? "link-activo" : "text-white text-decoration-none");
    return (
        <Navbar bg="dark" variant="dark">
            <Container className="d-flex justify-content-between">
                <Navbar.Brand href="/"><img src="../../public/gratis-png-logo-de-pokemon.png" alt="logo" height="30" className="d-inline-block align-top" /> </Navbar.Brand>
                <div className="d-flex">               
                <NavLink to="/" className={setActiveClass}>Home</NavLink>
                <NavLink to="/pokemones" className={setActiveClass}>Pokemones</NavLink>
                </div>
            </Container>
        </Navbar>
    )
}

export default Navegacion