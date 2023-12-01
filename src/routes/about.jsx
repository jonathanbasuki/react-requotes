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
                                Quotable stands as a liberating resource —a free and open-source quotations API. Offering a treasure trove of timeless wisdom, this API empowers developers and enthusiasts alike to seamlessly integrate and explore a vast collection of quotes from various sources.
                            </Card.Text>
                            <Button as={Link} to="https://github.com/lukePeavey/quotable" variant="outline-light">Luke Peavey on Github</Button>
                        </Card.Body>
                    </Card>

                    <Card className="mb-3" bg="dark" border="light">
                        <Card.Header className="text-light">Made with <span className="text-danger fs-5">&hearts;</span></Card.Header>
                        <Card.Body className="text-light">
                            <Card.Title>ReQuotes by Jonathan Basuki</Card.Title>
                            <Card.Text>
                                ReQuotes, a sleek web application, brings you inspiring quotes from renowned figures worldwide. Crafted with the dynamic combination of React, Vite, and React Router DOM, this app seamlessly integrates with the Quotable API to deliver a curated collection of thought-provoking quotes. Explore the wisdom of influential personalities with ease, as ReQuotes elevates your daily dose of inspiration.
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