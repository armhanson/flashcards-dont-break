import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { listDecks } from "../../utils/api/index";

export default function EditDeck() {
  // setting initial form state to hold an object of this shape
  const initialFormState = {
    name: "",
    text: "",
  };

  const [formData, setFormData] = useState({ ...initialFormState });

  // target looks at the current input happening and returns the requested portion of the data
  const handleChange = (event) => {
    event.preventDefault();
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  //
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted:", formData);
    setFormData({ ...formData, initialFormState });
  };

  const [deck, setDeck] = useState();

  useEffect(() => {
    const abortController = new AbortController();

    listDecks(abortController.signal).then(setDeck).catch(console.log);
    return () => abortController.abort();
  }, [setDeck]);

  return (
    <div>
      <nav className="navbar navbar-sm bg-light">
        <Link to="/" className="oi oi-home">
          {" "}
          {/* {deck.name} */}
        </Link>
        <p>/</p>
        <Link to="/decks/:deckId" className="">
          {" "}
          Current Deck
        </Link>
        <p>/</p>
        <p>Edit Deck</p>
      </nav>
      <h2>Edit Deck</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="deckName">
          Name <br />
          <input
            id="deckName"
            type="text"
            name="deckName"
            className="form-control"
            required={true}
            onChange={handleChange}
            value={formData.deckName}
          />
        </label>
        <br />
        <label htmlFor="description">
          Description <br />
          <textarea
            id="description"
            type="text"
            name="description"
            className="form-control"
            onChange={handleChange}
            value={formData.description}
          />
        </label>
        <br />
        <Link to="/decks/:deckId">
          <Button variant="secondary" style={{ marginRight: 4 }}>
            Cancel
          </Button>
        </Link>
        <Link to="/decks/:deckId">
          <Button
            type="submit"
            id="create"
            variant="primary"
            style={{ marginLeft: 4 }}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Link>
      </form>
    </div>
  );
}
