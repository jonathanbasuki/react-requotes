import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="navbar justify-content-center mb-4">
            <Nav variant="underline" defaultActiveKey="/">
                <Nav.Item>
                    <Nav.Link className="nav-link text-light" as={Link} to="/" exact activeClassName="active">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="nav-link text-light" as={Link} to="/quotes" activeClassName="active">Quotes</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="nav-link text-light" as={Link} to="/about" activeClassName="active">About</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    );
}