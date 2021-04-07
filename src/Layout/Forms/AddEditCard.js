import React, { useEffect, useState } from "react";
import { Link, useRouteMatch, useHistory, useParams } from "react-router-dom";
import ErrorMessage from "../Common/ErrorMessage";
import { createCard, readCard, updateCard } from "../../utils/api/index";

export default function AddEditCard({
  edit,
  deck,
  setDeck,
  deckUrl,
  deckId,
  error,
  setError,
}) {
  const [formData, setFormData] = useState({});
  const [card, setCard] = useState({});
  const abortController = new AbortController();
  const history = useHistory();
  const newDeck = deck;
  const {
    params: { cardId },
  } = useRouteMatch();

  useEffect(() => {
    if (edit) {
      readCard(cardId, abortController.signal)
        .then((response) => {
          setCard(() => ({ ...card, ...response }));
        })
        .catch(setError);
    } else {
      return () => abortController.abort();
    }
  }, []);

  useEffect(() => {
    setFormData(() => ({
      ...formData,
      ...card,
    }));
  }, [card]);

  function handleChange({ target }) {
    setFormData(() => ({ ...formData, [target.name]: target.value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (edit) {
      updateCard(formData, abortController.signal)
        .then((response) => {
          const index = deck.cards.findIndex(
            (selected) => selected.id === card.id
          );
          newDeck.cards[index] = response;
          setDeck(() => ({ ...newDeck }));
        })
        .then(history.push(deckUrl))
        .catch((err) => {
          setError(() => err);
          console.log(err);
        });
    } else {
      createCard(deckId, formData, abortController.signal)
        .then((response) => {
          newDeck.cards.push(response);
          setDeck(() => ({ ...newDeck }));
        })
        .then(() => setFormData(() => ({ ...formData, front: "", back: "" })))
        .catch((err) => {
          setError(err);
          console.log(err);
        });
    }
  }

  if (error) {
    return <ErrorMessage setError="setError" />;
  }

  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/" className="oi oi-home">
              <span className="oi oi-home" />
              Home
            </Link>
          </li>
          <li className="breadcrumb-item">
            <Link to={deckUrl}>{deck.name}</Link>
          </li>
          {edit ? (
            <li className="breadcrumb-item active" aria-current="page">
              Edit Card {cardId}
            </li>
          ) : (
            <li className="breadcrumb-item active" aria-current="page">
              Add Card
            </li>
          )}
        </ol>
      </nav>
      {edit ? <h2>Edit Card</h2> : <h2>{deck.name}: Add Card</h2>}
      <form name="addCard" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="textarea1">Front</label>
          <textarea
            name="front"
            value={formData.front}
            className="form-control"
            id="textarea1"
            rows="3"
            placeholder="Front side of card"
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="textarea1">Back</label>
          <textarea
            name="back"
            value={formData.back}
            className="form-control"
            id="textarea1"
            rows="3"
            placeholder="Back side of card"
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <Link className="btn btn-secondary mr-1" to={deckUrl}>
          Cancel
        </Link>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
