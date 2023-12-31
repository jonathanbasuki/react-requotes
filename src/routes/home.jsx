import { useState } from "react";
import { Row, Col, Card } from "react-bootstrap";

export default function Home() {
    const URL = "https://api.quotable.io/random?minLength=200";
    const [quote, setQuote] = useState([]);

    const getQuoteData = async () => {
        const response = await fetch(URL);
        const quoteData = await response.json();

        setQuote(quoteData);
    }

    useState(() => {
        getQuoteData();
    });

    return (
        <>
            <blockquote className="blockquote mb-2">
                <p>
                    {" "}
                    <h1 className='text-light fs-2'>
                        ReQuotes
                    </h1>{" "}
                </p>
                <footer className="blockquote-footer mt-1">
                    a simple React.JS and Quotable API integration.
                </footer>
            </blockquote>

            <Row>
                <Col md={2}></Col>
                <Col md={8}>
                    <Card className="mt-3 mb-3" bg="dark" border="light">
                        <Card.Body className="text-light">
                            <blockquote className="blockquote mb-0">
                                <p>
                                    {" "}
                                    {quote.content}{" "}
                                </p>
                                <footer className="blockquote-footer">
                                    {quote.author}
                                </footer>
                            </blockquote>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={2}></Col>
            </Row>
        </>
    );
}