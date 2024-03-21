import type { ReduxState } from "@/lib/redux";

// The function below is called a selector and allows us to select a value from the state
export const selectProducts = (state: ReduxState) => state.products.value;
export const selectProduct = (state: ReduxState, id: number) => {
  return state.products.value.find(product => product.id === id)
}
