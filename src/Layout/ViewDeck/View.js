import React, { Fragment, useEffect, useState } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import { readDeck } from "../../utils/api";
import AddEditCard from "../Forms/AddEditCard";
import CardList from "./CardList";
import EditDeck from "../Forms/EditDeck";
import ManageDeck from "./ManageDeck";
import Study from "../Study/Study";
import ViewNav from "./ViewNav";

export default function View({ decks, setDecks, error, setError }) {
  const [deck, setDeck] = useState({});
  const abortController = new AbortController();

  const {
    params: { deckId },
    url,
  } = useRouteMatch();

  useEffect(() => {
    readDeck(deckId, abortController.signal).then(setDeck).catch(setError);
    return () => abortController.abort();
  }, []);

  return (
    <Fragment>
      <Switch>
        <Route path={`${url}/cards/:cardId/edit`}>
          <AddEditCard
            edit={true}
            deck={deck}
            setDeck={setDeck}
            deckUrl={url}
            deckId={deckId}
            error={error}
            setError={setError}
          />
        </Route>
        <Route path={`${url}/cards/new`}>
          <AddEditCard
            edit={false}
            deck={deck}
            setDeck={setDeck}
            deckUrl={url}
            deckId={deckId}
            error={error}
            setError={setError}
          />
        </Route>
        <Route path={`${url}/edit`}>
          <EditDeck
            deck={deck}
            setDeck={setDeck}
            error={error}
            setError={setError}
            deckUrl={url}
          />
        </Route>
        <Route path={`${url}/study`}>
          <Study
            deckId={deckId}
            deck={deck}
            setDeck={setDeck}
            error={error}
            setError={setError}
          />
        </Route>
        <Route exact path={url}>
          <ViewNav deck={deck} />
          <ManageDeck
            deck={deck}
            deckId={deckId}
            decks={decks}
            setDecks={setDecks}
            error={error}
            setError={setError}
          />
          {Object.keys(deck).length > 0 ? (
            deck.cards.length > 0 ? (
              <h2 className="mb-3">Cards</h2>
            ) : (
              <h2>There are no cards in this deck yet.</h2>
            )
          ) : null}
          <CardList
            deck={deck}
            setDeck={setDeck}
            error={error}
            setError={setError}
            url={url}
          />
        </Route>
      </Switch>
    </Fragment>
  );
}
