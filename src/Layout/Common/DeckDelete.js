import React from "react";
import { useHistory } from "react-router-dom";
import { deleteDeck } from "../../utils/api/index";
import ErrorMessage from "../Common/ErrorMessage";

export default function DeckDelete({
  deckId,
  decks,
  setDecks,
  error,
  setError,
}) {
  const abortController = new AbortController();
  const history = useHistory();

  function handleDelete(event) {
    event.preventDefault();
    const answer = window.confirm(
      "Delete the deck?\n\nYou will not be able to recover it."
    );
    if (answer) {
      deleteDeck(deckId, abortController.signal)
        .then(() => {
          const filteredDecks = decks.filter((deck) => deck.id !== deckId);
          setDecks(() => {
            return [...filteredDecks];
          });
        })
        .then(history.push("/"))
        .catch((err) => {
          setError(() => err);
          console.error(err);
        });
    }
  };
  if (error) {
    return <ErrorMessage setError={setError} />;
  }

  return (
    <div>
      <button className="btn btn-danger float-right" onClick={handleDelete}>
        <span className="oi oi-trash"></span>
      </button>
    </div>
  );
}
