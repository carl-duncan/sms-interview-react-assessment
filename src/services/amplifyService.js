import { DataStore } from '@aws-amplify/datastore';
import { Auth } from 'aws-amplify';
import { Deck } from '../models';

export const createDeck = async (deck) => {
  let user = await Auth.currentAuthenticatedUser();

  let userId = user.attributes.sub;
  await DataStore.save(
    new Deck({
      "name": deck.name,
      "faction": deck.faction,
      "cards":  [],
      "userId": userId
    })
  );

}

export const getDecks = async (searchTerm) => {
  const user = await Auth.currentAuthenticatedUser();
  const userId = user.attributes.sub;

  const decks = await DataStore.query(Deck);

  return decks;
};

export const deleteDeck = async (deck) => {
  await DataStore.delete(deck);
}

// add a card to a deck
export const addToDeck = async (deck, card) => {
  await DataStore.save(
    Deck.copyOf(deck, updated => {
      updated.cards.push(card);
    })
  );
}