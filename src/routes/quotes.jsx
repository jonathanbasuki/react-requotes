import TagBadge from '../components/tag_badge';

import { useState } from 'react';
import { Row, Col, Card, Form } from 'react-bootstrap';

export default function Quotes() {
    const URL = "https://api.quotable.io/quotes/random?limit=5";
    const [quote, setQuote] = useState([]);
    const [searchHint, setSearchHint] = useState('While you ponder the mysteries of life, allow us to share some insightful quote for you.');

    const getQuoteData = async (url) => {
        const response = await fetch(url);
        const quoteData = await response.json();

        setQuote(quoteData);
    }

    const submitSearchTag = (event) => {
        // const TAG_URL = "https://api.quotable.io/quotes/random?"

        event.preventDefault();

        const keyword = event.target.elements['tag-keyword'].value;

        setSearchHint(keyword ? `Exploring the world of "${keyword}" quotes? Here are some curated gems just for you.` : 'While you ponder the mysteries of life, allow us to share some insightful quote for you.');

        getQuoteData(URL + `&tags=${keyword}`)
    }

    useState(() => {
        getQuoteData(URL);
    }, []);

    return (
        <>
            <Row>
                <Col md={4}></Col>
                <Col md={4}>
                    <Form onSubmit={submitSearchTag}>
                        <Form.Control id='tag-keyword' type="text" placeholder="Search Quote by Tag" />
                    </Form>

                </Col>
                <Col md={4}></Col>
            </Row>
            <Row>
                <Col md={2}></Col>
                <Col md={8} className='text-light mt-4'>
                    <p className='search-hint mb-4'>
                        {searchHint}
                    </p>

                    {quote.map((item) => (
                        <Card key={item._id} className="mb-3" bg="dark" border="light">
                            <Card.Header>
                                <TagBadge data={item.tags} />
                            </Card.Header>
                            <Card.Body className="text-light">
                                <blockquote className="blockquote mb-0">
                                    <p>
                                        {" "}
                                        {item.content}{" "}
                                    </p>
                                    <footer className="blockquote-footer">
                                        {item.author}
                                    </footer>
                                </blockquote>
                            </Card.Body>
                        </Card>
                    ))}
                </Col>
                <Col md={2}></Col>
            </Row>
        </>
    );
}
