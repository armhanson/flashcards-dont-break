import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { updateDeck } from "../../utils/api";
import ErrorMessage from "../Common/ErrorMessage";

export default function EditDeck({ deck, setDeck, deckUrl, error, setError }) {
  const history = useHistory();
  const [formData, setFormData] = useState({ ...deck });

  useEffect(() => {
    setFormData(() => ({ ...deck }));
  }, [deck]);

  function handleChange({ target }) {
    setFormData(() => ({ ...formData, [target.name]: target.value }));
    console.log(formData);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const abortController = new AbortController();
    updateDeck(formData, abortController.signal)
      .then((response) => setDeck(() => ({ ...deck, ...response })))
      .then(history.push(deckUrl))
      .catch((err) => {
        setError(() => err);
        console.log(err);
      });
  }

  if (error) {
    return <ErrorMessage setError={setError} />;
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
		  <li className="breadcrumb-item active" aria-current="page">
            Edit Deck
          </li>
        </ol>
      </nav>
	  <h2>Edit Deck: {deck.name}</h2>
      <form name="editDeck" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">Name</label>
          <textarea
            name="name"
            type="text"
            value={formData.name}
            className="form-control"
            id="exampleFormControlTextarea1"
            placeholder="Deck Name"
            onChange={handleChange}
            required
          ></textarea>
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
