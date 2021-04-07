import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import ErrorMessage from "../Common/ErrorMessage";
import { createDeck } from "../../utils/api/index";

export default function CreateDeck({ decks, setDecks, error, setError }) {
  const [formData, setFormData] = useState({ name: "", description: "" });
  const history = useHistory();
  const newDecks = decks;

  function handleChange({ target }) {
    setFormData(() => ({ ...formData, [target.name]: target.value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    const abortController = new AbortController();
    createDeck(formData, abortController.signal)
      .then((response) => {
        newDecks.push(response);
        setDecks(() => newDecks);
        history.push(`/decks/${response.id}`);
      })
      .catch(setError);
    return () => abortController.abort();
  }

  if (error) {
    return <ErrorMessage setError="setError" />;
  }

  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">
              <span className="pb-1 oi oi-home" /> Home
            </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Create Deck
          </li>
        </ol>
      </nav>
      <form name="addDeck" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">Name</label>
          <input
            name="name"
            type="text"
            value={formData.name}
            className="form-control"
            id="exampleFormControlTextarea1"
            placeholder="Deck Name"
            onChange={handleChange}
            required
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">Description</label>
          <textarea
            name="description"
            rows="3"
            value={formData.description}
            className="form-control"
            id="exampleFormControlTextarea1"
            placeholder="Enter a brief description of the card here."
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <Link className="btn btn-secondary mr-1" to="/">
          Cancel
        </Link>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
