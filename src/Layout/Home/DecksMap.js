import React from "react";
import { Link } from "react-router-dom";
import DeckDelete from "../Common/DeckDelete";

export default function DecksMap({ decks, setDecks, error, setError }) {
  return (
    <div>
      {decks.map((deck, index) => (
        <div className="card">
          <div className="card-body">
            <h3 className="card-title">{deck.name}</h3>
            {deck.cards ? <small>{deck.cards.length} cards</small> : null}
          </div>
          <p className="card-text">{deck.description}</p>
          <Link to={`/decks/${index + 1}`} className="btn btn-secondary">
            <span className="oi oi-eye" />
            View
          </Link>
          <Link to={`/decks/${index + 1}/study`} className="btn btn-primary">
            <span className="oi oi-book" /> Study
          </Link>
          <DeckDelete
            deckId={deck.id}
            decks={decks}
            setDecks={setDecks}
            error={error}
            setError={setError}
          />
        </div>
      ))}
    </div>
  );
}
