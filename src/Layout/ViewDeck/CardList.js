import React from "react";
import { Link } from "react-router-dom";
import CardDelete from "../Common/CardDelete";

export default function CardList({ error, setError, deck, setDeck, url }) {
  return Object.keys(deck).length > 0
    ? deck.cards.map((card, index) => (
        <div className="card" key={index}>
          <div className="card-body">
            <span className="card-text d-flex row">
              <p className="col-5">{card.front}</p>
              <p className="col-2"></p>
              <p className="col-5">{card.back}</p>
            </span>
            <div className="float-right row">
              <Link
                to={`${url}/cards/${card.id}/edit`}
                className="btn btn-secondary"
              >
                <span className="oi oi-pencil" /> Edit
              </Link>
              <CardDelete
                error={error}
                setError={setError}
                deck={deck}
                setDeck={setDeck}
                cardId={card.id}
              />
            </div>
          </div>
        </div>
      ))
    : null;
}
