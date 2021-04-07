import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { readDeck } from "../../utils/api";
// import { Button, Card } from "react-bootstrap";
import { CardList } from "../cards/CardList";

export default function Deck() {
  const [deck, setDeck] = useState([]);
  const deckId = useParams();

  useEffect(() => {
    readDeck(deckId).then(setDeck);
  }, []);

  return (
    <div>
      <nav className="navbar navbar-sm bg-light text ">
        <Link to="/" className="oi oi-home">
          {" "}
          Home
        </Link>
        <p>/</p>
        <p className="text-secondary">Edit Deck</p>
      </nav>
      <ul>
        <li>
          <CardList deck={deck} />
        </li>
        {/* <Card style={{ width: "28rem", border: 0 }}>
          <Card.Body>
            <Card.Title>Rendering in React</Card.Title>
            <Card.Text>
              React's component structure allows for quickly building a complex
              web application that relies on DOM manipulation.
            </Card.Text>
            <Link to="/decks/:deckId/edit">
              <Button
                variant="secondary"
                style={{ marginRight: 4 }}
                className="oi oi-pencil"
              >
                {" Edit"}
              </Button>
            </Link>
            <Link to="/decks/:deckId">
              <Button
                variant="primary"
                style={{ marginRight: 4, marginLeft: 4 }}
                className="oi oi-book"
              >
                {" Study"}
              </Button>
            </Link>
            <Link to="/decks/:deckId">
              <Button
                variant="primary"
                style={{ marginRight: 4, marginLeft: 4 }}
                className="oi oi-plus"
              >
                {" Add Cards"}
              </Button>
            </Link>
            <Button variant="danger" className="oi oi-trash float-right">
              {" Delete"}
            </Button>
          </Card.Body>
        </Card>
        <h2 className="mt-3">Cards</h2>
        <Card style={{ width: "28rem" }}>
          <Card.Body>
            <Card.Title>Rendering in React</Card.Title>
            <Card.Text>
              React's component structure allows for quickly building a complex
              web application that relies on DOM manipulation.
            </Card.Text>
            <Button variant="danger" className="oi oi-trash float-right">
              {" Delete"}
            </Button>
            <Link to="/decks/:deckId/edit">
              <Button
                variant="secondary"
                style={{ marginRight: 4 }}
                className="oi oi-pencil float-right"
              >
                {" Edit"}
              </Button>
            </Link>
          </Card.Body>
        </Card>
        <Card style={{ width: "28rem" }}>
          <Card.Body>
            <Card.Title>Rendering in React</Card.Title>
            <Card.Text>
              React's component structure allows for quickly building a complex
              web application that relies on DOM manipulation.
            </Card.Text>
            <Button variant="danger" className="oi oi-trash float-right">
              {" Delete"}
            </Button>
            <Link to="/decks/:deckId/edit">
              <Button
                variant="secondary"
                style={{ marginRight: 4 }}
                className="oi oi-pencil float-right"
              >
                {" Edit"}
              </Button>
            </Link>
          </Card.Body>
        </Card> */}
      </ul>
    </div>
  );
}
