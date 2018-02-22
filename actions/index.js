import { FETCH_DECKS, ADD_DECK, ADD_QUESTION } from './types'


export const getDecks = decks => ({
    type: FETCH_DECKS,
    decks,
});

export const addDeck = deck => ({
    type: ADD_DECK,
    deck,
});

export const addQuestion = params => ({
    type: ADD_QUESTION,
    params,
});
