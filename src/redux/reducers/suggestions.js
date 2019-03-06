import { type as findSuggestionsType } from "../actions/findSuggestions";

import items from "../../data/items";
const defaultState = [];

function reducer(state = defaultState, { type, payload }) {
  switch (type) {
    case findSuggestionsType: {
      //se crea una expresion regular con el flag para no tener en cuenta mayusculas
      const regex = new RegExp(`^${payload}`, "i");
      return items.filter(item => regex.test(item.title));
    }
    default:
      return state;
  }
}

export default reducer;
