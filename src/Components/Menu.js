import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
function Menu() {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Menon Entrega Final</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">
                            Home
                        </Nav.Link>
                        <Nav.Link as={Link} to="/register">
                            Register
                        </Nav.Link>
                        <Nav.Link as={Link} to="/login">
                            Login
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}

export default Menu;
