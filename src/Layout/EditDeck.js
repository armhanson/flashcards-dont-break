import React, { useState } from "react";

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
      </form>
    </div>
  );
}
