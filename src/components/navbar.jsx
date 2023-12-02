import { Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="navbar justify-content-center mb-4">
            <Nav variant="underline" defaultActiveKey="/">
                <Nav.Item>
                    <NavLink className="nav-link text-light" as={Link} to="/" exact activeClassName="active">Home</NavLink>
                </Nav.Item>
                <Nav.Item>
                    <NavLink className="nav-link text-light" as={Link} to="/quotes" activeClassName="active">Quotes</NavLink>
                </Nav.Item>
                <Nav.Item>
                    <NavLink className="nav-link text-light" as={Link} to="/about" activeClassName="active">About</NavLink>
                </Nav.Item>
            </Nav>
        </div>
    );
}