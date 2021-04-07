import React, { useState } from "react";
import { useRouteMatch } from "react-router-dom";

import ErrorMessage from "../Common/ErrorMessage";
import NotEnoughCards from "./NotEnoughCards";
import StudyCards from "./StudyCards";
import StudyNav from "./StudyNav";

export default function Study({ deckId, deck, error, setError}) {
  const { url } = useRouteMatch();

  if (error) {
    return <ErrorMessage setError={setError} />;
  }

  return (
    <div>
      <StudyNav deck={deck} deckId={deckId} />
      <h2>Study: {deck.name}</h2>
      {Object.keys(deck).length ? (
        deck.cards.length > 2 ? (
          <StudyCards
            deck={deck}
          />
        ) : (
          <NotEnoughCards deck={deck} url={url} />
        )
      ) : null}
    </div>
  );
}
