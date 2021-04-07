import React, { useState } from "react";

export function CardForm({
  onSubmit,
  onDone,
  deckName = "Loading...",
  initialState,
  doneButtonLabel = "Done",
}) {
  const [card, setCard] = useState(initialState);

  const handleChange = ({ target: { name, value } }) => {
    setCard((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  function handleSubmit(event) {
    event.preventDefault();
    event.stopPropagation();
    onSubmit({ ...card });
    setCard({ front: "", back: "" });
  }

  return (
    <form onSubmit={handleSubmit} className="card-form">
      <fieldset>
        <legend>{deckName}: Add Card</legend>

        <div className="form-group">
          <label htmlFor="front">Front</label>
          <textarea
            id="front"
            name="front"
            tabIndex="1"
            className="form-control"
            required={true}
            placeholder="Front side of card"
            value={card.front}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="back">Back</label>
          <textarea
            id="back"
            name="back"
            tabIndex="2"
            className="form-control"
            required={true}
            placeholder="Back side of card"
            value={card.back}
            onChange={handleChange}
          />
        </div>

        <button
          className="btn btn-secondary mr-2"
          onClick={onDone}
          tabIndex="4"
        >
          {doneButtonLabel}
        </button>
        <button type="submit" className="btn btn-primary" tabIndex="3">
          Save
        </button>
      </fieldset>
    </form>
  );
}

export default CardForm;
