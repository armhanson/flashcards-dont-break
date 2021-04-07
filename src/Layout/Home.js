import React from "react";
import { Link } from "react-router-dom";
import { Button, Card } from "react-bootstrap";

export default function Home() {
  return (
    <div>
      <Link
        to="/decks/new"
        type="button"
        className="btn btn-secondary mb-2 oi oi-plus"
      >
        {" Create"}
      </Link>
      <Card style={{ width: "28rem" }}>
        <Card.Body>
          <Card.Title>Rendering in React</Card.Title>
          <Card.Text>
            React's component structure allows for quickly building a complex
            web application that relies on DOM manipulation.
          </Card.Text>
          <Link to="/decks/:deckId">
            <Button
              variant="secondary"
              style={{ marginRight: 4 }}
              className="oi oi-eye"
            >
              {" View"}
            </Button>
          </Link>
          <Link to="/decks/:deckId">
            <Button
              variant="primary"
              style={{ marginLeft: 4 }}
              className="oi oi-book"
            >
              {" Study"}
            </Button>
          </Link>
          <Button variant="danger" className="oi oi-trash float-right">
            {" Delete"}
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
