import { Card, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function About() {
    return (
        <>
            <Row>
                <Col md={2}></Col>
                <Col md={8}>
                    <Card className="mb-4" bg="dark" border="light">
                        <Card.Header className="text-light">Special Thanks!</Card.Header>
                        <Card.Body className="text-light">
                            <Card.Title>Quotable by Luke Peavey</Card.Title>
                            <Card.Text>
                                Quotable is a free, open source quotations API.
                            </Card.Text>
                            <Button as={Link} to="https://github.com/lukePeavey/quotable" variant="outline-light">Luke Peavey on Github</Button>
                        </Card.Body>
                    </Card>

                    <Card className="mb-4" bg="dark" border="light">
                        <Card.Header className="text-light">Made with <span className="text-danger fs-5">&hearts;</span></Card.Header>
                        <Card.Body className="text-light">
                            <Card.Title>ReQuotes by Jonathan Basuki</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate, voluptatem?
                            </Card.Text>
                            <Button as={Link} to="https://github.com/jonathanbasuki" variant="outline-light">Jonathan Basuki on Github</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={2}></Col>
            </Row>
        </>
    );
}