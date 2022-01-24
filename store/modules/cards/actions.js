import { ADD_CARD, DEL_CARD } from "./actionTypes";

export const addCard = (cardToAdd) => {
  return {
    type: ADD_CARD,
    payload: cardToAdd,
  }
}

export const delCard = (cardToDel) => {
  return {
    type: DEL_CARD,
    payload: cardToDel,
  }
}