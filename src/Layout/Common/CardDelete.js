import React from "react";
import { deleteCard } from "../../utils/api/index";
import ErrorMessage from "../Common/ErrorMessage";

export default function CardDelete({ error, setError, deck, cardId, setDeck }) {
  const abortController = new AbortController();

  function handleDelete(event) {
    event.preventDefault();
    const answer = window.confirm(
      "Delete the card?\n\nYou will not be able to recover it."
    );
    if (answer) {
      deleteCard(cardId, abortController.signal)
        .then(() => {
          const filteredCards = deck.cards.filter((card) => card.id !== cardId);
          setDeck(() => {
            return { ...deck, cards: filteredCards };
          });
        })
        .catch((err) => {
          setError(() => err);
          console.error(err);
        });
    }
  }

  if (error) {
    return <ErrorMessage setError={setError} />;
  }
  return (
    <button type="button" className="btn btn-danger" onClick={handleDelete}>
      <p className="oi oi-trash"></p>
    </button>
  );
}
