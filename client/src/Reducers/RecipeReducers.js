import { SAVE_TO_LOCALSTORE } from "../Constants/RecipeConstants";

export const recipeReducers = (state = [], action) => {
  switch (action.type) {
    case SAVE_TO_LOCALSTORE:
      return [...state, action.payload];
    default:
      return state;
  }
};
