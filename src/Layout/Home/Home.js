import React, { Fragment, useEffect } from "react";
import { listDecks } from "../../utils/api/index";

import CreateDeckButton from "./CreateDeckButton";
import DecksMap from "./DecksMap";
import ErrorMessage from "../Common/ErrorMessage";

export default function Home({ decks, setDecks, error, setError }) {
  useEffect(() => {
    const abortController = new AbortController();
    listDecks(abortController.signal)
      .then(setDecks)
      .catch((err) => {
        setError(() => err);
        console.log(err);
      });
    return () => abortController.abort();
  }, []);

  if (error) {
    return <ErrorMessage setError={setError} />;
  }

  return (
    <Fragment>
      <CreateDeckButton />
      <DecksMap
        decks={decks}
        setDecks={setDecks}
        error={error}
        setError={setError}
      />
    </Fragment>
  );
}
