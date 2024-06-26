import { createSlice } from "@reduxjs/toolkit";

import {
  fetchProductsAsync,
  addProductAsync,
  deleteProductAsync,
  editProductAsync
} from "./thunks";

const initialState: ProductsSliceState = {
  value: [],
  status: "idle",
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProductsAsync.fulfilled, (state, action) => {
        if (Array.isArray(action.payload)) {
          state.value = action.payload
        }
        state.status = "idle";
      })
      .addCase(addProductAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addProductAsync.fulfilled, (state, action) => {
        if (action.payload) {
          state.value.push(action.payload)
        }
        state.status = "idle";
      })
      .addCase(editProductAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(editProductAsync.fulfilled, (state, action) => {
        if (action.payload) {
          state.value = state.value.map(product => {
            if (product.id === action.payload.id) {
              return action.payload
            }
            return product
          })
        }
        state.status = "idle";
      })
      .addCase(deleteProductAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteProductAsync.fulfilled, (state, action) => {
        if (action.payload) {
          state.value = state.value.filter(product => product.id !== action.payload)
        }
        state.status = "idle";
      })
  },
});

export interface ProductsSliceState {
  value: Product[];
  status: "idle" | "loading" | "failed";
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
}
