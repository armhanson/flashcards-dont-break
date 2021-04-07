import React from "react";
import { Link } from "react-router-dom";

export default function NotEnoughCards({ deck }) {
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">Not enough cards</h3>
          <p class-name="card-text">
            At least 3 cards are required to study. You have
            {deck.cards.length === 1
              ? " 1 card "
              : ` ${deck.cards.length} cards `}
            in this deck.
          </p>
          <Link to={`/decks/${deck.id}/cards/new`}>
            <span className="oi oi-plus" /> Add Cards
          </Link>
        </div>
      </div>
    </div>
  );
}
