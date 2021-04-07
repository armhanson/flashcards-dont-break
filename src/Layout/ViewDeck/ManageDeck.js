import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import DeckDelete from "../Common/DeckDelete";

export default function ManageDeck({
  deck,
  deckId,
  decks,
  setDecks,
  error,
  setError,
}) {
  const { url } = useRouteMatch();

  return Object.keys(deck).length > 0 ? (
    <div className="card">
      <div className="card-body">
        <h3 className="card-title">{deck.name}</h3>
        <p className="card-text">{deck.description}</p>
        <Link to={`${url}/edit`} className="btn btn-secondary">
          <span className="oi oi-pencil" /> Edit
        </Link>
        <Link to={`${url}/study`} className="btn btn-primary">
          <span className="oi oi-book" /> Study
        </Link>
        <Link to={`${url}/cards/new`} className="btn btn-primary">
          <span className="oi oi-plus" /> Add Card
        </Link>
        <DeckDelete
          deckId={deckId}
          decks={decks}
          setDecks={setDecks}
          error={error}
          setError={setError}
        />
      </div>
    </div>
  ) : null;
}
