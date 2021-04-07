import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { createDeck } from "../../utils/api/index";

export default function CreateDeck() {
  const initialFormState = {
    name: "",
    text: "",
  };

  const [formData, setFormData] = useState({ ...initialFormState });
  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted:", formData);
    setFormData({ ...initialFormState });
  };

  return (
    <div>
      <h2>Create Deck</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="deckName">
          Name <br />
          <input
            id="deckName"
            type="text"
            name="deckName"
            onChange={handleChange}
            value={formData.name}
          />
        </label>
        <br />
        <label htmlFor="description">
          Description <br />
          <textarea
            id="description"
            type="text"
            name="description"
            onChange={handleChange}
            value={formData.description}
          />
        </label>
        <br />
        <Link to="/">
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
