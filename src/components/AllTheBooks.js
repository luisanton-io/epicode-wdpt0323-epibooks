import { Card, Col, Container, Form, Row, Tab, Tabs } from "react-bootstrap";
import fantasy from "../data/fantasy.json";
import history from "../data/history.json";
import horror from "../data/horror.json";
import romance from "../data/romance.json";
import scifi from "../data/scifi.json";

import { useState } from "react";

function SingleBook({ book }) {
  const [selected, setSelected] = useState(false);

  return (
    <Col xs={4} className="d-flex">
      <Card
        onClick={() => setSelected(!selected)}
        className="flex-grow-1"
        style={{
          outline: selected ? "3px solid red" : "3px solid transparent",
          margin: "-3px",
        }}
      >
        <Card.Img variant="top" src={book.img} />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Card.Text>{book.price}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

const BooksByGenre = {
  fantasy,
  history,
  horror,
  romance,
  scifi,
};

export default function AllTheBooks() {
  const [query, setQuery] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("fantasy");

  const books = BooksByGenre[selectedGenre];

  const booksByQuery = (book) =>
    book.title.toLowerCase().includes(query.toLowerCase());

  return (
    <Container>
      <Tabs
        defaultActiveKey="profile"
        id="justify-tab-example"
        className="my-3"
        justify
        onSelect={(genre) => setSelectedGenre(genre)}
      >
        {Object.keys(BooksByGenre).map((genre) => (
          <Tab eventKey={genre} title={genre} />
        ))}
      </Tabs>
      <Form.Group className="py-4">
        <Form.Label>Search</Form.Label>
        <Form.Control
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </Form.Group>
      <Row className="row-gap-3">
        {books.filter(booksByQuery).map((book) => (
          <SingleBook book={book} key={book.asin} />
        ))}
      </Row>
    </Container>
  );
}
