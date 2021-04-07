import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export default function StudyCards({ deck }) {
  const [frontView, setFrontView] = useState(true);
  const [index, setIndex] = useState(0);
  const history = useHistory();

  const handleFlip = () => {
    setFrontView(() => !frontView);
  };

  const handleNext = () => {
    if (deck.cards.length === (index + 1)) {
      const answer = window.confirm(
        "Restart cards?\n\nClick cancel to return to the home page."
      );
      answer ? setIndex(() => 0) : history.push("/");
    } else {
      setIndex(() => index + 1);
    }
    setFrontView(() => true);
  };

  return (
    <div className="card">
      <div className="card-body">
        <h3 className="card-title">
          Card {index + 1} of {deck.cards.length}
        </h3>
        <p className="card-text">
          {deck.cards.length !== 0
            ? frontView
              ? deck.cards[index].front
              : deck.cards[index].back
            : null}
        </p>
        <button className="btn btn-secondary" onClick={handleFlip}>
          Flip
        </button>
        {!frontView ? (
          <button className="btn btn-primary" onClick={handleNext}>
            Next
          </button>
        ) : null}
      </div>
    </div>
  );
}
