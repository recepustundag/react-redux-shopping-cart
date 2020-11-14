import { REMOVE_TO_CART } from "./types";

export const removeItem = id => {
  return { type: REMOVE_TO_CART, payload: { id } };
};
