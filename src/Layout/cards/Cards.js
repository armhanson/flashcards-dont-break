import React from "react";
import { Link } from "react-router-dom";
import { Button, Card } from "react-bootstrap";

export function CardList({ deck, onCardDelete }) {
  const { cards = [] } = deck;

  const list = cards.map((card) => (
    <li>
      <div>
        <div>{card.front}</div>
        <div>{card.back}</div>
      </div>
      <div>
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
      </div>

    </li>
  ));
}

export default CardList;